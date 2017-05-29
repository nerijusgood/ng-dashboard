//todo: realtime, añadir datos a this.data. Al ser observable debería reflejar los cambios automáticamente
//todo: usar con mobx para probar a ver cambios en tiempo real
//todo: arreglar lo de cargar d3.js desde el directorio /src/
//todo: intentar que funcione this.data con observables para que se actualicen los valores automaticamente
//      y poder hacer realtime
//todo: hacer config.data un observable para obtener reactividad en tiempo real
//todo: MG y d3 no deberian ser declarados en typing.ts
//todo: poder ejecutar funciones arbitrarias para filtrar y arreglar los datos (de forma menos restrictiva que la actual)
//todo: hacer about page
//todo: hacer otro grafico de tipo barras con colores
//todo: hacer tabla?
//todo: poner en header icono con badge que apunte a una pagina con una tabla (ml-table) de mensajes (usar mobx?)
//todo: quitar hasbang en url
//todo: habria que hacer un @input para pasar un objeto al metodo http y poder configurar CORS

import {
  Component, ViewChild, ElementRef, ViewEncapsulation, HostListener, Input, NgZone,
  ChangeDetectionStrategy,
} from '@angular/core';
import {Http} from "@angular/http";
import './metricsgraphics.js';

export interface IMGConfig {
  title?: string,
  data_type?: string,
  data?: any,
  x_accessor?: string,
  y_accessor?: string,
  width?: number,
  height?: number
  target?: HTMLElement,
  animate_on_load?: boolean,
  [otherArgs: string]: any
}

@Component({
selector: 'mg-graphic',
moduleId: module.id,
styleUrls: ['metricsgraphics.css'],
encapsulation: ViewEncapsulation.None,
template: `

<style>
  .loader {
    position: relative;
    top: 100px;
    display: block;
    width: 100px;
    margin: auto;
    background-color: aliceblue;
    color: dodgerblue;
    padding: 5px;
    border: 1px solid;
    border-radius: 2px;
    text-align: center;
  }
</style>

<div *ngIf="isLoading" class="loader">Loading</div>
<div #chartContainer style="width: 100%"></div>

`// template
})
export class MetricsGraphicsCmp {

  @ViewChild('chartContainer') chartContainer: ElementRef;
  @Input() urlData: string;
  @Input() config: IMGConfig;
  @Input('preprocess-fn') preprocessFn: Function;
  isLoading: boolean = false;
  data: any;

  @HostListener('window:resize') onWindowsResize() {
    this.config.width = this.chartContainer.nativeElement.clientWidth;
    this.isLoading = true;
      setTimeout( () => {
        this.isLoading = false;
        this.draw_MG_Graphic(this.config);
      }, 1);
  }

  constructor(private http: Http, private zone: NgZone){}

  /**
   * Run MetricGraphics outside Angular Change Detection to avoid
   * unnecesary calculation when mouseover graphic
   */
  draw_MG_Graphic(config: IMGConfig){
    this.zone.runOutsideAngular( () => {
      MG.data_graphic(config);
    })
  }

  ngOnInit(){
    if(this.urlData){
      this.http.get(this.urlData).subscribe( response => {
        this.data = response.json();
        this.preprocessFn && this.preprocessFn(this.data);
        this.config.data = this.data;
        this.config.width = this.chartContainer.nativeElement.clientWidth;
        this.config.target = this.chartContainer.nativeElement;
        this.draw_MG_Graphic(this.config);
      });
    }
  }

  ngOnChanges(){
    if(this.config.data){
      this.draw_MG_Graphic(this.config);
    }
  }
}
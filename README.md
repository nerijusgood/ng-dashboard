<!-- <p align="center"><img src="src/assets/img/about9.jpg" style="margin: auto; width: 90px"></p> -->
<p align="center"><img src="src/assets/img/about9.jpg" style="width: 580px; height: 325px"></p>

<h1><p align="center">NG Dashboard</p></h1>
<h2><p align="center">Dashboard for Angular (versions 4 +)</p></h2>

<p align="center"><b>If you find this project useful and are going to use it, please give a star in the repo and credits to the author.</b></p>

## Features

- Use of asynchrony for best responsiveness and maximum speed rendering. Expensive operations like data calculations and
  painting on screen are put in **asynchronous** and **sequential** code blocks. This frees the main thread for rendering the whole
  user interface without blocking and allows fast TTI (Time To Interactive)
- Includes MG Chart. An Angular component based on <a href="http://metricsgraphicsjs.org" target="_blank">Metrics Graphics JS</a>
- Includes LMap. An Angular Directive based on <a href="http://leafletjs.com" target="_blank">Leaflet JS</a>
- UI was quickly assembled based on this component library: <a href="https://github.com/YagoLopez/material-light" target="_blank">Material Light</a>
- ChartJS Component will be added soon. <a href="http://www.chartjs.org/" target="_blank">(ChartJS Website)</a>

## Demo

- <a href="https://yagolopez.github.io/ng-dashboard/dist" target="_blank">Full Screen (For Mobile)</a>

- <a href="http://mobt.me/ZPt4" target="_blank">Mobile Simulator (For Desktop).</a>
<b style="color: red"> Warning:</b> Content in iframes may have javascript restrictions for
security reasons (i. e. alert dialogs). Run the full screen version for unrestricted features.


## Requierements

- Latest versions of node and npm or yarn
- Latest versions of Angular-CLI

## Insallation and Use

1. Using Node:
- Install: `npm install --save YagoLopez/ng-dashboard`
- Go to project directory: `cd ng-dashboard`
- Run: `npm install`
- Run: `ng serve` from directory project
- Metrics Graphics Chart Component is located in `mgChart` folder.
  1.1. If you want to use this component, you can copy this folder to your `app` folder and import `mgChartMod` 
  in your own module or 
  1.2. Import it directily from `/node_modules/ng-dashboard/src/app/mgChart/mgChartMod.ts`. 
  IMPORTANT: `d3.js` must be in your root app directory. This requirement is harcoded in `metricsgraphics.js`. 
  It doesn't depend on this project.
- Leaflet Map Directive is located in `leafletMap` folder. If you want to use this directive:
  2.1. Copy this folder to your `app` folder and import `NgLMapDir` in your own component or 
  2.2. Import it directily from `/node_modules/ng-dashboard/src/app/leafletMap/ngLMapDir.ts`.

2. Whitout node:
- Clone or download the repository and follow the same steps as before

## MetricsGraphics Chart Component API

```HTML5
<mg-chart [urlData]="urlDataString" [request-options]="requestOptions" 
  [config]="configObject [preprocess-fn]="preprocessFn" [delay]="delay"></mg-chart>
```

- <b>urlData:</b> Ulr pointing to a local/remote json file with data (Remote data could have CORS restrictions)
- <b>request Options:</b> Request options object of type: 
  <a href="https://angular.io/api/http/RequestOptions" target="_blank">RequestOptions</a>
- <b>config:</b> Javascript object with configuration values for MetricsGraphics. 
(Check <a href="https://github.com/mozilla/metrics-graphics/wiki/List-of-Options" target="_blank">MG Options</a> for more information)
- <b>preprocess-Fn:</b> Applies Javascript transformations to input data (for example format dates, etc.)
- <b>delay</b> Delay the loading of data (ms). It could be useful when having serveral charts in same page
- For using MetricsGraphics global object in your component class you can use `declare var MG: any`

## Leaflet Map Directive API

```HTML5
<div l-map [l-token]="token" [l-center]="center" [l-zoom]="zoom" [l-options]="options"></div>
```

- <b>l-token:</b> String with access token (Get a token in Leaflet website).
- <b>l-center:</b> Tuple with type `[number, number]` with the coordinates of the map center (latitude and longitude)
- <b>l-zoom:</b> Number with initial zoom
- <b>l-options:</b> (Optional) Javascript object with additional configuration options. Check 
<a href="http://leafletjs.com/reference-1.0.3.html" target="_blank">Leaflet documentation</a> 
for more information on map options

## Testing

<div>Tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

<a href="#">Back to top</a>

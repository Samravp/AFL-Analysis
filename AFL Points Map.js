anychart.onDocumentReady(function () {
  var dataSet = [
  {'id': 'AU.WA', 'value': 89.7},
  //{'id': 'AU.JB', 'value': 0}, 
  {'id': 'AU.NS', 'value': 93.9}, 
  {'id': 'AU.VI', 'value':94}, 
  //{'id': 'AU.NT', 'value': 0}, 
  //{'id': 'AU.TS', 'value': 0}, 
  //{'id': 'AU.CT', 'value': 0}, 				 
  {'id': 'AU.SA', 'value':92.3},                
  {'id': 'AU.QL', 'value': 97}  
  ];

  var map = anychart.map();
  map.geoData(anychart.maps.australia);

  // stroke the undefined regions
  map.unboundRegions().stroke('green'); 
  
  map.title().useHtml(true).hAlign('center');
  map.title('<span style="font-size: 18px;">AFL Average Points by State (2012-2021)');

  // set the colorRange preferences
  var cr = map.colorRange();
  cr.colorLineSize(15);
  cr.align('center');
  cr.stroke(null);
  cr.ticks().stroke('rgb(216,216,216)');
  cr.ticks().position('center').length(15);

  // set the series
  var series = map.choropleth(dataSet);

series.stroke('#000 .3');
series.labels().fontColor('black');

// define the color of the hovered district
series.selected().fill('#5588ff');

// making of the ordinal colorRange
ocs = anychart.scales.ordinalColor([
{less: 90},
{from: 90, to: 93},
{from: 93, to: 93.9},
{from: 94, to: 95},
{greater: 95}
]);
ocs.colors(['rgb(253,225,86)', 'rgb(248,196,57)', 'rgb(244,168,19)', 'rgb(198,109,1)', 'rgb(152,58,0)']);

// tell the series what to use as a colorRange (colorScale)
series.colorScale(ocs);

map.container('container');
map.draw();
});
var xValues = ['Adelaide', 'Brisbane Lions', 'Carlton', 'Collingwood', 'Essendon','Fremantle','Geelong','Gold Coast',
                'Greater Western Sydney','Hawthorn','Melbourne','North Melbourne','Port Adelaide','Richmond','St Kilda',
                'Sydney','West Coast','Western Bulldogs',];

var yValues =  ['Western Bulldogs', 'West Coast', 'Sydney', 'St Kilda', 'Richmond','Port Adelaide','North Melbourne','Melbourne',
                'Hawthorn','Greater Western Sydney','Gold Coast','Geelong','Fremantle','Essendon','Collingwood',
                'Carlton','Brisbane Lions','Adelaide',];


var zValues = 
[
  [33,	44,	50,	58,	50,	58,	54,	33,	71,	73,	50,	44,	57,	45,	64,	46,	50,	0,	18],
  [53,	75,	50,	53,	33,	53,	45,	33,	54,	50,	31,	38,	62,	50,	50,	36,	0,	50,	17],
  [50, 60,	36,	17,	36,	50,	53,	42,	41,	45,	64,	57,	58,	67,	57,	0,	64,	54,	16],
  [67,	50,	40,	70,	50,	42,	55,	64,	42,	36,	44,	62,	73,	44,	0,	43,	50,	36,	15],
  [67,	47,	31,	40,	50,	50,	47,	50,	56,	31,	50,	58,	73,	0,	56,	33,	50,	55,	14],
  [47,	46,	54,	69,	50,	56,	36,	75,	50,	46,	67,	73,	0,	27,	27,	42,	38,	43,	13],
  [47,	47,	50,	73,	60,	58,	63,	64,	36,	54,	50,	0,	27,	42,	38,	43,	62,	56,	12],
  [54,	31,	82,	29,	90,	23,	57,	38,	47,	54,	0,	50, 33,	50,	56,	36,	69,	50,	11],
  [43,	25,	73,	40,	69,	43,	55,	25,	55,	0,	46,	46,	54,	69,	64,	55,	50,	27,	10],
  [64,	67,	50,	50,	38,	64,	54,	47,	0,	45,	53,	64,	50,	44,	58,	59,	46,	29,	9],
  [46,	53,	43,	50,	27,	36,	55,	0,	53,	75,	62,	36,	25,	50,	36,	58,	67,	67,	8],
  [60,	53,	45,	60,	36,	50,	0,	45,	46,	45,	43,	38,	64,	53,	45,	47,	55,	46,	7],
  [64,	42,	25,	55,	38,	0,	50,	64,	36,	57,	77,	42,	44,	50,	58,	50,	47,	42,	6],
  [55,	36,	47,	56,	0,	62,	64,	73,	62,	31,	10,	40,	50,	50,	50,	64,	67,	50,	5],
  [64,	67,	53,	0,	44,	45,	40,	50,	50,	60,	71,	27,	31,	60,	30,	83,	47,	42,	4],
  [9,	 62,	0,	 47,	53,	75,	55,	57,	50,	27,	18,	50,	46,	69,	60,	64,	50,	50,	3],
  [27,	0,	38,	33,	64,	58,	47,	47,	33,	75,	69,	53,	54,	53,	50,	40,	25,	56,	2],
  [0,	 73,	91,	36,	45,	36,	40,	54,	36,	57,	46,	53,	53,	33,	33,	50,	47,	67,	1],

];


var colorscaleValue = [
  [0, ' #ff9900'],
  [1, '#800000']
];

var data = [{
  x: xValues,
  y: yValues,
  z: zValues,
  type: 'heatmap',
  colorscale: colorscaleValue,
  showscale: true
}];

var layout = {
  title: 'AFL TEAM VS TEAM WIN RATE (%)',
  annotations: [],
  xaxis: {
    ticks: '',
    side: 'top'
  },
  yaxis: {
    ticks: '',
    ticksuffix: ' ',
    width: 500,
    height: 1000,
    autosize: true
  }
};

for ( var i = 0; i < yValues.length; i++ ) {
  for ( var j = 0; j < xValues.length; j++ ) {
    var currentValue = zValues[i][j];
    if (currentValue != 0.0) {
      var textColor = 'white';
    }else{
      var textColor = 'black';
    }
    var result = {
      xref: 'x1',
      yref: 'y1',
      x: xValues[j],
      y: yValues[i],
      text: zValues[i][j],
      font: {
        family: 'Copperplate',
        size: 16,
        color: 'rgb(50, 171, 96)'
      },
      showarrow: false,
      font: {
        color: textColor
      }
    };
    layout.annotations.push(result);
  }
}

Plotly.newPlot('myDiv', data, layout);


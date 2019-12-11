$(document).ready(function () {
  init();
  console.log("once")
  parentPostMessage({
    isReady: true,
  });

});

let cts, myChart;
let type = "bar";
let label = [];
let labels = [1,2,4,6,412,12];
let data = [12,1,23,4,12,12];
let borderWidth = 1;
let backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)'
];

let borderColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
]

let options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

let chartSetting = {
  type: type,
  data: {
    labels: labels,
    datasets: [{
      label: label,
      data: data,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth
    }]
  },
  options: options
}


window.onmessage = e => {
  if(!e.data.isChart) return;

  if(e.data.chartSetting) {
    chartSetting = e.data.chartSetting;
  }

	

  if (e.data.type) {
    chartSetting.type = e.data.type;

    type = e.data.type;
  }
  if (e.data.labels) {
    chartSetting.data.labels = e.data.labels;
  }
  if (e.data.label) {
    chartSetting.data.datasets[0].label = e.data.label;
  }
  if (e.data.data) {
    chartSetting.data.datasets[0].data = e.data.data;
  }
  if (e.data.backgroundColor) {
    chartSetting.data.datasets[0].backgroundColor = e.data.backgroundColor;
  }
  if (e.data.borderColor) {
    chartSetting.data.datasets[0].borderColor = e.data.borderColor;
  }
  if (e.data.borderWidth) {
    chartSetting.data.datasets[0].borderWidth =  e.data.borderWidth;
  }
  if (e.data.options) {
    options = e.data.options;
  }
  refresh();

}


function init() {
  ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, chartSetting);
}

function refresh() {
  console.log("refreshing..." , chartSetting);
  myChart.destroy();
  myChart = new Chart(ctx, chartSetting);

}

function parentPostMessage(data) {
  window.parent.postMessage(data, "*");
}
$(function () {
  var defaultTitle = "Heatmap demo";
  var defaultSubtitle = "Data of China";
  // Prepare demo data

  $('#dataContent').html(defaultChinaCSV);
  var csvArr = csv2array(document.getElementById('dataContent').innerHTML);
  var chinaData = csvArr2dataArr(csvArr);

  Highcharts.setOptions({
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
          [1, 'rgb(240, 240, 255)']
        ]
      },
      borderWidth: 2,
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      plotBorderWidth: 1
    }
  });
  // Initiate the chart
  var heatMap = new Highcharts.Map({
    chart: {
      renderTo: 'container'
    },

    title: {
      text: defaultTitle
    },

    subtitle: {
      text: defaultSubtitle   //'Source map: <a href="https://code.highcharts.com/mapdata/countries/cn/custom/cn-all-sar-taiwan.js">China with Hong Kong, Macau, and Taiwan</a>'
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    //Checkout colorbrewer.org to find gradient colors
    colorAxis: {
      min: 0,
      max: $('#maxValueID').val(),
      type: 'linear',         //type: 'logarithmic',
      minColor: '#ffffb2',
      maxColor: '#bd0026'
    },

    series: [{
      data: chinaData,
      pointStart: 1,
      mapData: Highcharts.maps['countries/cn/custom/cn-all-sar'],
      joinBy: 'name',
      name: 'ONU data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  });
  $('#titleID').val(defaultTitle);
  $('#subtitleID').val(defaultSubtitle);

  var setTitles = function(){
    heatMap.setTitle({text:$('#titleID').val()}, {text: $('#subtitleID').val()});
  };

  $('#titleID').on("change input", function(){
    setTitles();
  });
  $('#subtitleID').on("change input", function(){
    setTitles();
  });

  $('#maxValueID').on("change mousemove",function(){
    var newMax = $('#maxValueID').val();
    heatMap.colorAxis[0].update({
      max: newMax
    }, false);
    heatMap.redraw();
  })

  $('#renderCSV').on("click", function(){
    var csvArr = csv2array(document.getElementById('dataContent').innerHTML);
    var data = csvArr2dataArr(csvArr);
    heatMap.series[0].update({
      data: data
    }, false);
    heatMap.redraw();
  })

  var colorChanged = function(){
    var minColor = '#' + $('#mincolor').val();
    var maxColor = '#' + $('#maxcolor').val();
    heatMap.colorAxis[0].update({
      minColor: minColor,
      maxColor: maxColor
    })
    heatMap.redraw();
  };

  $('#mincolor').on("change", colorChanged);
  $('#maxcolor').on("change", colorChanged);
  var axisTypeChanged = function(){
    type = $('input[name=type]:checked').val();

    heatMap.colorAxis[0].update({
      type: type
    }, false);
    heatMap.redraw();
  };

  $('input:radio').change(
    axisTypeChanged
  );
});


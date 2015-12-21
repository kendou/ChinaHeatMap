/**
 * Author: kenthuang72@gmail.com
 */
$(function () {
  $(".tabs-menu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });

  var defaultTitle = "Heatmap demo";
  var defaultSubtitle = "Device shipped";
  var maps = {
    "china" : Highcharts.maps["countries/cn/custom/cn-all-sar"],
    "asia" : Highcharts.maps["custom/asia"],
    "world" : Highcharts.maps["custom/world-lowres"]
  };
  var dataMap = {
    "china" : defaultChinaCSV,
    "asia" : defaultAsiaCSV,
    "world" : defaultWorldCSV
  };

  var map = window.location.hash;
  if(map === ""){
    map = "china";
  }
  else{
    map = map.substring(1);
  }

  $('input[name="' + 'map'+ '"][value="' + map + '"]').prop('checked', true);
  $('#dataContent').val(dataMap[map]);

  var setTitles = function(){
    heatMap.setTitle({text:$('#titleID').val()}, {text: $('#subtitleID').val()});
  };

  // Prepare demo data
  function prepareData(){
    var data = csvArr2dataArr(csv2array($('#dataContent').val()));
    var max = findMax(data);
    $('#topValueID').val(max*2);
    $('#maxValueID').attr('max', max*2);
    $('#maxValueID').val(max);
    $('#maxOutputID').val(max);

    return data;
  }

  $('#titleID').val(defaultTitle);
  $('#subtitleID').val(defaultSubtitle);

  var data = prepareData();

  Highcharts.setOptions({
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
          [1, 'rgb(240, 240, 255)']
        ]
      },
      borderWidth: 0,
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      plotBorderWidth: 1
    }
  });
  // Initiate the chart
  map = $('input[name=map]:checked').val();
  var heatMap = new Highcharts.Map({
    chart: {
      renderTo: 'container'
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
      minColor: '#' + $('#mincolor').val(),
      maxColor: '#' + $('#maxcolor').val()
    },
    //Change from default #7CB5EC to #F0F0F0, to represent empty data.
    colors: ['#f0f0f0', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
      '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],

    series: [{
      data: data,
      pointStart: 1,
      mapData: maps[map],
      joinBy: 'name',
      name: $('#serialNameID').val(),
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

  setTitles();

  $('#titleID').on("change input", setTitles);
  $('#subtitleID').on("change input", setTitles);
  $('#serialNameID').on("change input", function(){
    heatMap.series[0].update({
      name: $('#serialNameID').val()
    })
    heatMap.redraw();
  })

  $('#maxValueID').on("change mousemove",function(){
    var newMax = $('#maxValueID').val();
    heatMap.colorAxis[0].update({
      max: newMax
    }, false);
    heatMap.redraw();
  })

  $('#renderCSV').on("click", function(){
    var data = prepareData();
    heatMap.series[0].update({
      data: data,
//      max: max
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

  var mapChanged = function(){
    var options = heatMap.options;

    map = $('input[name=map]:checked').val();
    window.location.hash = '#' + map;
    location.reload();
  }

  var axisTypeChanged = function(){
    type = $('input[name=type]:checked').val();

    heatMap.colorAxis[0].update({
      type: type
    }, false);
    heatMap.redraw();
  };

  $('input:radio').change(mapChanged);
});


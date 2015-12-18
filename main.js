$(function () {
  var defaultTitle = "Heatmap demo";
  var defaultSubtitle = "Data of China";
  // Prepare demo data
  var data = [
 /*
    {
      "hc-key": "tw-ph",
      "value": 0
    },
*/    {
      "hc-key": "cn-sh",
      "value": 1
    },
/*    {
      "hc-key": "tw-km",
      "value": 2
    },
*/    {
      "hc-key": "cn-zj",
      "value": 3
    },
/*    {
      "hc-key": "tw-lk",
      "value": 4
    },
*/    {
      "hc-key": "cn-3664",
      "value": 5
    },
    {
      "hc-key": "cn-3681",
      "value": 6
    },
    {
      "hc-key": "cn-fj",
      "value": 7
    },
    {
      "hc-key": "cn-gd",
      "value": 8
    },
    {
      "hc-key": "cn-tw",
      "value": 34
    },
/*    {
      "hc-key": "tw-cs",
      "value": 10
    },
*/    {
      "hc-key": "cn-6657",
      "value": 11
    },
    {
      "hc-key": "cn-6663",
      "value": 12
    },
    {
      "hc-key": "cn-6665",
      "value": 13
    },
    {
      "hc-key": "cn-6666",
      "value": 14
    },
    {
      "hc-key": "cn-6667",
      "value": 15
    },
    {
      "hc-key": "cn-6669",
      "value": 16
    },
    {
      "hc-key": "cn-6670",
      "value": 17
    },
    {
      "hc-key": "cn-6671",
      "value": 18
    },
/*    {
      "hc-key": "tw-kh",
      "value": 19
    },
    {
      "hc-key": "tw-hs",
      "value": 20
    },
*/    {
      "hc-key": "cn-yn",
      "value": 21
    },
    {
      "hc-key": "cn-xz",
      "value": 22
    },
/*    {
      "hc-key": "tw-hh",
      "value": 23
    },
    {
      "hc-key": "tw-cl",
      "value": 24
    },
    {
      "hc-key": "tw-ml",
      "value": 25
    },
*/    {
      "hc-key": "cn-nx",
      "value": 26
    },
    {
      "hc-key": "cn-sa",
      "value": 27
    },
/*    {
      "hc-key": "tw-ty",
      "value": 28
    },
*/    {
      "hc-key": "cn-3682",
      "value": 29
    },
/*    {
      "hc-key": "tw-cg",
      "value": 30
    },
*/    {
      "hc-key": "cn-6655",
      "value": 31
    },
    {
      "hc-key": "cn-ah",
      "value": 32
    },
    {
      "hc-key": "cn-hu",
      "value": 33
    },
/*    {
      "hc-key": "tw-hl",
      "value": 34
    },
    {
      "hc-key": "tw-th",
      "value": 35
    },
*/    {
      "hc-key": "cn-6656",
      "value": 36
    },
/*    {
      "hc-key": "tw-nt",
      "value": 37
    },
*/    {
      "hc-key": "cn-6658",
      "value": 38
    },
    {
      "hc-key": "cn-6659",
      "value": 39
    },
    {
      "hc-key": "cn-cq",
      "value": 40
    },
    {
      "hc-key": "cn-hn",
      "value": 41
    },
/*    {
      "hc-key": "tw-yl",
      "value": 42
    },
*/    {
      "hc-key": "cn-6660",
      "value": 43
    },
    {
      "hc-key": "cn-6661",
      "value": 44
    },
    {
      "hc-key": "cn-6662",
      "value": 45
    },
    {
      "hc-key": "cn-6664",
      "value": 46
    },
    {
      "hc-key": "cn-6668",
      "value": 47
    },
/*    {
      "hc-key": "tw-pt",
      "value": 48
    },
    {
      "hc-key": "tw-tt",
      "value": 49
    },
    {
      "hc-key": "tw-tn",
      "value": 50
    },
*/    {
      "hc-key": "cn-bj",
      "value": 51
    },
    {
      "hc-key": "cn-hb",
      "value": 52
    },
/*    {
      "hc-key": "tw-il",
      "value": 53
    },
    {
      "hc-key": "tw-tp",
      "value": 54
    },
*/    {
      "hc-key": "cn-sd",
      "value": 55
    },
/*    {
      "hc-key": "tw-ch",
      "value": 56
    },
*/    {
      "hc-key": "cn-tj",
      "value": 57
    },
    {
      "hc-key": "cn-ha",
      "value": 58
    },
    {
      "hc-key": "cn-jl",
      "value": 59
    },
    {
      "hc-key": "cn-qh",
      "value": 60
    },
    {
      "hc-key": "cn-xj",
      "value": 61
    },
    {
      "hc-key": "cn-nm",
      "value": 62
    },
    {
      "hc-key": "cn-hl",
      "value": 63
    },
    {
      "hc-key": "cn-sc",
      "value": 64
    },
    {
      "hc-key": "cn-gz",
      "value": 65
    },
    {
      "hc-key": "cn-gx",
      "value": 66
    },
    {
      "hc-key": "cn-ln",
      "value": 67
    },
    {
      "hc-key": "cn-js",
      "value": 68
    },
    {
      "hc-key": "cn-gs",
      "value": 69
    },
    {
      "hc-key": "cn-sx",
      "value": 70
    },
    {
      "hc-key": "cn-he",
      "value": 71
    },
    {
      "hc-key": "cn-jx",
      "value": 72
    }
  ];

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
      min: 1,
      max: 100,
      type: 'linear',         //type: 'logarithmic',
      minColor: '#ffffb2',
      maxColor: '#bd0026',
      stops: [
        [0.2, '#ffffb2'],
        [0.4, '#fecc5c'],
        [0.6, '#fd8d3c'],
        [0.8, '#f03b20'],
        [1, 'bd0026']
      ]
    },

    series: [{
      data: data,
      mapData: Highcharts.maps['countries/cn/custom/cn-all-sar-taiwan'],
      joinBy: 'hc-key',
      name: 'Random data',
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
    heatMap.series[0].isDirty = true;
    heatMap.redraw();
  })

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


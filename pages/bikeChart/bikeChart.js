import * as echarts from '../../ec-canvas/echarts';
var util = require('../../utils/util')
var app = getApp()

let chart = null;

function getBikeData() {
  return new Promise((resolve, reject) => {
    util.request('/api/bikes', '', 'GET', (res) => {
      if (res.status === "success") {
        console.log("success")
        resolve(res);
      } else {
        console.log("false")
        resolve(res);
      }
    })
  })
}

function initChart(canvas, width, height, dpr) {
  var that = this;
  var yData = [];
  var xData = [];

  console.log('222')

  var p = getBikeData();

  p.then((data) => {
    var data = data.data
    console.log(data)
    // 遍历对象数组
    data.forEach((item) => {
      // 遍历每一个对象的属性
      for(var obj in item){
        // key值作为Y轴
        console.log(obj)
        yData.push(obj)
        // value作为X轴
        console.log(item[obj])
        // 特殊在借 配置颜色
        if(obj === '在借'){
          var object = {}
          var itemStyle = {}
          object.value = item[obj]
          itemStyle.color = 'black'
          object.itemStyle = itemStyle
          xData.push(object);
        }else{
          xData.push(item[obj]);
        }
      }
    });

    console.log(xData)
    console.log(yData)

    chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
  
    var option = {
      yAxis: {
        type: 'category',
        // data: ['在借', '明德', '弘毅', '三饭', '二饭', '一饭', '新饭', '五饭', '六饭']
        data:yData
      },
      xAxis: {
        type: 'value'
      },
      series: [{
        // data: [120, {
        //   value: 200,
        //   itemStyle: {
        //     color: 'green'
        //   }
        // }, 150, 80, 70, 110, 130, 66, 77],
        data:xData,
        type: 'bar'
      }]
    };
  
    chart.setOption(option);
    return chart;
    
  })

  console.log('55445')
  

  // getBikeData();


  
}



Page({
  data: {
    ec: {
      onInit: initChart
      // onInit:null
    }
  },





  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
    console.log('111')

    // util.request('/api/bikes','','GET',function(data){
    //   console.log(data);

    // })

  },


});
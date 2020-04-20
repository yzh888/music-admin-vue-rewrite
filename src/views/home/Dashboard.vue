<template>
  <div style="width: 100%">
    <div class="show-echart">
      <div ref="echart" class="plays-sort"></div>
      <div ref="echart1" class="songs"></div>
    </div>
    <div class="counts">
        <md-content class="md-primary">新增用户量</md-content>
        <md-content class="md-accent">昨日访问量</md-content>
        <md-content class="md-primary">新增歌曲量</md-content>
        <md-content class="md-accent">G.E.M.邓紫棋</md-content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {
    this.drawChart()
    this.drawChart1()
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(this.$refs.echart)

      // 指定图表的配置项和数据
      var option = {
        backgroundColor: '#ffffff',
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product', '2016', '2017'],
          source: [
            { product: 'Matcha Latte', '2016': 85.8, '2017': 93.7 },
            { product: 'Milk Tea', '2016': 73.4, '2017': 55.1 },
            { product: 'Cheese Cocoa', '2016': 65.2, '2017': 82.5 },
            { product: 'Walnut Brownie', '2016': 53.9, '2017': 39.1 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#4ad2ff'
              }
            }
          },
          { type: 'bar' }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },

    drawChart1() {
      let myChart = this.$echarts.init(this.$refs.echart1)

      // 指定图表的配置项和数据
      var option = {
        backgroundColor: '#ffffff',
        title: {
          text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 274, name: '联盟广告' },
              { value: 235, name: '视频广告' },
              { value: 400, name: '搜索引擎' }
            ].sort(function(a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
              return Math.random() * 200
            }
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  computed: {}
}
</script>
<style scoped lang="scss">
.plays-sort {
  width: 60%;
  height: 400px;
  box-shadow: 1px 3px 1px 4px white;
  margin-right: 20px;
}

.show-echart {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 20px;
}

.songs {
  width: 38%;
  height: 400px;
  box-shadow: 1px 3px 1px 4px white;
}

.counts {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
}

.md-content {
    flex: 0 0 24%;
    height: 100px;
    display: inline-flex;
    font-size: 36px;
    justify-content: center;
    align-items: center;
  }
</style>

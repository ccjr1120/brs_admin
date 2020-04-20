<template>
  <div class="fillcontainer">
    <div id="curve-chart" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>

<script>
export default {
  props: ["curveChartData"],
  mounted() {
    if (this.curveChartData == null) {
      this.$message({
        showClose: true,
        center: true,
        duration: 10000,
        message: "勾勒趋势图所需要的数据没有被准备",
        type: "error"
      });
    }
    this.drawLine();
  },
  data() {
    return {
      dateList: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      ]
    };
  },
  methods: {
    drawLine() {
      var echart = this.$echarts.init(document.getElementById("curve-chart"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "新增趋势图·历史七天"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["新增用户", "新增书籍", "新增推荐"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.dateList
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "新增用户",
            type: "line",
            data: this.curveChartData.newUser
          },
          {
            name: "新增书籍",
            type: "line",
            data: this.curveChartData.newBook
          },
          {
            name: "新增推荐",
            type: "line",
            data: this.curveChartData.newRecommend
          }
        ]
      };
      echart.setOption(option);
    }
  }
};
</script>

<style>
</style>
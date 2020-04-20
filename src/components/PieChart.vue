<template>
  <div class="fillcontainer">
    <div :id="pieChartData.id" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>

<script>
export default {
  props: ["pieChartData"],
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var echart = this.$echarts.init(
        document.getElementById(this.pieChartData.id)
      );
      var option = {
        title: {
          text: this.pieChartData.title,
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}位 ({d}%)"
        },
        series: [
          {
            name: "分布图",
            type: "pie",
            radius: "55%",
            data: this.pieChartData.data
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
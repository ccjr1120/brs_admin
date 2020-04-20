<template>
  <div>
    <div id="app-trend">
      <CurveChart v-bind:curveChartData="curveChartData"></CurveChart>
    </div>
    <div style="padding-top:30px;">
      <div id="user-distribute">
        <PieChart v-bind:pieChartData="userPieChartData"></PieChart>
      </div>
      <div id="book-distribute">
        <PieChart v-bind:pieChartData="bookPieChartData"></PieChart>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/icon/iconfont.js";
import CurveChart from "@/components/CurveChart.vue";
import PieChart from "@/components/PieChart.vue";
export default {
  data() {
    return {
      dataIconList: ["#icon-user", "#icon-book", "#icon-recommend"],
      appDailyData: [
        {
          name: "新增用户",
          number: 101110
        },
        {
          name: "新增书籍",
          number: "1123"
        },
        {
          name: "新增推荐",
          number: "1131"
        }
      ],
      curveChartData: null,
      userPieChartData: {
        id: "user-distribution",
        title: "关于推荐次数的用户分布",
        data: [
          { value: 112, name: "0" },
          { value: 136, name: "1~10" },
          { value: 203, name: "5~10" },
          { value: 272, name: "10~30" },
          { value: 132, name: "40以上" }
        ]
      },
      bookPieChartData: {
        id: "book-distribution",
        title: "关于推荐次数的书籍分布",
        data: [
          { value: 112, name: "0" },
          { value: 336, name: "1~10" },
          { value: 203, name: "5~10" },
          { value: 27, name: "10~30" },
          { value: 13, name: "40以上" }
        ]
      }
    };
  },
  components: { CurveChart, PieChart },
  created() {
    this.prepareDataForCurveChart();
  },
  methods: {
    prepareDataForCurveChart() {
      this.curveChartData = {
        newUser: [243, 123, 221, 564, 123, 435, 123],
        newBook: [342, 123, 567, 186, 213, 745, 98],
        newRecommend: [213, 546, 78, 12, 233, 123, 145]
      };
    }
  }
};
</script>

<style>
#app-trend {
  height: 440px;
}
#user-distribute {
  height: 440px;
  float: left;
  width: 40%;
}
#book-distribute {
  height: 440px;
  float: right;
  width: 40%;
}
</style>
<template>
  <el-container class="fillcontainer">
    <el-header>
      <div class="nav-btn">
        <el-button @click="changeNav" icon="el-icon-s-fold"></el-button>
      </div>
      <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<script>
export default {
  name: "AppHeader",
  methods:{
    changeNav(){
      this.$emit("change")
    }
  }
};
</script>

<style scope>
.el-header {
  padding: 0px !important;
  line-height: 60px;
}
.el-breadcrumb {
  font-size: 18px;
  padding: 22px 0 0 80px;
}
.el-main {
  background-color: #e9eef3;
}
.nav-btn {
  padding: 0px;
  float: left;
}
</style>
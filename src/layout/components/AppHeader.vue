<template>
  <el-container class="fillcontainer">
    <el-header>
      <div class="nav-btn">
        <el-button @click="changeNav" icon="el-icon-s-fold"></el-button>
      </div>
      <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="item in routerList"
            :key="item.path"
            :to="item.meta.path"
          >{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      routerList: null
    };
  },
  watch: {
    $route() {
      this.getRouteRecord();
    }
  },
  methods: {
    changeNav() {
      this.$emit("change");
    },
    getRouteRecord() {
      var recordList = this.$route.matched.filter(item => item.name);
      alert(recordList[0].name)
      alert(recordList[1].name)
      alert(recordList[0].redirect)
      this.routerList = recordList;
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
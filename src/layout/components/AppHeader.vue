<template>
  <el-container class="fillcontainer">
    <el-header>
      <div class="nav-btn">
        <el-button @click="changeNav" icon="el-icon-s-fold"></el-button>
      </div>
      <div style="float:left">
        <el-breadcrumb v-if="routerList != null" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="item in routerList"
            :key="item.path"
            :to="item.redirect"
          >{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb v-else separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="avatar">
        <el-dropdown trigger="click" placement="top-start">
          <el-link :underline="false">
            <el-avatar shape="circle" size="large" :src="squareUrl"></el-avatar>
          </el-link>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>msg box</el-dropdown-item>
            <el-dropdown-item>log out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
      routerList: null,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
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
body ul{top:45px !important;}
.el-breadcrumb {
  font-size: 18px;
  padding: 22px 0 0 26px;
}
.el-main {
  background-color: #e9eef3;
}

.avatar {
  float: right;
  padding: 10px 18px 0px 0px;
}
.nav-btn {
  padding: 0;
  float: left;
}
</style>
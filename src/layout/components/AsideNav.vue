<template>
  <el-container class="fillcontainer">
    <el-aside>
      <el-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="navDisplay"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-house"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <!-- <i class="el-icon-coordinate"></i> -->
            <i class="el-icon-user" />
            <span>用户</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user">用户列表</el-menu-item>
            <el-menu-item index="/user/recommend">推荐列表</el-menu-item>
            <el-menu-item index="/user/recommend/review">待审核推荐</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <!-- <i class="el-icon-coordinate"></i> -->
            <i class="el-icon-reading" />
            <span>书籍</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/book">书籍列表</el-menu-item>
            <el-menu-item index="/book/review">待审核书籍</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <AppHeader v-on:change="changeNav"></AppHeader>
  </el-container>
</template>

<script>
import AppHeader from "./AppHeader";
export default {
  name: "AsideNav",
  components: {
    AppHeader
  },
  data() {
    return {
      navDisplay: false
    };
  },
  methods: {
    changeNav() {
      this.navDisplay = !this.navDisplay;
    }
  }
};
</script>

<style scope>
.el-menu {
  width: 230px;
  height: 100%;
}
.el-aside {
  height: 100%;
  width: auto !important;
}
.el-aside ul {
  top: 0px !important;
}
</style>
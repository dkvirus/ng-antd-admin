import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import config from '../config/config';
import menuTree from '../config/menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menuLogo: string = config.menuLogo;
  menuTitle: string = config.menuTitle;
  footTitle: string = config.footTitle;
  isCollapsed = false;        // 控制左边菜单导航条抽屉效果的图标
  breadcrumb: any;            // 面包屑数组
  menuTree: any = menuTree;   // 菜单树状数据结构
  menuArr: any;               // 菜单列表数据结构
  selectedOption;             // 菜单搜索框中选中值
  searchOptions;              // 菜单搜索框下拉框选项
  constructor(private router: Router) {
    // 树状菜单数据生成列表菜单数据，用于制作面包屑
    this.menuArr = this.geneMenuList(this.menuTree, []);
    // 初始化时面包屑根据路由地址自动变换
    const initRouter = router.url.replace('/layout/', '');
    this.breadcrumb = this.geneBreadcrumb(initRouter, []);
    // 初始化菜单搜索框下拉列表
    this.geneMenuSearch();
  }

  ngOnInit () {
  }
  // 过滤菜单搜索框列表数据
  geneMenuSearch () {
    this.searchOptions = this.menuArr.filter(
      item => item.router
    );
  }
  // 处理菜单搜索框跳转路由
  handleSearchChange (value) {
    this.router.navigate([`/layout/${value}`]);
  }
  // 修改密码功能
  handleUpdatePw () {
    alert('修改密码功能待开发');
  }
  // 注销功能
  handleSignOut () {
    alert('注销功能待开发');
  }
  // 将列表数据生成树状数据
  geneMenuList (list, arr = []) {
    list.map(item => {
      if (item.children && item.children.length > 0) {
        this.geneMenuList(item.children, arr);
      }
      arr.push(item);
    });
    return arr;
  }
  // 菜单项点击功能，修改面包屑
  handleClickMenuItem ($event) {
    const menuRouter = $event.target.getAttribute('ng-reflect-router-link');
    const breadcrumb = this.geneBreadcrumb(menuRouter, []);
    this.breadcrumb = breadcrumb;
  }
  // 递归获取面包屑名称
  geneBreadcrumb (menuRouter, breadArr) {
    if (menuRouter === '/layout') {
      return;
    }
    // step1: 根据路由找到菜单对象，目的是获取 parentId
    const currentMenu = this.menuArr.filter(item => item.id === menuRouter)[0];
    // step2: 根据 parentId 去找对象，知道没有 paretnId 对象，否则递归
    if (currentMenu && currentMenu.parentId) {
      this.geneBreadcrumb(currentMenu.parentId, breadArr);
    }
    breadArr.push(currentMenu.name);
    return breadArr;
  }
}

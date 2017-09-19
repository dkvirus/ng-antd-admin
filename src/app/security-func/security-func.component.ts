import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-func',
  templateUrl: './security-func.component.html',
  styleUrls: ['./security-func.component.css']
})
export class SecurityFuncComponent implements OnInit {

  // 数据源
  data = [
    {
      key     : 1,
      id: 1,
      name    : '安全管理',
      type: 'menu',
      parentName: '-',
      children: [ {
        key    : 11,
        id: 11,
        name   : '机构管理',
        type: 'menu',
        parentId    : 1,
        parentName: '安全管理',
      }, {
        key     : 12,
        id: 12,
        name    : '用户管理',
        type: 'menu',
        parentId     : 1,
        parentName: '安全管理',
        children: [ {
          key    : 121,
          id: 121,
          name   : '新增',
          type: 'button',
          parentId    : 12,
          parentName: '用户管理',
        },
          {
            key    : 122,
            id: 122,
            name   : '编辑',
            type: 'button',
            parentId    : 12,
            parentName: '用户管理',
          }],
      }],
    }
  ];
  expandDataCache = {};

  collapse(array, data, $event) {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key);
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root) {
    const stack = [], array = [], hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[ i ], level: node.level + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node, hashMap, array) {
    if (!hashMap[ node.key ]) {
      hashMap[ node.key ] = true;
      array.push(node);
    }
  }

  constructor() { }

  ngOnInit() {
    this.data.forEach(item => {
      this.expandDataCache[ item.key ] = this.convertTreeToList(item);
    });
  }

  handleEdit () {
    alert('编辑功能待开发');
  }
  handleDelete () {
    alert('删除功能待开发');
  }
  handleSearch () {
    alert('模糊查询功能待开发');
  }
  handleReset () {
    alert('重置功能待开发');
  }
  handleCreate () {
    alert('新增功能待开发');
  }
}

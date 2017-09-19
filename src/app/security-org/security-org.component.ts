import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


/**
 * 机构名称可能会重复，应该给个机构号作为查询条件
 */

@Component({
  selector: 'app-security-org',
  templateUrl: './security-org.component.html',
  styleUrls: ['./security-org.component.css']
})
export class SecurityOrgComponent implements OnInit {
  orgName: string;  // 模糊查询搜索字段
  isVisible = false;  // 决定模态框是否显示
  // 数据源
  data = [
    {
      key     : 1,
      id: 1,
      name    : '总行',
      parentId     : '-',
      parentName: '-',
      desc : '中国银行',
      children: [ {
        key    : 11,
        id: 11,
        name   : '北京银行',
        parentId    : 1,
        parentName: '总行',
        desc: '北京人自己的银行',
      }, {
        key     : 12,
        id: 12,
        name    : '上海银行',
        parentId     : 1,
        parentName: '总行',
        desc : '上海人自己的银行',
        children: [ {
          key    : 121,
          id: 121,
          name   : '浦发银行',
          parentId    : 12,
          parentName: '上海银行',
          desc: '上海浦东新区地区银行',
        },
        {
          key    : 122,
          id: 122,
          name   : '陆家嘴银行',
          parentId    : 12,
          parentName: '上海银行',
          desc: '上海陆家嘴地区银行',
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

  constructor() {
  }

  ngOnInit() {
    this.data.forEach(item => {
      this.expandDataCache[ item.key ] = this.convertTreeToList(item);
    });
  }

  // 编辑功能
  handleEdit (id) {
    alert(`id 为 ${id} 的机构编辑功能待开发`);
  }
  // 删除功能
  handleDelete (id) {
    alert(`id 为 ${id} 的机构删除功能待开发`);
  }
  // 模糊查询功能
  handleSearch () {
    alert(`根据 ${this.orgName} 机构名称模糊查询，功能待开发`);
  }
  // 新增功能
  handleSave () {
    alert('新增功能待开发');
  }
  // 显示模态框
  showModal (item) {
    if (typeof item === 'undefined') {
      alert('save');
    } else {
      alert('edit');
    }
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }
}

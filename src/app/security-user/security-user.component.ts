import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-user',
  templateUrl: './security-user.component.html',
  styleUrls: ['./security-user.component.css']
})
export class SecurityUserComponent implements OnInit {

  data = [
    {
      key    : '1',
      id: 'super',
      name   : '超级管理员',
      orgName: '总行',
      phone    : '13065781247',
      email: 'super@xx.com',
    }, {
      key    : '2',
      id: 'admin',
      name   : '管理员',
      orgName: '上海银行',
      phone    : '18065781247',
      email: 'admin@xx.com',
    }, {
      key    : '3',
      id: 'guest',
      name   : '游客',
      orgName: '-',
      phone    : '18365781247',
      email: 'guest@xx.com',
    }
  ];

  constructor() {
  }

  ngOnInit() {
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
  handleRoleSetting () {
    alert('角色配置功能待开发');
  }
}

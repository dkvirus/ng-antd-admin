import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-role',
  templateUrl: './security-role.component.html',
  styleUrls: ['./security-role.component.css']
})
export class SecurityRoleComponent implements OnInit {

  data = [
    {
      key    : '1',
      id: '1',
      name   : 'bob',
     desc: 'bob',
    }, {
      key    : '2',
      id: '2',
      name   : 'dkvirus',
      desc: 'dkvirus',
    }, {
      key    : '3',
      id: '3',
      name   : 'tiger',
      desc: 'tiger',
    }
  ];

  constructor() { }

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
  handleFuncSetting () {
    alert('菜单配置功能待开发');
  }
}

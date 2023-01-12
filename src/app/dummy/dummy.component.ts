import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  public user1 = Array<object>();

  addUser() {
    this.user1.push(<object>{
      userId: 'userId1',
      reason: 'reason1',
    });
    this.user1.push(<object>{
      userId: 'userId2',
      reason: 'reason2',
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

  modelChanged(event, index) {
    this.user1[index]['reason'] = 'jokim' + this.user1[index]['userId'];
  }

}

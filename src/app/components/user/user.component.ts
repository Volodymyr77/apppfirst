import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {


  @Input()
  character :any;
  constructor() {

  }

  ngOnInit() {
      }
}

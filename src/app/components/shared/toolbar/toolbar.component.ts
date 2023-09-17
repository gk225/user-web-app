import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {
  userName:string = '';
  userNameFirstLetter:string = '';
  isExpanded: boolean = false;
  flag:boolean=false;
  @Output() profileButtonClick = new EventEmitter<boolean>();

  constructor(private dataService: DataTransferService, private router:Router) { }

  ngOnInit(): void {
    this.userName = this.dataService.getUser();
    this.userNameFirstLetter = this.userName ? this.userName.charAt(0).toUpperCase() : '';
    this.flag = this.dataService.getFlag();

  }

  profileButtonClicked(view:string) {
    if(view === 'dashboard'){
      this.profileButtonClick.emit(false);
    }else if(view === 'profile'){
      this.profileButtonClick.emit(true);
    }   
    
  }

}

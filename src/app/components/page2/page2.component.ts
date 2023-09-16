import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LoginData } from '../page1/page1.component';

export class SavedData {
  name: string = '';
  email: string = '';
  gender: string = '';
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {

  dataSource: MatTableDataSource<LoginData> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'emailId', 'gender', 'action'];
  enableEdit: boolean = false;
  disableBtn: boolean = true;
  profileButtonClicked: boolean = false;

  constructor(private dataService: DataTransferService) {
    this.dataService.getData().subscribe({
      next: data => {
        if (data) {
          console.log("data", this.dataSource.data, data);

          this.dataSource.data = [data];
        }

      }
    })
  }

  ngOnInit(): void {
  }

  edit() {
    this.enableEdit = true;
    this.disableBtn = false;
  }

  cancel() {
    this.enableEdit = false;
    this.disableBtn = true;
  }

  save(data: SavedData) {
    this.enableEdit = false;
    this.disableBtn = true;
    this.dataService.setData(data);
  }

  profileButtonClickedHandler(clicked: boolean) {
    if (clicked === true) {
      this.displayedColumns.splice(3)
      this.profileButtonClicked = clicked;

    } else if (clicked === false) {
      let flag = this.displayedColumns.includes('action');
      if (!flag) {
        this.displayedColumns.push('action')
      }
      this.profileButtonClicked = clicked;
    }
  }

}

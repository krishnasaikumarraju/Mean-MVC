import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { UserService } from '../user.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material';




@Component({
  selector: 'app-userlist',
  styleUrls: ['./userlist.component.css'],
  templateUrl: './userlist.component.html',
})
export class TableFilteringExample implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'fname', 'lname', 'mobile', 'gender', 'birthday', 'delete'];
  getlistdata: any = [];
  dataSource: any = [];
  deleteuser;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private UserService: UserService, private router: Router, public dialog: MatDialog) {

  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getlist();

  }
  ngAfterViewInit() {
    //  setTimeout(() => {
    //   this.dataSource.sort = this.sort;
    //  }, 1000);
  }

  getlist(): void {
      this.UserService.collectData().subscribe((getlistdata: Response) => {
      this.getlistdata = getlistdata.json();
      this.getlistdata = this.getlistdata;
      //console.log(this.getlistdata)
      this.dataSource = new MatTableDataSource(this.getlistdata);
      this.dataSource.sort = this.sort;
    });

  }

  deleteData(dd) {
    console.log(dd);
    const dialogRef = this.dialog.open(DeleteDialog);
    dialogRef.afterClosed().subscribe(res => {
      res;
      if (res == true) {
        
        this.UserService.deleteData(dd).subscribe(res => {
       console.log(res);
             
         
        });
        this.getlist();
      }

    })

    // setTimeout(() => {
    //   this.getlist();
    // }, 1000);

  
}

  editData(ed) {
    this.router.navigate(['/form/' + ed])
  }

}
@Component({
  selector: 'app-userlist2',
  templateUrl: 'dialog.component.html',
})
export class DeleteDialog { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
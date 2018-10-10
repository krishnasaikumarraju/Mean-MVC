import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  dataSource = [];
  regForm: any;
  screen: boolean = true;
  editeddata: any = {};
  constructor(private userService: UserService, private route: ActivatedRoute, private router: RouterModule, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.editData(params['id'], (data) => {
      this.editeddata = data;
      console.log(this.editeddata._id);
      });
    });
  }

  push(data) {
    //console.log(this.editeddata._id)
    if (this.editeddata._id) {
      this.update(data);
      return;
    }
    this.regForm = data.value
    this.userService.getPush(this.regForm).subscribe(res => res.json())
  }

  update(data) {
    //console.log(data);
     if(confirm("Data will be Updated permanently")){
       {
        this.userService.update(data).subscribe(res => {
         // console.log(res);
        });
      }
    }

  }

}



// @Component({
//   selector: 'app-create-form2',
//   templateUrl: 'dialogupdate.component.html',
// })
// export class UpdateDialog { }

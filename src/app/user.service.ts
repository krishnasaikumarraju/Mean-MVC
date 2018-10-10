import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  regForm: any;
  editeddata;
  tediteddata;
  constructor(private http: Http) { }

getPush(data) {
  //this.regForm=data.value;
  return this.http.post("http://localhost:3000/api/form", data);
}
collectData() {
  //console.log(this.http.get('http://localhost:3000/api/list'));
  // console.log(this.http.get('/api/list'));
  return this.http.get('/api/list');
}
deleteData(dd) {
  // console.log(dd)
  return this.http.get('/api/delete/' + dd);
}
editData(ed, cb) {
  //console.log(data);
  this.editeddata = this.http.get('/api/edit/' + ed);
  this.editeddata.subscribe((res: Response) => {
    this.editeddata = res.json();
    this.editeddata = this.editeddata;
    //console.log(this.editeddata);
    //return this.editeddata;
    cb(this.editeddata);
  });
}
update(ud){
  //console.log(this.editeddata._id,this.editeddata, ud.value);
  return this.http.put('/api/update/'+this.editeddata._id, ud.value);
}
}

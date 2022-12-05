import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurentModel';
import {NotificationsService} from 'angular2-notifications';
import { NotifierService } from 'angular-notifier';
import { NotifierModule } from 'angular-notifier';
import { findIndex } from 'rxjs';


declare var window: any

@Component({
  selector: 'app-restaurentdash',
  templateUrl: './restaurentdash.component.html',
  styleUrls: ['./restaurentdash.component.css']
})
export class RestaurentdashComponent implements OnInit{

  formValue!:FormGroup
  formModal : any 
  showAdd! : boolean
  showBtn! : boolean
  errBlock! : boolean
  errorText!: string
  index!: number
  restaurentModelObj: RestaurentData = new RestaurentData;
  allRestaurentData: any;
  private readonly notifier: NotifierService;
  

  constructor(private formBuilder:FormBuilder, private api: ApiService, notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      service:[''],
    })
    this.getAllData(this.index);
  }
  
  clickAddResto() {
    this.formValue.reset();
    this.showAdd=true
    this.showBtn=false
  }

  openModal() {
    this.formModal?.show();
  }

  addResto() { 
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.service = this.formValue.value.service;

    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      // alert("Restaurent Record Added");
      this.formValue.reset();
      this.getAllData(this.index);
    },
    )
  }

  onSuccess() {
    this.notifier.show({
      type: 'success',
      message: 'You are awesome! I mean it!',
      id: 'THAT_NOTIFICATION_ID', // Again, this is optional
    });
  }

  getAllData(index: number) {
    this.api.getRestaurent().subscribe(res=> {
      this.allRestaurentData = res;
    },
    error => {
      this.errBlock = true;
      this.errorText = error.message;
    })
  }

  deleteResto(data: any) {
    this.api.deleteRestaurent(data.id).subscribe(res=> {
      alert("Data is deleted");
      this.getAllData(this.index);
    })
  }

  onEditResto(data:any) {
    this.showAdd=false
    this.showBtn=true
    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['service'].setValue(data.service);
  }

  updateResto() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.service = this.formValue.value.service;

    this.api.updateRestaurent(this.restaurentModelObj, this.restaurentModelObj.id).subscribe(res=>{
      alert("Updated successfully");
      this.formValue.reset();
      this.getAllData(this.index);
    })
  }
}

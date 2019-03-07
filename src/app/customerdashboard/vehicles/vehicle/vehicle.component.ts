import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  
  constructor(private service: VehicleService,
  private firestore:AngularFirestore,
  private toastr : ToastrService  ){

  }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form ? :NgForm){
  if(form != null)
    form.resetForm();
  
   
   this.service.FormData={
    id:null,
    vehicle_type:'',
    model:'',
    Odometer_reading:'',
    last_service_date:'',   
    Reg_no:'',
   }

   

  }

  onSubmit(form: NgForm){
    let data = form.value;
    console.log(data);
    this.firestore.collection('vehicles').add(data);
    this.toastr.success('vehicle registered successfully','vehicle.register');
    this.resetForm(form);
    this.toastr.success('vehicle registered successfully','vehicle.register');
  }



}

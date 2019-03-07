import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private service: VehicleService) { }

  ngOnInit() {
  }

}

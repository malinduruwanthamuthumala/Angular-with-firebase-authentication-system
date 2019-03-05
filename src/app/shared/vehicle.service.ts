import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  FormData :Vehicle;
  constructor() { }
}

import { Component, OnInit } from '@angular/core';

import { DataService } from '../../app.service';

import { Shipment } from '../../models/Shipment';


@Component({
  selector: 'shipment',
  templateUrl: './app/components/shipment/shipment.component.html',
})
export class ShipmentComponent implements OnInit {
    shipmentId: string;
    shipment: Shipment;

    constructor(private dataService: DataService) {
        this.shipment = new Shipment();
    }

  ngOnInit() {
    
    } 


  getShipment()
  {
      this.dataService.getShipment(this.shipmentId).subscribe(data => this.shipment = data);      
  }
}
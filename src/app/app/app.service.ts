import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Shipment } from "./models/Shipment";

@Injectable()
export class DataService {
    private apiUrl = 'http://localhost:5000/api';
    

    constructor(private http: Http) {
    }

    getShipment(shipment: string)
    {
        return this.http.get(this.apiUrl + '/shipment/' + shipment).map((res: Response) => <Shipment> res.json()); 
    }
}
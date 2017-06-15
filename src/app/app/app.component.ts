import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
    selector: 'myapp',
    template:  `
    <div>
        <a routerLink="/home">Hlavní</a>
        <a routerLink="/shipment">Shipment</a>
            <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent { }

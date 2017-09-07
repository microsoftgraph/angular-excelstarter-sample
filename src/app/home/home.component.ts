/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { HomeService } from './home.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="ms-font-m">
    <table>
      <tr>
        <th align="left">Subject</th>
        <th align="left">Organizer Email</th>
      </tr>
      <tr *ngFor="let event of events">
        <td>{{event.subject}}</td>
        <td>{{event.organizer.emailAddress.address}}</td>
      </tr>
    </table>
    </div>
    <button class="ms-Button" (click)="onAddEventToExcel()">
    <span class="ms-Button-label">Write to Excel</span>
    </button>
    <button class="ms-Button" (click)="onLogout()">
    <span class="ms-Button-label">Logout</span>
    </button>    
    <div class="ms-font-m ms-fontColor-green" *ngIf="this.excelRequestSucceeded">    
        <p >Successfully updated demo.xslx</p>
    </div>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  events: MicrosoftGraph.Event[];
  subsGetUsers: Subscription;
  subsGetEvents: Subscription;
  subsAddContactToExcel: Subscription;
  subsAddEventToExcel: Subscription;
  excelRequestSucceeded: Boolean;

  constructor(
    private homeService: HomeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.subsGetEvents = this.homeService.getEvents().subscribe(events => this.events = events);
  }

  ngOnDestroy() {
    this.subsGetUsers.unsubscribe();
    this.subsAddContactToExcel.unsubscribe();
    this.subsAddEventToExcel.unsubscribe();
  }

  onAddEventToExcel() {
    this.subsAddEventToExcel = this.homeService.addEventToExcel(this.events).subscribe();
    if (this.events.length > 0 )
      {
        this.excelRequestSucceeded = true;
      }
  }

  onLogout() {
    this.authService.logout();
  }
}

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
    <table *ngIf="user">
      <tr>
        <th align="left">User Name</th>
        <th align="left">User Email</th>
      </tr>
      <tr>
        <td>{{user.displayName}}</td>
        <td>{{user.mail || user.userPrincipalName}}</td>
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
  user: MicrosoftGraph.User;
  subsGetMe: Subscription;
  subsAddInfoToExcel: Subscription;
  excelRequestSucceeded: Boolean;

  constructor(
    private homeService: HomeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.subsGetMe = this.homeService.getMe().subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subsGetMe.unsubscribe();
    this.subsAddInfoToExcel.unsubscribe();
  }

  onAddEventToExcel() {
    this.subsAddInfoToExcel = this.homeService.addInfoToExcel(this.user).subscribe();
    if (this.user.directReports != null )
      {
        this.excelRequestSucceeded = true;
      }
  }

  onLogout() {
    this.authService.logout();
  }
}

/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import * as MicrosoftGraphClient from "@microsoft/microsoft-graph-client"
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { extractData, handleError } from '../shared/http-helper';
import { HttpService } from '../shared/http.service';

@Injectable()
export class HomeService {
  url = 'https://graph.microsoft.com/v1.0';
  file = 'demo.xlsx';
  table = 'Table1';

  constructor(
    private http: Http,
    private httpService: HttpService) {
  }

  getClient(): MicrosoftGraphClient.Client
  {
    var client = MicrosoftGraphClient.Client.init({
      authProvider: (done) => {
          done(null, this.httpService.getAccessToken()); //first parameter takes an error if you can't get an access token
      }
    });
    return client;
  }

  getEvents(): Observable<MicrosoftGraph.Event[]> {
    
    var client = this.getClient();
    
    return Observable.fromPromise(client
    .api('me/events')
    .select("subject,organizer")
    .get()
    .then ((res => {
      return res.value;
    } ) )
    );

  }

  addEventToExcel(events: MicrosoftGraph.Event[]) {
    const calendarEvents = [];

    events.forEach(event => {
      calendarEvents.push([event.subject, event.organizer.emailAddress.address]);
    });   

    const calendarEventRequestBody = {
      index: null,
      values: calendarEvents
    };


    const body = JSON.stringify(calendarEventRequestBody);

    var client = this.getClient();
    var url = `${this.url}/me/drive/root:/${this.file}:/workbook/tables/${this.table}/rows/add`
    return Observable.fromPromise(client
    .api(url)
    .post(body) 
    );
  }

}

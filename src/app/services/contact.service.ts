import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

  private contactsUrl = 'app/contacts';  // URL to web api

  constructor(private http: Http) { }

  getContacts(): Promise<Array<any>> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  getContact(id: number): Promise<any> {
    return this.http.get(this.contactsUrl + '/' + id)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

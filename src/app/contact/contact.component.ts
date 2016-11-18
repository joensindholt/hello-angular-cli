import { Component, OnInit } from '@angular/core';
import { ContactService } from './../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Array<any>;

  constructor(private contactService: ContactService) { 
    console.log('ContactComponent constructor');
  }

  ngOnInit() {
    console.log('ContactComponent: ngOnInit');
    this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }
}

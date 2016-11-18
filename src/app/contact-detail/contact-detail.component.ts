import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { ContactService } from './../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: any;

  constructor(
    private route: ActivatedRoute, 
    private contactService: ContactService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.contactService.getContact(id).then(contact => this.contact = contact);
  }

}

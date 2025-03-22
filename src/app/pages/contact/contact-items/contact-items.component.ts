import { Component, Input } from '@angular/core';
import { Contact } from '../../../model/contact';
@Component({
  selector: 'app-contact-items',
  templateUrl: './contact-items.component.html',
  styleUrl: './contact-items.component.css'
})
export class ContactItemsComponent {
  @Input() contact: Contact = {
    id: '',
    name: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    pin: '',
    image: ''
  }
}

import { Component, Input } from '@angular/core';
import { Enquiry } from '../../../model/enquiry';

@Component({
  selector: 'app-enquiry-items',
  templateUrl: './enquiry-items.component.html',
  styleUrl: './enquiry-items.component.css'
})
export class EnquiryItemsComponent {
@Input() enquiry: Enquiry = {
  id: '',
  name: '',
  email: '',
  serviceType: '',
  message: ''
}
}

import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

declare var bootstrap: any; // 👈 to use Bootstrap modal in TS

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
    standalone: true,
  imports:[
        
    FormsModule 
  ]
})
export class ContactComponent {
from_name = '';
reply_to = '';
subject = '';
message = '';
sendEmail(e: Event, form: NgForm) {
  e.preventDefault();

  emailjs.sendForm(
    'service_hfk9phh',
    'template_mmwdoml',
    e.target as HTMLFormElement,
    'vRDtPas37k2vq3S9p'
  ).then(
    () => {
      console.log('SUCCESS!');

      // ✅ Custom logic: reset the HTML form
      (e.target as HTMLFormElement).reset();

      // ✅ Show Bootstrap modal
      const modal = new bootstrap.Modal(document.getElementById('successModal'));
      modal.show();
    },
    (error) => {
      console.log('FAILED...', error.text);
      alert('Message failed. Please try again.');
    }
  );
}

}

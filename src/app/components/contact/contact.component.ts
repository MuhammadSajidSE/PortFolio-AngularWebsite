import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(
      'service_hfk9phh',    
      'template_mmwdoml',   
      e.target as HTMLFormElement,
      'vRDtPas37k2vq3S9p'     
    ).then(
      (result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Message failed. Please try again.');
      }
    );
  }
}

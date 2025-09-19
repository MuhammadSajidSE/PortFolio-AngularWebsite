import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const options = {
      strings: [
        "Muhammad Sajid",
        "Full Stack Developer",
        "Dot Net Developer",
        "Angular Developer"
      ],
      typeSpeed: 100,    // typing speed
      backSpeed: 50,     // deleting speed
      backDelay: 1500,   // pause before deleting
      loop: true         // repeat forever
    };

    new Typed(".typed-text", options);
  }
}

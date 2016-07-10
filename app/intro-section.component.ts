import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro-section',
  templateUrl: 'app/intro-section.component.html',
  styles: [`
      :host {
        display: block;
      }
      .personal-link {
        margin: 15px 0;
        display: block;
      }

      .personal-link .link-text {
        line-height: 65px;
        font-size: 30px;
      }
    `]
})
export class IntroSectionComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}

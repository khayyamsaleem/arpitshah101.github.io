import { Component } from '@angular/core';
import { IntroSectionComponent } from './intro-section.component';
@Component({
  selector: 'personal-website',
  templateUrl: 'app/frontpage.component.html',
  directives: [IntroSectionComponent]
})
export class FrontPageComponent {

}

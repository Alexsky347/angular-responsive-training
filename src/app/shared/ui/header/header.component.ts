import { Component } from '@angular/core';
import { faBars, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faBars = faBars;
  faUserTie = faUserTie;
  title = 'My App';

  constructor() { }
}

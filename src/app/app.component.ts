import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetamaskComponent } from './metamask/metamask.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MetamaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'metamask-demo';
}

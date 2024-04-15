import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { NewrecComponent } from './newrec/newrec.component';
// import { FindrecComponent } from './findrec/findrec.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'http';
}

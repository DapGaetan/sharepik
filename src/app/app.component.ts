import { Component, OnInit } from '@angular/core';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[RouterOutlet, MenuNavigationComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {


}

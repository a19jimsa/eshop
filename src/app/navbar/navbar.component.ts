import { Component } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  cart = faShoppingBasket;
}

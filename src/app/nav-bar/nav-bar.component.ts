import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [PropertyCardComponent]
})
export class NavBarComponent {
}


import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [PropertyCardComponent,RouterLink,FooterComponent]
})
export class NavBarComponent {
}


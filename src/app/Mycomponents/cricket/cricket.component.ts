import { CommonModule } from '@angular/common'; // Required for NgIf
import { Component } from '@angular/core';

@Component({
  selector: 'app-cricket',
  standalone: true,
  imports: [CommonModule], // Make sure CommonModule is imported
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {
  // Property to control the visibility of the links
  showLinks: boolean = false;

  // Toggle the visibility of the links
  toggleLinks(): void {
    this.showLinks = !this.showLinks;
  }
}

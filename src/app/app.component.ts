import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CricketComponent } from './Mycomponents/cricket/cricket.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { InternationalNewsComponent } from './Mycomponents/international-news/international-news.component';
import { LocalNewsComponent } from './Mycomponents/local-news/local-news.component';
import { WeatherComponent } from './Mycomponents/weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,LocalNewsComponent,WeatherComponent,InternationalNewsComponent,CricketComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'project';
}

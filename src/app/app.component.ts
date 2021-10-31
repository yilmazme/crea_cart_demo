import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crea-demo';

  faArrowLeft = faArrowLeft;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route:string){
    return this.router.url != route;
  }
}

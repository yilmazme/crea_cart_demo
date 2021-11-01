import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crea-demo';

  faArrowLeft = faArrowLeft;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  hasRoute(route:string){
    return this.router.url != route;
  }

  logout(){
    this.authService.logout()
  }
}

import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isAuth0Loading$ = this.auth.isLoading$;

  constructor(private auth: AuthService) {
    console.log('startup')
    console.log(environment.auth0.authorizationParams.redirect_uri)
  }
}

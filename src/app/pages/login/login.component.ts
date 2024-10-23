import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ITnsOAuthTokenResult } from 'nativescript-oauth2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private routerExtensions: RouterExtensions
  ) { }

  public onTapLogin() {
    this.authService
      .tnsOauthLogin("identityServer")
      .then((result: ITnsOAuthTokenResult) => {
        console.log(
          "back to login component with token " + result.accessToken
        );
        this.routerExtensions
          .navigate(["../item"])
          .then(() => console.log("navigated to /item"))
          .catch((err) =>
            console.log(
              "error navigating to /item: " + err
            )
          );
      })
      .catch((e) => console.log("Error: " + e));

  }


}

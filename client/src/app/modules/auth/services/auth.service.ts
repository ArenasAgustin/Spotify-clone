import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const body = { email, password };

    return this.http.post(`${this.URL}/auth/login`, body).pipe(
      tap((responseOK: any) => {
        const { tokenSession } = responseOK;

        this.cookie.set('token', tokenSession, 4, '/');
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.authUrl = "http://localhost:8080/oauth/token";
  }

  public login(paramUsername: string, paramPassword: string, paramUserType: string): Observable<boolean> {
    let httpHeaders = new HttpHeaders({
      "Content-Type":"application/x-www-form-urlencoded",
      "Accept":"application/json",
      "Authorization":"Basic " + btoa("8080" + ":" + "urs")
    });

    let data = "grant_type=password&username=" + paramUserType+paramUsername + "&password=" + paramPassword;

    return this.httpClient.post(this.authUrl, data, {headers: httpHeaders}).pipe(map(result => {
      if(result) {
        let obj = JSON.parse(JSON.stringify(result));

        localStorage.setItem("username", paramUsername);
        localStorage.setItem("access_token", obj.access_token);
        localStorage.setItem("isUserAuthenticated", "true");
        localStorage.setItem("userType", paramUserType);

        return true;
      } else {
        return false;
      }
    }));
  }

  public logout() {
    localStorage.clear();
  }
}

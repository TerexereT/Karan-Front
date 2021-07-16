import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {loginPost, Token} from '../../interfaces/auth2';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  private api_url = environment.api.host
  private source_url = 'auth/'

  constructor(private http: HttpClient) {
  }

  public getAccessToken(data: loginPost){
    return this.http.post<Token>(`${this.api_url}${this.source_url}login/`,data)
  }
}



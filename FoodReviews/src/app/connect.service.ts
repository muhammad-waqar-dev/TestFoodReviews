import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: Http) { }

  private url = 'http://localhost:3000';

  getConnected(){
    return this.http.get(this.url);
  }
}

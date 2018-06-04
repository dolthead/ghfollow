import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private _url: string, private http: Http) { }

  getAll() {
    return this.http.get(this._url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error) {
    console.log(error);
    return Observable.throw(error.statusText);
  }

}

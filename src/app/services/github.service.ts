import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class GithubService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/dolthead/followers', http);
  }

}

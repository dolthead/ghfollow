import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {

  public followers: any[];

  constructor(private github: GithubService) { }

  ngOnInit() {
    // this.http.get(this._url).subscribe(response => this.followers = response.json());
    this.github.getAll().subscribe(followers => this.followers = followers);
  }

}

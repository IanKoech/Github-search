import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../repository.service';
import {Repository} from '../repository';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repos:Repository[];
  constructor(public repoService:RepositoryService) { }

  getRepo(searchTerm: string) {
    this.repoService.getRepo(searchTerm).subscribe(data => {
      this.repos = data;
      console.log(this.repos);
    });
  }

  ngOnInit() {
    this.getRepo('IanKoech');
  }
}

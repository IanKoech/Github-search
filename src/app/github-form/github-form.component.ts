import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  searchUser:string;
  @Output() performSearch=new EventEmitter<any>();
  constructor() { }

  searchGithubUser(){
    this.performSearch.emit(this.searchUser);
  }
  ngOnInit(): void {
  }

}

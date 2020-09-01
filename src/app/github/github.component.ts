import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  title:string="Github search";
  userName:string="IanKoech";
  userName2:string;
  

  constructor(){}
  ngOnInit(): void {
  }

}

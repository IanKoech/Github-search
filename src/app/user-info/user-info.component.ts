import { Component, OnInit } from '@angular/core';
import {ProfileServiceService} from '../profile-service.service';
import {User} from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user:User[];
  particlesJS: any;

  constructor(private service: ProfileServiceService) {
  }

  getSearchedUser(searchTerm) {
    this.service.showUserInfo(searchTerm).then(
      (success) => {
        this.user = this.service.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {

    this.getSearchedUser('IanKoech');

    this.getSearchedUser('IanKoech');
    // tslint:disable-next-line:prefer-const
    let particlesJS;
    particlesJS.load('particles-js', 'particles.json', null);
  }

}
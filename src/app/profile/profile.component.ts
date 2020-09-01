import { Component, OnInit } from '@angular/core';
import {ProfileServiceService} from '../profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  userName:string;
  constructor(private profileServie:ProfileServiceService) { 
    this.profileServie.changeProfile(this.userName);
    console.log('Service works');
    this.profileServie.showProfileInfo();
    this.profileServie.getUserInfo().subscribe(profile=>{
      this.profile=profile;
    });  
  }


  ngOnInit(): void {
  }

}

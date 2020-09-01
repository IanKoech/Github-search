import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  userName:string;
  userName2:string;
  constructor(private http:HttpClient){
    console.log("Service is now ready");
    this.userName='IanKoech';
    this.userName2=""
  }
  
  showProfileInfo(){
    return this.http.get("https://api.github.com/users/"+this.userName+environment.apiKey);
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/"+this.userName2+environment.apiKey);
  }
  showMyRepos(){
    return this.http.get("https://api.github.com/users/"+this.userName+"/repos"+environment.apiKey);
  }
  showUserRepos(){
    return this.http.get("https://api.github.com/users/"+this.userName2+"/repos"+environment.apiKey);
  }
  changeProfile(newName:string){
    this.userName2=newName;
  }

  /**Add the personal access token
   * Add a  method that enables searching of github user
   * Shows number of repos and the names of the repos
   */
  
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  user:User[]=[];
  userName2:string;
  token:string="?access_token="+environment.apiKey;

  constructor(private http:HttpClient){
    console.log("Service is now ready");
    console.log(this.token);
  }
  
  showUserInfo(name:string){
    interface personInfo{
      followers:number;
      following:string;
      avatar_url:string;
      publicRepos:number;
      login;
      bio;
      name;
      company;
      location;
      dateCreated;
      public_repos
    }
    return new Promise((resolve,reject)=>{
      this.user=[];
      this.http.get<personInfo>("https://api.github.com/users/"+name+this.token).toPromise().then((result)=>{
        this.user.push(result);
        resolve();
      },(error)=>{
        reject();
      }
      );
    });
  }
}

  /**Add the personal access token
   * Add a  method that enables searching of github user
   * Shows number of repos and the names of the repos
   */



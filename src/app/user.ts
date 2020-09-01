export class User {
    constructor(public userName:string,public followers:number,public following:number){
        this.userName=userName;
        this.followers=followers;
        this.following=following
    }
}

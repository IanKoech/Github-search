export class Repository {
    constructor(public name:string, public url:string,public description:string,public dateCreated:Date){
        this.name=name;
        this.url=url;
        this.description=description;
        this.dateCreated=dateCreated
    }
}

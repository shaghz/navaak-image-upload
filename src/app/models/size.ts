export class Size { 
    ischecked:  boolean;
    width: number;
    height:number;
    name:string;
    
    
    constructor(name: string,width: number,height: number,ischechecked: boolean) {
        this.name= name;
        this.width= width;
        this.height= height;
        this.ischecked = ischechecked;
    }
} 
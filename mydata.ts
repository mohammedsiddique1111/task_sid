export let myfullname:string="C Mohammed Siddique";

export class Product{
    pId:number;
    pName:string;
    pPrice:number;

    constructor(id:number,name:string,price:number){
        this.pId = id;
        this.pName = name;
        this.pPrice = price;
    }
    productdetails(){
        return `id:${this.pId} name:${this.pName} price:${this.pPrice}`
    }
}

interface IPerson {
    personaldetails();
}

class Organization implements IPerson {
   pName:String;
   pContact:number;
   pAddress:string;

   constructor(name:string,contact:number,address:string){
    this.pName = name;
    this.pContact = contact;
    this.pAddress = address;
   }

   personaldetails() {
       return `name ${this.pName} contact ${this.pContact} address ${this,this.pAddress}`;
   }

}
let Organizationobj = new Organization("Siddique",9080419859,"Vaniyambadi");
console.log(Organizationobj.personaldetails());
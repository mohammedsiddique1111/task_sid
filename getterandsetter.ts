class user {
    private userid:string="admin@gmail.com";
    private password:string="king";

get _userid(){
    return this.userid
}
set _userid(val:any){
    this.userid = val;
}
get _password(){
    return this.password
}
set _password(val:any){
    this.password = val;
}
userdetails(){
    return `userId:${this.userid} password:${this.password}`
}
}
let userobj = new user();
console.log(userobj);
userobj._userid = "king@gmail.com"
console.log(userobj._userid);
let passwordobj = new user();
passwordobj._password = "siddique"
console.log(passwordobj);
var Organization = /** @class */ (function () {
    function Organization(name, contact, address) {
        this.pName = name;
        this.pContact = contact;
        this.pAddress = address;
    }
    Organization.prototype.personaldetails = function () {
        return "name ".concat(this.pName, " contact ").concat(this.pContact, " address ").concat((this, this.pAddress));
    };
    return Organization;
}());
var Organizationobj = new Organization("Siddique", 9080419859, "Vaniyambadi");
console.log(Organizationobj.personaldetails());

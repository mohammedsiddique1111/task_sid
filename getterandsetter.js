var user = /** @class */ (function () {
    function user() {
        this.userid = "admin@gmail.com";
        this.password = "king";
    }
    Object.defineProperty(user.prototype, "_userid", {
        get: function () {
            return this.userid;
        },
        set: function (val) {
            this.userid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "_password", {
        get: function () {
            return this.password;
        },
        set: function (val) {
            this.password = val;
        },
        enumerable: false,
        configurable: true
    });
    user.prototype.userdetails = function () {
        return "userId:".concat(this.userid, " password:").concat(this.password);
    };
    return user;
}());
var userobj = new user();
console.log(userobj);
userobj._userid = "king@gmail.com";
console.log(userobj._userid);
var passwordobj = new user();
passwordobj._password = "siddique";
console.log(passwordobj);

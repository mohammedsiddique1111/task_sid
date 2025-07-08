"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.myfullname = void 0;
exports.myfullname = "C Mohammed Siddique";
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.pId = id;
        this.pName = name;
        this.pPrice = price;
    }
    Product.prototype.productdetails = function () {
        return "id:".concat(this.pId, " name:").concat(this.pName, " price:").concat(this.pPrice);
    };
    return Product;
}());
exports.Product = Product;

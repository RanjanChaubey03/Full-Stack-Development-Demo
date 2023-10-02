var Customer = /** @class */ (function () {
    function Customer(theFirst, theSecond) {
        this._firstName = theFirst;
        this._lastname = theSecond;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Ranjan", "Chaturvedi");
myCustomer.firstName = "Ranjan";
myCustomer.lastname = "Chaubey";
console.log(myCustomer.firstName);
console.log(myCustomer.lastname);

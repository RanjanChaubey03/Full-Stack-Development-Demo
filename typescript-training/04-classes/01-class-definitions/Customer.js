var Customer = /** @class */ (function () {
    function Customer(theFirst, theSecond) {
        this.firstName = theFirst;
        this.lastname = theSecond;
    }
    return Customer;
}());
var myCustomer = new Customer("Ranjan", "Chaubey");
console.log(myCustomer.firstName);
console.log(myCustomer.lastname);

var reviews = [5, 5, 1, 3, 4.7];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log("reviews = " + reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Average of reviews : " + average);

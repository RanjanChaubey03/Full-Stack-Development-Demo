var sportsOne = ["Golf", "Badminton", "Cricket", "Hockey"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("++++++++Using simplified for loop+++++++++");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == 'Badminton') {
        console.log(tempSport + " << My favourite");
    }
    else {
        console.log(tempSport);
    }
}

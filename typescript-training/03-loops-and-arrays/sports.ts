let sportsOne : string[] = ["Golf","Badminton","Cricket","Hockey"];

for(let i=0;i<sportsOne.length;i++){
    console.log(sportsOne[i]);
}

console.log("++++++++Using simplified for loop+++++++++");

for(let tempSport of sportsOne){
    if(tempSport=='Badminton'){
        console.log(tempSport+" << My favourite");
    }
    else{
        console.log(tempSport);
    }
    
}
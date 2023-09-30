let reviews : number[] = [5,5,1,3,4.7];

let total : number = 0;
for(let i = 0;i<reviews.length;i++){
    console.log("reviews = "+reviews[i]);
    total+=reviews[i];
}

let average : number = total/reviews.length;

console.log("Average of reviews : "+average);
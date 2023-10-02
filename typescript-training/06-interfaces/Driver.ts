import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach  = new CricketCoach();
let myGolfCourse  = new GolfCoach();

let theCoaches : Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCourse);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}
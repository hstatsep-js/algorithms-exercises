function squirrelPlay(temp, isSummer){
     if(isSummer){
       // between 60 and 100
       if(temp >= 60 && temp <= 100){
         return true; // exits early
       }
     } else { // NOT summer
       // between 60 and 90
       if(temp >= 60 && temp <= 90){
         return true; // exits early
       }
       return false;
     }
    return false; // we know squirrels aren't playing       
}
// squirrelPlay(70, false); // true
// squirrelPlay(95, false); // false
// squirrelPlay(95, true); // true

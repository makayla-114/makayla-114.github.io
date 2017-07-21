 function game(){
var userName = prompt("Enter a name to begin game.");
            alert("Welcome, " + userName + " to 'The Amazing School Race'!");
            alert("The object of the game is to make your way to school without being caught by a guard.");
            alert("Good Luck!");
            
            alert(" On your way school you spot a guard walking directly ahead of you! ");
            var userResponse = prompt(" Do you turn left, or keep walking? ");
            
            
if (userResponse == "turn left") {
     alert(" Turning into an alley you notice a ladder lying down nearby! ");
     var userResponse2 = prompt(" Do you climb the ladder, or turn around? ");
     if (userResponse2 == "climb the ladder") {
         alert("Good thinking you are on top of a building & out of the guards sight!");
         var userResponse4 = prompt("Do you jump off the roof, or climb back down?");

         if (userResponse4 == "jump off the roof") {
             alert(" Nice job! Luckily, you land on to a stack of abandoned matresses.");
             alert(" After the jump you find yourself directly in front of your school!");
             alert(" Congratulations, you have sucesfully completed 'The Amazing School Race'!");
         } else {
             alert("Now that the coast is clear you make your way around the corner to see your school!");
             alert("Congratulations, you have successfully completed 'The Amazing School Race'!");
         }
     } else {
         alert("As you turn around you see a vicious dog running your way!");
         var userResponse5 = prompt(" Do you try to pet the dog, or hide?");
         if (userResponse5 == "hide") {
             alert("Good idea! The dog struggles to find you & leaves.");
             alert("Once the dog leaves, you make your way to your school!");
             alert("Congratulations, you have successfully completed 'The Amazing School Race'!");
         } else{
                
                alert("Bad choice! The dog leans in to bite you & as you scream for help the guard finds you! Better luck next time!");
                
            }
     } 
} else {
     alert(" Oh no! The guard starts to turn around!");
     var userResponse3 = prompt(" Do you run, or act normal? ");
     if(userResponse3 =="run"){
        alert(" You've run straight into traffic! ");
        var userResponse6 = prompt(" Do you hop onto a car, or try to dodge the cars?");
        if(userResponse6=="hop onto car"){
            alert("Bad choice! The guard finds you lying unconscious on the street. Better luck next time!");
            

        }else{
            
                alert("Bad choice! The guard finds you lying unconscious on the street. Better luck next time!");
            } 
        }  else{
                 alert("Bad choice! The guard sees you & manages to catch you ! Better luck next time!");
             }
            
}
 }
            
           
           
           
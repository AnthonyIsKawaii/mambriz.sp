//The "getElementbyId" tag creates an ID for every individual requirment. For example Attack Power is created so 
//that every weapon that is made is being shown its Attack Power. The other tags are very similar as well in that
//they are given so that every weapon has the same ID's. We call these the stats in a video game.
var AttackPower  = document.getElementById("AttackPower");
var Requirements  = document.getElementById("Requirements");
var Durability  = document.getElementById("Durability");
var Weight = document.getElementById("Weight");
var AttackType = document.getElementById("AttackType");

//These sets of "getElementbyID" create variables for each of the weapons. These create tags for each of the 
//weapons and which will then be used to display the variables.
var GreatSword = document.getElementById("GreatSword")
var Zweihander = document.getElementById("Zweihander")
var DragonSlayer = document.getElementById("DragonSlayer")
var YhormGreat = document.getElementById("YhormGreat")

//This gives the GreatSword and the image of the greatsword to display the Stats of the weapon itself.
//The addEventListner allows the variable to be function on the webpage and display its stats below it.
GreatSword.addEventListener("click",function(){
    AttackPower.innerHTML=159 
    Requirements.innerHTML=28
    Durability.innerHTML=100
    Weight.innerHTML=10
    AttackType.innerHTML="stomp"
})

//Similarly, this also gives the Zweihander and the image of the Zweihander to display the Stats of the weapon.
//itself. The addEventListner allows the variable to be function on the webpage and display its stats below it.
//InnerHTML displays the Attack Power, Requirements, etc on the webpage.
Zweihander.addEventListener("click",function(){
    AttackPower.innerHTML=145
    Requirements.innerHTML=19
    Durability.innerHTML=80
    Weight.innerHTML=10
    AttackType.innerHTML="stomp"
})

//The process of the dispalying the stats is repeated. 
//The addEventListner gives the Dragon Slayer and the image of the Dragon slayer to display the Stats of the
//weapon itself. The addEventListner allows the variable to be function on the webpage and display its stats 
//below it. InnerHTML displays the Attack Power, Requirements, etc on the webpage.
DragonSlayer.addEventListener("click",function(){
    AttackPower.innerHTML=203
    Requirements.innerHTML=40
    Durability.innerHTML=165
    Weight.innerHTML=35
    AttackType.innerHTML="FailingBolt"
})

//Finally, this also gives the Yhorm Great Machete and the image of the Yhorm Great Machete to display the Stats 
//of the weapon itself. The addEventListner allows the variable to be function on the webpage and display its 
//stats below it. InnerHTML displays the Attack Power, Requirements, etc on the webpage.
YhormGreat.addEventListener("click",function(){
    AttackPower.innerHTML=185
    Requirements.innerHTML=38
    Durability.innerHTML=140
    Weight.innerHTML=20
    AttackType.innerHTML="WarCry"
})
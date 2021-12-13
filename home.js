const data = JSON.parse(localStorage.getItem("data"));
if (!data) {
    location.href = "index.html";
}
else{
    var todayIntake=0;
    var quant=250;
    var reqWater = data.reqWater;
    var waterUnit = data.wUnit;

    document.querySelector("#show").innerHTML = reqWater+ " "+waterUnit;
    
    function updateRemaining(){
       
        document.querySelector("#remain").innerHTML= (reqWater-todayIntake) +" "+waterUnit;

    }
   updateRemaining()
   function water(){
       if(waterUnit=="Ml")
       {
        todayIntake=todayIntake+250;
       }
       
       else if(waterUnit=="L")
       {
          todayIntake=todayIntake+0.25;
       }
       else
       {
          todayIntake=todayIntake+8.4;
          

       }
       todayIntake=todayIntake.toFixed(2);
       updateRemaining()
   }

}
const calculate = () => {
  let wt = parseInt(document.querySelector("#weight").value, 10);
  let unit = document.querySelector("#unit").value;
  let ageGrp = parseInt(document.querySelector("#ageSelct").value, 10);
  let ages = [40, 35, 30];
  let waterV= document.querySelector("#valueWater").value
  let waterUnit = "ounces";

  if (unit === "1") {
    wt = wt * 2.205; // if in kgs -> convert to pounds
    console.log("chli hai");
  }

  let result = wt / 2.2; // divide weight in pounds by 2.2
  result = (result * ages[ageGrp]) / 28.3;
  result = result.toFixed(1); //final result in ounce

  // if showValue is 1 then ml. -> waterUnit = "ml"
  // else if is 2 then l. -> waterUnit = "l"
  // else show directly.
  if( waterV === "0")
    {
      result= result*29.57353;
      waterUnit="Ml";
      result = result.toFixed(1);
    }
    else if (waterV === "1")
    {
      result= result/35.195
      waterUnit="L";
      result = result.toFixed(1);
    }

  document.querySelector("#res").innerHTML = result + " " + waterUnit;
};

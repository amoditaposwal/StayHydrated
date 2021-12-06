const calculate = () => {
  let wt = parseInt(document.querySelector("#weight").value, 10);
  let unit = document.querySelector("#unit").value;
  let ageGrp = parseInt(document.querySelector("#ageSelct").value, 10);
  let ages = [40, 35, 30];
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

  document.querySelector("#res").innerHTML = result + " " + waterUnit;
};

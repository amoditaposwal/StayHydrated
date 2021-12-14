const calculate = (event) => {
    event.preventDefault();
    let wt = parseInt(document.querySelector("#weight").value, 10);
    let name = document.querySelector("#name").value;
    let unit = document.querySelector("#unit").value;
    let ageGrp = parseInt(document.querySelector("#ageSelct").value, 10);
    let ages = [40, 35, 30];
    let waterV = document.querySelector("#valueWater").value;
    let waterUnit = "ounces";

    if (unit === "1") {
        wt = wt * 2.205; // if in kgs -> convert to pounds
    }
    wt = wt.toFixed(1);
    let result = wt / 2.2; // divide weight in pounds by 2.2
    result = (result * ages[ageGrp]) / 28.3;
    result = result.toFixed(1); //final result in ounce

    if (waterV === "0") {
        result = result * 29.57353;
        waterUnit = "Ml";
        result = result.toFixed(1);
    } else if (waterV === "1") {
        result = result / 35.195;
        waterUnit = "L";
        result = result.toFixed(1);
    }
    const data = {
        name: name,
        weight: wt,
        unit: unit,
        wUnit: waterUnit,
        reqWater: result,
    };
    localStorage.setItem("data", JSON.stringify(data));
    document.querySelector("#btnn").innerHTML = result + " " + waterUnit+" "+ "required water.";
};

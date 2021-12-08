const data = JSON.parse(localStorage.getItem("data"));
if (!data) {
    location.href = "index.html";
}
else{
    const username = data.name;
    const reqWater = data.reqWater;
    const waterUnit = data.wUnit;

    document.querySelector("#username").innerHTML = username;
    document.querySelector("#waterRes").innerHTML = reqWater + " " + waterUnit;
}
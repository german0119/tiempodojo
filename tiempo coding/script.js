function celciusToFarenheit(temp) {
    temp = parseInt(temp);
    var res = (temp * 1.8) + 32
    return Math.ceil(res);
}

function farenheitToCelcius(temp) {
    temp = parseInt(temp);
    var res = (temp - 32) / 1.8
    return Math.ceil(res);
}

function changeTemp(degree) {
    var currentDegree = degree.value;

    var maxs = document.querySelectorAll('span[id$="_max"]');
    var mins = document.querySelectorAll('span[id$="_min"]');
    if (currentDegree === 'c') {
        for (var i = 0; i < maxs.length; i++){
            maxs[i].innerHTML = farenheitToCelcius(maxs[i].innerText);
            mins[i].innerHTML = farenheitToCelcius(mins[i].innerText);
        }
    } else {
        for (var i = 0; i < maxs.length; i++){
            maxs[i].innerHTML = celciusToFarenheit(maxs[i].innerText);
            mins[i].innerHTML = celciusToFarenheit(mins[i].innerText);
        }      
    }
}

function showAlert() {
    alert("Wheater");
}

function myFunction() {
    document.getElementById("cookie").style.display = "none";
}
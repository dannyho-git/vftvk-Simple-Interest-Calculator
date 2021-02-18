function compute()
{
    var principal = document.getElementById("principal").value;
    
    if (Number(principal) <= 0) {
        document.getElementById("principal").focus();
        alert("Enter a positive number");
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate/100;

    var thisDay = new Date();
    var thisYear = thisDay.getFullYear();
    var endYear = Number(thisYear) + Number(years);
    
    //var resultText = "test <br> break" //principal + " " + rate + " " + years + " " + interest + " " + endYear;
    var resultText = "If you deposit " +  "<mark>" + String(principal) + "</mark>" + "<br>" + "at an interest rate of " + "<mark>" + String(rate) + "</mark>" + "," + "<br>" + "you will receive an amount of " + "<mark>" + String(interest) + "</mark>" + "<br>" + "in the year " + "<mark>" + String(endYear) + "</mark>" + ".";
    document.getElementById("result").innerHTML = resultText;

    document.getElementById("principal").focus();
}

function showrate()
{
    var rate = principle = document.getElementById("rate").value;
    document.getElementById("ratespan").innerHTML = String(rate).concat("%");
}
        
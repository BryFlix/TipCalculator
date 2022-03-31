function calculateTip (){
    var amountBill = document.getElementById("amountBill").value;
    var shareBill = document.getElementById("shareBill").value;
    var service = document.getElementById("service").value;

    if(amountBill === "" || service == 0){
        window.alert("Please Enter Some Values Madafakas!!");
        return;
    }

    if(shareBill === "" || shareBill <= 1){
        shareBill = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    var total = (amountBill * service) / shareBill;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {calculateTip();};
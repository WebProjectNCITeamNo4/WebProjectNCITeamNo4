let leftOverFrench = 3;
let leftOverBialetti = 1;
let leftOverGrinder = 0;

function checkAvailableProduct(numProduct){
    switch(numProduct){
        case 0:
            if(leftOverBialetti>1){
                document.getElementById("placeholder0").innerHTML =`Only ${leftOverBialetti} available in store`;
            }
            else if(leftOverBialetti==1){
                document.getElementById("placeholder0").innerHTML ="Hurry! Only 1 Bialetti Original available in store";
            }
            else{
                document.getElementById("placeholder0").innerHTML ="Item not available";
                document.getElementById("placeholder0").style.color="red";
            }
            setTimeout(disappearing,5000,"placeholder0");
            break;
        case 1:
            if(leftOverFrench>1){
                document.getElementById("placeholder1").innerHTML =`Only ${leftOverFrench} available in store`;
            }
            else if(leftOverFrench==1){
                document.getElementById("placeholder1").innerHTML ="Hurry! Only 1 Elite French Press available in store";
            }
            else{
                document.getElementById("placeholder1").innerHTML ="Item not available";
                document.getElementById("placeholder1").style.color="red";
            }
            setTimeout(disappearing,5000,"placeholder1");
            break;
        case 2:
            if(leftOverGrinder>1){
                document.getElementById("placeholder2").innerHTML =`Only ${leftOverGrinder} available in store`;
            }
            else if(leftOverGrinder==1){
                document.getElementById("placeholder2").innerHTML ="Hurry! Only 1 Kaffee N5 grinder available in store";
            }
            else{
                document.getElementById("placeholder2").innerHTML ="Item not available";
                document.getElementById("placeholder2").style.color="red";
            }
            setTimeout(disappearing,5000,"placeholder2");
            break;
        case 3:
            document.getElementById("placeholder3").innerHTML ="Online purchase not available for this product. <br />Please contact us via email";
            setTimeout(disappearing,5000,"placeholder3");
            break;
        default:
            alert("Something went wrong. \nPlease contact us by email to place your order");
            
    }
}

function disappearing(myId){
    document.getElementById(myId).style.display="none";
}

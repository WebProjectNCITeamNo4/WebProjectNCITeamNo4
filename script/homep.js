
function changePagesVisibility(){


    let sriPagesChoice = document.getElementById("inlineRadioSri").checked; 
    let andPagesChoice = document.getElementById("inlineRadioAnd").checked;
    let allPagesChoice = document.getElementById("inlineRadioAll").checked;

    const andreabuttons = document.getElementsByClassName('andPages');
    const sridevikabuttons = document.getElementsByClassName('sriPages');

    const allbuttons = document.getElementsByClassName('btn-secondary');

    if(sriPagesChoice==true){
        for(i=0; i<andreabuttons.length;i++){
            andreabuttons[i].disabled = true;
            sridevikabuttons[i].disabled = false;
        }
    }
    else if(andPagesChoice==true){
        for(i=0; i<sridevikabuttons.length;i++){
            sridevikabuttons[i].disabled = true;
            andreabuttons[i].disabled = false;
        }
    }
    else if(allPagesChoice==true){
        for(i=0;i<allbuttons.length;i++){
            allbuttons[i].disabled = false;
        }

    }
}
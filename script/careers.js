let lastPressed = "";

function lastPressedUpdate(x){
    lastPressed = x;
}

function formValidation(event){
    event.preventDefault();

    let checkbox1 = document.getElementById("myCheckbox").checked;
    let nameApplicant = document.getElementById("nameApplicant").value;
    let surnameApplicant = document.getElementById("surnameApplicant").value;
    let address = document.getElementById("inputAddress1").value;
    let city = document.getElementById("inputCity").value;
    let county = document.getElementById("inputCounty").value;
    let eircode = document.getElementById("inputEIRCODE").value;
    let cvdocument = document.getElementById("formFile").value;
    

    
    
    if (document.getElementById("inlineRadio1").checked==true){
        typeEmployment = "FullTime";
    }
    else if (document.getElementById("inlineRadio2").checked==true){
        typeEmployment = "PartTime";
    }
    else{
        typeEmployment = "Any";
    }



    
    try{
        attachmentName = document.getElementById("formFile").files[0].name;
    } 
    catch{
        attachmentName="";   
    }

    let userApplication = [nameApplicant,surnameApplicant,address,city,county,eircode,cvdocument];

    if(checkbox1==false){
        alert("Please give the authorisation for the use of your personal data.");
    }
    else if(nameApplicant=="" || surnameApplicant==""){
        alert("Please populate both the name and surname fields");
    }
    else if(!attachmentName.includes(".pdf")){
        alert("Please enter your CV in .pdf format");
    }
    else{
        formSubmittedOk(userApplication);
    }
    

}


function formSubmittedOk(userApplication){
    document.getElementById("theSubmitbutton").disabled = true;
    alert("Thank you for your application.\nWe will contact you in the next week with our feedback.")
    let myModal = bootstrap.Modal.getInstance(document.getElementById("myModalDetails"));
    myModal.hide();

    //alert("Data application to save to the server "+userApplication);

}
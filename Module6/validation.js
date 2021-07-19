

  function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


function validateCard(card){
    var a = document.getElementById(card).value;

    var filter = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateName(nm) {
    var a = document.getElementById(nm).value;
   
    var filter = /^[a-zA-Z\-\s]+$/i;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
} 



var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    var sVet = $("#select-pro").children("option:selected").val();
    if(sVet == "Lee"){
        if(date.getDay() == 1 || date.getDay() == 0 || date.getDay() == 5)
        return [false];
    }else if(sVet == "Montgomery"){
        if (date.getDay() === 0 || date.getDay() === 2 || date.getDay() === 6)
        return [false];
    }else if(sVet == "Nguyen"){
            if (date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 6)
            return [false];

    }else{
        if (date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 6)
        return [true];
    }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}




  $(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#first-name").on("change", function(){//validate name
        //check name contains no symbols or numbers
        if(!validateName("first-name")){
            alert("Please only enter Letters.");
            $("#first-name").val("");
            $("#first-name").addClass("error");
            $("#submitbtn").prop('disabled',true);
        }else {
            $("#first-name").removeClass("error");
        }
    });

    $("#debit").on("change", function(){//validate credit card
        if (!validateCard("debit")){
            alert("Incorrect format. The format should be: XXXX-XXXX-XXXX-XXXX");
            $("#debit").val("");
            $("#debit").addClass("error");
            $("#submitbtn").prop('disabled',true);
        }
        else {
            $("#debit").removeClass("error");
        }
    });


    
    $("#submitbtn").click(function(){//when the confirm appointment button is pressed
        var date = $("#dateInput").datepicker('getDate');
        var d = ("0" + date.getDate()).slice(-2);
        var m = ("0" + (date.getMonth() + 1)).slice(-2);
        var y = date.getFullYear();

        var time = $("#time-book").val();
        var sVet = $("#select-pro").children("option:selected").val();

        var nm = $("#first-name").val();
        var em = $("#email").val();
        var p = $("#phone").val();
        var cc = $("#debit").val();

       
        document.getElementById("infoFill").innerHTML = "Name: " + nm + "<br>Email: " + em +
                                                    "<br>Phone Number: " + p +
                                                    "<br>Date: " + m + "/" + d + "/" + y   + "<br>"+
                                                    "Time (24hr): " + time  + "<br>"+     
                                                    "Veterinarian: " + sVet;
    })


    $("#submitbtn").prop('disabled', true);

    $("#inputName, #inputEmail, #phone, #debit").keyup(function(){
        if($("#first-name").val() != '' && $("#email").val() != '' && $("#phone").val() != '' && $("#debit").val() != '' && $("#dateInput").datepicker("getDate") != null ){
            $("#submitbtn").prop('disabled',false);
        }else{
            $("#submitbtn").prop('disabled',true);
        }
    });

    $("#dateInput").change(function(){
        if($("#first-name").val() != '' && $("#email").val() != '' && $("#phone").val() != '' && $("#debit").val() != '' && $("#dateInput").datepicker("getDate") != null ){
            $("#submitbtn").prop('disabled',false);
        }else{
            $("#submitbtn").prop('disabled',true);
        }
    });


    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });


    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    




    $( "#dateInput" ).datepicker({
            
        dateFormat: setDateFormat,

        minDate: new Date('06/01/2021'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates

        
    }
);


    });
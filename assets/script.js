function loadText() {
    for(var i = 0; i < 10; i++)
    {
        var eventID = i+9;
        eventID = "event-"+eventID; 
        var elemID = "#" + eventID;
        console.log("Retrieving " + eventID);
        $(elemID).val(localStorage.getItem(eventID));
        checkTense(elemID);
    }
    console.log(moment().format("dddd, MMMM Do, YYYY"));
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    
}

function saveText(textElement) {
    var text = $(textElement).val().trim();
    localStorage.setItem($(textElement).attr('id'),text);
}

function checkTense(eventID) {
    var hour = eventID.substring(7);
    var currentTime = moment().hour();
    console.log("Checking Tense for " + eventID + " at " + currentTime);
    if(hour < currentTime) {
        $(eventID).addClass("past");
    }else if(hour > currentTime) {
        $(eventID).addClass("future");
    }else {
        $(eventID).addClass("present");
    }
}

$(".saveBtn").on("click", function () {
    var eventTextElem = $(this).prev(".events");
    saveText(eventTextElem);
});

loadText();
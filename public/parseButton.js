$(document).ready(function () {
    
    $("#parse").click(function () {
      
        $.get("/parse", { input: document.getElementById("myText").value }, function (data) {
           // console.log(data);
            $("#output").html(JSON.stringify(data.answer).replace(/},{/g, "},\n{"));
                   
        }, 'json');
    });



});

$(document).ready(function () {
    
    $("#parse").click(function () {
       // if (window.localStorage) localStorage.input = document.getElementById("myText").value;
        //   console.log(document.getElementById("original").value);
        $.get("/parse", { input: document.getElementById("myText").value }, function (data) {
            console.log(data);
            $("#output").html(data.answer);
            //  console.log(_.template(template, { rows: data.rows }));          
        }, 'json');
    });
});
/*
window.onload = function () {
    // If the browser supports localStorage and we have some stored data
    if (window.localStorage && localStorage.input) {
        document.getElementById("myText").value = localStorage.input;
    }
};
*/
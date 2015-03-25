$(document).ready(function () {

    $("#parse").click(function () {
        var data = tokenizar(document.getElementById("myText").value);
        $("#output").html(JSON.stringify(data).replace(/},{/g, "},\n{"));

    });
});

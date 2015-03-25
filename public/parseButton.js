$(document).ready(function () {

    $("#parse").click(function () {
        var data;
        try {
            data = tokenizar(document.getElementById("myText").value);
            $("#output").html(JSON.stringify(data).replace(/},{/g, "},\n{"));
        }
        catch (err) {
            $("#output").html(JSON.stringify(err).replace(/},{/g, "},\n{"));
        }
       

    });
});

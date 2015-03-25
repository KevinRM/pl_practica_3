
// Setup the drag and drop listeners.
//var dropZone = document.getElementById('drop_zone');
$(document).ready(function () {
    document.getElementById('drop_zone').addEventListener('dragover', handleDragOver, false);
    document.getElementById('drop_zone').addEventListener('dragleave', handleMouseOut, false);
    document.getElementById('drop_zone').addEventListener('drop', handleFileSelect, false);
    document.getElementById('files').addEventListener('change', CopyMe, false);
});

function reset_form_element(x) {
    x.wrap('<form>').parent('form').trigger('reset');
    x.unwrap();

}
function re(x) {
    document.getElementById('myText').innerHTML = "";
    reset_form_element($('#files'));
    x.preventDefault();
}
function handleMouseOut(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.background = "#2E2E2E";
}

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var file = evt.dataTransfer.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('myText').innerHTML = e.target.result;
        }
        var c = reader.readAsText(file);
    }
    else { alert("Failed to load file"); }
    evt.target.style.background = "#2E2E2E";
}
function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.background = "green";
}

function CopyMe(evt) {
    var file = evt.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            myText.innerHTML = e.target.result;
        }
        var c = reader.readAsText(file);
    }
    else { alert("Failed to load file"); }
}

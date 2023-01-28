function showform(dowhat) {
                
    if (dowhat == 'delete'){
        var text = document.getElementById("delete");
        if(text.style.display === "none"){
            text.style.display = "block";
        }else{
            text.style.display = "none";
        }
    }
}

function deleteProduct(pid) { showform ('delete'); }

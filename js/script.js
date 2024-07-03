window.addEventListener("load", function() {
    document.body.style.opacity = 1;
});


function checkPassword() {
    if (document.getElementById("password").value != document.getElementById("cnfrpwd").value) {
        alert("Password Mismatched!");
        return false;
    } else {
        alert("success");
        return true;
    }
}
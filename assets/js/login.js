let goodmail = "yes@gmail.com";
let goodpassword = "lucas";

function sign_up(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if ( email == goodmail && password == goodpassword ){
        window.location = "../pages/afterLogin.html"
    }else {
        alert("Erreur 404");
    }
}
    let email = document.getElementById(" ").value;
    let password = document.getElementById(" ").value;
document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); 
const username = document.getElementById("userid").value;
const password = document.getElementById("passid").value;
const role = document.getElementById("roles").value;

if (username===" " && password===" "){
    document.getElementById("abce").textContent =
    "username and password cannot be empty"
}
if (username==="admin" && password==="admin123" && role === "admin") {
window.location.href = "admin.html";
} 
else if ( username==="user" && password==="user123" && role === "user") {
window.location.href = "user.html";
}
else if(username==="user" && password==="user123" && role==="admin"){
    document.getElementById("abc").textContent =
    "please select correct role"
}
else if(username==="admin" && password==="admin123" && role==="user"){
    document.getElementById("abc").textContent =
    "please select correct role"
}
else{
    document.getElementById("abc").textContent =
    "enter username and password correct and both should not be empty for login"
}
});


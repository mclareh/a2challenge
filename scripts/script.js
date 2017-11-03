var user = {
	email: "coolguy@gmail.com",
	password:"ILoveCoffee",
	name: "Grant Chirpus"
};  

checkLogin();



function checkLogin() {
	var userEmail = document.querySelectorAll("input")[0];
	var userPassword = document.querySelectorAll("input")[1];
	if (user.email === userEmail.value && user.password === userPassword.value) {
	  document.querySelectorAll(".form")[0].style.display = "none";
	  document.querySelectorAll(".welcome")[0].style.display = "none";
	  document.querySelectorAll(".container")[0].style.display = "flex";
	  return;	
	} else if (user.email !== userEmail.value && user.password !== userPassword.value) {
	  document.querySelectorAll(".form")[0].style.display = "none";
	  document.querySelectorAll(".welcome")[0].style.display = "none";
	  document.querySelectorAll(".error")[0].style.display = "block";
	  return;	
	}
}


function removeError() {
  document.querySelectorAll(".error")[0].style.display = "none";
}
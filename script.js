window.onload = function(){

var Login_Window = document.getElementById("login"); //EVENT FIRED WHEN USER SUBMITS LOGIN INFO
Login_Window.addEventListener("submit", function(){

	var user = document.getElementById("username_box").value;
	var pass = document.getElementById("password_box").value;

	var Request = new XMLHttpRequest();
	Request.onload = function(){
		
	}

	Request.open("POST, Server.php");
	Request.setRequestGeader("Content-type", "application/x-www-form-urlencoded");
	Request.send(user&pass);

})












}

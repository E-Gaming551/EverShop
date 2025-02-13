function checkForm() {
	var username = document.forms["myForm"]["username"].value;
	var password = document.forms["myForm"]["password"].value;
	var firstname = document.forms["myForm"]["firstname"].value;
	var lastname = document.forms["myForm"]["lastname"].value;
	var username = document.forms["myForm"]["username"].value;
	var email = document.forms["myForm"]["email"].value;
	if (username == "") {
		alert("Username is required");
		return false;
	}
		if (firstname == "") {
		alert("First name is required");
		return false;
	}
		if (lastname == "") {
		alert("Last name is required");
		return false;
	}
		if (username == "") {
		alert("Username is required");
		return false;
	}
		if (email == "") {
		alert("Email is required");
		return false;
	}
		if (password == "") {
		alert("Password is required");
		return false;
	}
}
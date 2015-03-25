
$(document).ready () {

	$("#congrats").hide();
	
	function trade () {
		alert("we're still working on that");
	}

	function guess_check () {
		var guess = document.getElementById("guess").value;
		if (guess == "5") {
			document.getElementById("congrats").style.display = "block";
		} 
	}

}

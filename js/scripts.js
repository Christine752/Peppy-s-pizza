function myMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("comment").value;
  if (email !== "" && name !== "" && message !== "") {
    // document.getElementById("pop").innerHTML =
    alert(
      "Hello" +
        " " +
        name +
        " we have received your message. Thank you for reaching out to us."
    );
  } else if (email == "" || name !== "" || message !== "") {
    alert("Please fill in all the details");
  }
}

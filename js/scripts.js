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

var button = getElementById("myBtn");

btn.onclick = function (event) {
  var first = document.forms["myForm"]["contact-name"].value;
  if (first == "") {
    alert("Please enter your name");
    return false;
  }
  var second = document.forms["myForm"]["contact-email"].value;
  if (second == "") {
    alert("Please enter your email");
    return false;
  }
  var third = document.forms["myForm"]["contact-message"].value;
  if (third == "") {
    alert("Please enter your message");
    return false;
  }
  var person1Input = $("input#contact-name").val();
  $("span#outputName").append(person1Input);

  $(".toast").toast("show");
  event.preventDefault();
};

function getType() {
  var selectedType = document.getElementById("typeOfPizza").value;
  return parseInt(selectedType);
}
function getSize() {
  var selectedSize = document.getElementById("size").value;
  return parseInt(selectedSize);
}
function getCrust() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getToppings() {
  var selectedToppings = document.getElementById("toppings").value;
  return parseInt(selectedToppings);
}
function getQuantity() {
  var selectedQuantity = document.getElementById("quantity").value;
  return parseInt(selectedQuantity);
}

function getTotalAmount() {
  let totalAmount = (getSize() + getToppings() + getType()) * getQuantity();
  if (totalAmount && getType() > 0 && getSize() > 0) {
    alert(
      "You have Ordered" +
        " " +
        getQuantity("") +
        " " +
        "pizza." +
        "" +
        " The Total Amount is kshs " +
        totalAmount +
        "" +
        " Thank you for eating at Royals pizza palace."
    );
  } else {
    return false;
  }
  return totalAmount;
}

function output() {
  let ourAmount = getTotalAmount();
  if (ourAmount && getType() > 0 && getSize() > 0) {
    prompt("Enter your location");
    alert(
      "Your order will be delivered to your chosen location. Delivery fee is Ksh100. Thank you for choosing Peppy's pizza!!"
    );
  } else if (getType() < 1) {
    alert("select pizza type");
  } else if (getSize() < 1) {
    alert("select pizza size");
  } else {
    alert("Please fill in the quantity and order details!");
  }
}

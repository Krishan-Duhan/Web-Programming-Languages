// your js code goes here...
var span1=document.createElement("span");
//span1.setAttribute("id", "span1");
span1.style.display = "inline";

var username = document.getElementById("username");
username.parentNode.insertBefore(span1, username.nextSibling);
span1.innerHTML = " check"



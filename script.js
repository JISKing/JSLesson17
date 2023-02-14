console.log("You can ignore single and double quotes like this:'' \"\"");

alert("Please, enter your data");

let firstName = prompt("Enter your name");
alert(`Your name is: ${firstName}`);

let surName = prompt("Enter your surname");
alert(`Your fullname is: ${firstName} ${surName}`);

let age = prompt("How old are you?");
alert(`Your fullname is: ${firstName} ${surName}, your age is: ${age}`);

let access = confirm("Are you admin?");
alert(
  `Your fullname is: ${firstName} ${surName}, your age is: ${age}, admin status: ${access}`
);

// console.log(Boolean(alert('5')));

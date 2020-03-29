// Build Facebook

// username and passwords

const database = [
  {
    name: "Imran",
    password: "12345"
  },
  {
    name: "Malik",
    password: "98765"
  },
  {
    name: "Sahil",
    password: "99999"
  }
];

// NewsFeed

const newsFeed = [
  {
    name: "Bobby",
    timeline: "Messed up with the programming but trying"
  },
  {
    name: "Sally",
    timeline: "Javascript is sooo coool!"
  }
];

// Storing User Details to be validated later
let userName, password;

let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", submitForm, true);

function submitForm(e) {
  e.preventDefault();

  setUserDetails();
  //Once the user details are set, we will check whether user is valid or not
  let isValid = signIn(userName, password);

  if (isValid) {
    console.log(newsFeed);
    window.location.href = "./homepage.html";
  } else {
    alert("Please try again or sign up");
  }

  myForm.reset();
}

function setUserDetails() {
  userName = document.getElementById("userName").value;
  console.log("Input element is:", userName);
  password = document.getElementById("password").value;
}

function signIn(name, pass) {
  for (var i = 0; i < database.length; i++) {
    if (name === database[i].name && pass === database[i].password) {
      return true;
    } else {
      return false;
    }
  }
}

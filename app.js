// local storage
localStorage.setItem("name", "Aeiyan Khan");
localStorage.setItem("name", "Ahmed");
localStorage.clear();

// localStorage.setItem("email","test@yopmail.com")

const userInfo = document.getElementById("userData");
const UserName = localStorage.getItem("name");
// localStorage.removeItem("name")
userInfo.textContent = UserName;

// Session Storage

// sessionStorage.setItem("email","test1234@gmail.com")
const email = sessionStorage.getItem("email");
userInfo.textContent = email;

// cookies Storage

document.cookie = "name=aeiyan;expires=Fri, 31 Dec 2030;path=/";
document.cookie = "email=test12;expires=Fri, 31 Dec 2030;path=/";
document.cookie="name=''"

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/f150.jpg") {
        myImage.setAttribute ("src", "images/f150_2.jpg");
    } else {
        myImage.setAttribute("src", "images/f150.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.getItem("name", myName);
    myHeading.textContent = `Ford F150 is very powerful, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `F150 i very powerful, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
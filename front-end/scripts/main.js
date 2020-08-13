let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/jiaxiyugong.png') {
        myImage.setAttribute('src', 'images/mutou.jpg');
    } else {
        myImage.setAttribute('src', 'images/jiaxiyugong.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContext = '欢迎来到未定事件簿，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎来到未定事件簿，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
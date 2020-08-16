let myImg = document.querySelector("img");

myImg.onclick = function () {
  let imgSrc = myImg.getAttribute("src");
  if (imgSrc === "../images/firefox.jpg") {
    imgSrc = "../images/chrome.jpg";
  } else {
    imgSrc = "../images/firefox.jpg";
  }

  myImg.setAttribute("src", imgSrc);
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入用户姓名");
  if (!myName || myName === null || myName === " ") {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    //textContent设置文本内容和innerText用法一致，存在一些浏览器兼容性问题
    if(myHeading.textContent){
      myHeading.textContent= "Mozilla 酷毙了," + myName;
    }else{
      myHeading.innerText= "Mozilla 酷毙了," + myName;
    }
    
  }
}

//初始化数据读取
let myStorageName = localStorage.getItem("name");
if (!myStorageName || myStorageName === null || myStorageName === " ") {
  setUserName();
} else {
  //innerHtml设置文本内容（包括标签元素）全浏览器兼容
  myHeading.innerHTML = "Mozilla 酷毙了," + myStorageName;
}

myButton.onclick = function () {
  setUserName();
};

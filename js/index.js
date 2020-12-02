// Your code goes here
const navLink = document.querySelectorAll(".nav a");
const logo = document.querySelector(".logo-heading");
const introPara = document.querySelector(".intro");
const textContent = document.querySelector(".text-content");
const imgContent = document.querySelectorAll("img-content");
const para = document.querySelectorAll("p");

navLink.forEach((nav) => {
  nav.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.color = "red";
      setTimeout(function () {
        event.target.style.color = "black";
      }, 500);
    },
    false
  );
});

para.forEach((p) => {
  p.addEventListener("click", (event) => {
    event.target.style.background = "pink";
    setTimeout(function () {
      event.target.style.background = "white";
    }, 500);
  });
});

window.addEventListener("keydown", (event) => {
  document.querySelector("body").style.backgroundColor = "red";
});

window.addEventListener("keyup", (event) => {
  document.querySelector("body").style.backgroundColor = "white";
});

window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  document.querySelector("body").style.backgroundColor = "black";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "white";
  }, 500);
});

window.addEventListener("load", (e) => {
  logo.style.color = "green";
  setInterval(function () {
    let color = logo.style.color;
    if (color === "green") {
      logo.style.color = "red";
    } else {
      logo.style.color = "green";
    }
  }, 500);
});

window.addEventListener("resize", (e) => {
  let size = window.innerHeight;
  let body = document.querySelector("body");
  if (size < 400) {
    body.style.background = "blue";
  } else {
    body.style.background = "white";
  }
});

window.addEventListener("scroll", (e) => {
  let scroll = window.scrollY;
  if (scroll > 300) {
    para.forEach((p) => {
      p.style.color = "red";
    });
  } else {
    para.forEach((p) => {
      p.style.color = "black";
    });
  }
});

para.forEach((p) => {
  p.addEventListener("dblclick", (event) => {
    event.target.style.background = "green";
    setTimeout(function () {
      event.target.style.background = "white";
    }, 500);
  });
});

window.addEventListener("copy", (e) => {
  alert("Dont copy my shit!");
  e.preventDefault();
});
// window.addEventListener("load", (event) => {
//   setTimeout(() => {
//     let dim = textContent.getBoundingClientRect();
//     window.scrollTo(0, dim.top);
//   }, 200);
// });

//this is extra awesome stuff

// window.addEventListener("keydown", (e) => {
//   if (e.key === "j") {
//     let modal = document.createElement("div");
//     modal.style =
//       "position:fixed;width:200px;height:200px;top:100px;left:100px;background-color:red;";
//     modal.innerHTML = "here's how we cheat the system!";
//     let body = document.querySelector("body");

//     modal.addEventListener("mogeusedown", (e) => {
//       modal.addEventListener("mousemove", (me) => {
//         modal.style.top = `${e.screenY}px`;
//         console.log(me);
//       });
//     });

//     modal.addEventListener("mouseup", (e) => {
//       modal.removeEventListener("mousemove");
//     });
//     body.appendChild(modal);
//     console.log("it's a j!");
//   }
// });
// window.

// const para.addEventListener("keydown")

// Array.forEach(nav => {
//     console.log(nav)
// })

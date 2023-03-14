const hometile = [
  {
    title: "Hi",
    title2: "I'm Janik",
    title3: "aspiring Android/Game Developer",
    description: "This is a placeholer link containing a youtube link",
    image: "../portrait.jpg",
    hlink: "https://www.youtube.com/"
  }
]
const main = document.querySelector("main");
const home = document.getElementById("Home");

hometile.forEach(tile => {
  const div = document.createElement("div");
  div.classList.add("home");

  const div3 = document.createElement("div3");
  div3.classList.add("imgDivHome");
  div.appendChild(div3);

  const img = document.createElement("img");
  img.src = "portrait.jpg";
  div3.appendChild(img);

  const div2 = document.createElement("div2");
  div.appendChild(div2);

  const h1 = document.createElement("h1");
  h1.innerText = tile.title;
  div2.appendChild(h1);

  const h2 = document.createElement("h2");
  h2.innerText = tile.title2;
  div2.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.innerText = tile.title3;
  div2.appendChild(h3);

  home.appendChild(div);
});

const abouttile = [
  {
    title: "My skillset includes but is not limited to all of the following",
  }
]

const about = document.getElementById("About");

abouttile.forEach(tile => {
  const div = document.createElement("div");
  div.classList.add("about");

  const h3 = document.createElement("h3");
  h3.innerText = tile.title;
  div.appendChild(h3);

  const java = document.createElement("img");
  java.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
  div.appendChild(java);          
          
  const csharp = document.createElement("img");
  csharp.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg";
  div.appendChild(csharp);   
  
  const gradle = document.createElement("img");
  gradle.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain-wordmark.svg";
  div.appendChild(gradle); 

  const threejs = document.createElement("img");
  threejs.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg";
  div.appendChild(threejs);  
  
  const html = document.createElement("img");
  html.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg";
  div.appendChild(html); 

  const css = document.createElement("img");
  css.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg";
  div.appendChild(css); 

  const javascr = document.createElement("img");
  javascr.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
  div.appendChild(javascr); 

  const nodejs = document.createElement("img");
  nodejs.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
  div.appendChild(nodejs);

  const unreal = document.createElement("img");
  unreal.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original-wordmark.svg";
  div.appendChild(unreal);
  
  const unity = document.createElement("img");
  unity.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg";
  div.appendChild(unity);

  const git = document.createElement("img");
  git.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg";
  div.appendChild(git);
  
  const github = document.createElement("img");
  github.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg";
  div.appendChild(github);

  const maya = document.createElement("img");
  maya.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original-wordmark.svg";
  div.appendChild(maya);

  const blender = document.createElement("img");
  blender.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original-wordmark.svg";
  div.appendChild(blender);

  const swift = document.createElement("img");
  swift.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg";
  div.appendChild(swift);
  
  
          

  about.appendChild(div);
});

const projects = [
    {
      title: "Gnoming Home (Unity)",
      description: "Gnoming Home is a little Platformer that I developed together with an artist for the Global Game Jam 2023. This Project was realised with the Unity-Engine.",
      image: "gnominghome.png",
      hlink: "https://globalgamejam.org/2023/games/gnoming-home-6"
    },
    {
      title: "Server-Client (Java) ",
      description: "A Java project which uses the CRUD principle. It contains a Rest-based Webserver and a client to connect to it.",
      image: "serverclient.png",
      hlink: "https://github.com/JMVKH/ClientServerJavaApp"
    },
    {
      title: "Cinesthesia Webpage",
      description: "A webpage that I built for a group projekt. Credits for design and Layout are shared with another group member.",
      image: "cinesthesiawebpage.jpg",
      hlink: "https://github.com/JMVKH/CinesthesiaWebpage/tree/main/dist"
    },
    {
      title: "Cinesthesia cinema Seat",
      description: "A ThreeJS webpage made for the cinesthesia group project. 3D seat and tray models were not made by me.",
      image: "cineseat.png",
      hlink: "https://github.com/JMVKH/Cinesthesia3DSeat/tree/main/3dmodel_website"
    },
    {
      title: "Racetrack ThreeJS",
      description: "This is a ThreeJS project using nurbs curves to let a racecar follow a track. Its possible to show the lighting, the curve the car follows, to change the speed of the car and to enter fullscreen mode with simple button presses",
      image: "racetrack.png",
      hlink: "https://github.com/JMVKH/RaceTrack3JS"
    },
    {
      title: "Ghost House",
      description: "VR Game made with Unity engine. You are a ghost that can fly freely through the house you are bound to. To escape you have to find your bones and combine them to make you whole again",
      image: "ghosthouse.png",

    },
    {
      title: "Heart'n'Seek",
      description: "My first game made with unreal engine. A simple 3D platformer, where the goal is to find all the hearts hidden on the map. This was mostly a project to familiarize myself with the engine",
      image: "heartnseek.png",

    },
    {
      title: "Future Projects",
      description: "This section is a work in progress, more examples will be added in the future",
      image: "flower.png",

    },
  ];

  const portfolio = document.getElementById("Portfolio");

  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project");

    const a = document.createElement("a");
    var linked = project.hlink;
    a.href = linked;
    div.appendChild(a);    

    const img = document.createElement("img");
    img.src = project.image;
    a.appendChild(img);

    const h3 = document.createElement("h3");
    h3.innerText = project.title;
    a.appendChild(h3);

    const p = document.createElement("p");   
    p.innerText = project.description;
    a.appendChild(p);

    portfolio.appendChild(div);
  });



  const contacttile = [
    {
      title: "If you want to contact me please use this form",
    }
  ]

  const contact = document.getElementById("Contact");

  contacttile.forEach(tile => {
    const div = document.createElement("div");
    div.classList.add("contact");

    const p = document.createElement("p");
    p.innerText = tile.title;
    div.appendChild(p);

    const text = document.createElement("input");
    text.type = "text";
    text.id = "fullName";
    text.placeholder="Full Name";
    text.required=true;
    div.appendChild(text);

    const email = document.createElement("input");
    email.type = "email";
    email.id = "email_id";
    email.placeholder="Email";
    email.required=true;
    div.appendChild(email);

    const tArea = document.createElement("textarea");
    tArea.id = "message";
    tArea.placeholder="Message";
    tArea.required=true;
    div.appendChild(tArea);

    const btn = document.createElement("button");
    btn.onclick =   function SendMail() {
      var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
      }
      emailjs.send("service_aqt7ihg", "template_m22legh", params).then(function(res) {
          alert("Success! " + res.status);
  
      })
    }
    btn.textContent = "Send"
    div.appendChild(btn);

    contact.appendChild(div);
  });
  
   
  
  
  main.appendChild(home);
  main.appendChild(about);
  main.appendChild(portfolio);
  main.appendChild(contact);


  
  

  
const mousetrail  = [
  {
    title: "circle 1",
  },
  {
    title: "circle 2",
  },
  {
    title: "circle 3",
  },
  {
    title: "circle 4",
  },
  {
    title: "circle 5",
  },
  {
    title: "circle 6",
  },
  {
    title: "circle 7",
  },
  {
    title: "circle 8",
  },
  {
    title: "circle 9",
  },
  {
    title: "circle 10",
  },
  {
    title: "circle 11",
  },
  {
    title: "circle 12",
  },
];

mousetrail.forEach(circle => {
  const div = document.createElement("div");
  div.classList.add("circle");

  main.appendChild(div);
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [

  '#ffb56b','#dfaf5e','#c1a955','#a3a151', '#879850','#6d8d51', '#558252', '#407753', '#2c6b53', '#1c5e51','#10524d','#0a4547', 
       
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();


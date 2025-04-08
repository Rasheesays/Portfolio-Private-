
//Makes the social icons bubble(breathe)
const twitter = document.querySelectorAll(".social")[0];
const linkedin = document.querySelectorAll(".social")[1];
const git = document.querySelectorAll(".social")[2];

const twitterIcon = document.getElementById("twitterIcon");
const linkedinIcon = document.getElementById("linkedinIcon");
const githubIcon = document.getElementById("githubIcon");

let rotateCounter = 0;
let scaleX = 0.5;
let scaleY = 0.5;
let scaleX2 = 0.5;
let scaleY2 = 0.5;
let scaleCount = 0;
let scaleCount2 = 0;
let scaleCount3 = 0;
let scaleCount4 = 0;
let scaleRecursion = 0

linkedin.style.display = "none";
git.style.display = "none";
let firstInterval = setInterval(rotateIcon, 10);

function rotateIcon() {
  if(scaleRecursion>=8){
    setInterval(rotateIcon2,10000)
    scaleRecursion-=8
        githubIcon.style.color = "#1da1f2";
        

  }
  if (scaleX2 >= 1.5 || scaleY2 >= 1.5) {
    scaleX2 -= 0.5;
    scaleY2 -= 0.5;
    scaleCount4 += scaleX2 || scaleY2;
    githubIcon.style.transform = `scale(${scaleX2},${scaleY2})`;
  } else if (scaleCount2 >= 8) {
    linkedin.replaceWith(git.cloneNode(true));
    git.style.display = "block";
    scaleX2 += 0.005;
    scaleY2 += 0.005;
    scaleRecursion += scaleX2 || scaleY2;
    githubIcon.style.transform = `scale(${scaleX2},${scaleY2})`;
  } else if (scaleX >= 1.5 || scaleY >= 1.5) {
    scaleX -= 0.5;
    scaleY -= 0.5;
    scaleCount2 += scaleX || scaleY;
    linkedinIcon.style.transform = `scale(${scaleX},${scaleY})`;
  } else if (rotateCounter >= 720) {
    twitter.replaceWith(linkedin.cloneNode(true));
    linkedin.style.display = "block";
    scaleX += 0.005;
    scaleY += 0.005;
    scaleCount += scaleX || scaleY;
    linkedinIcon.style.transform = `scale(${scaleX},${scaleY})`;
  } else {
    rotateCounter += 1;
    twitterIcon.style.color = "#1da1f2";
    twitterIcon.style.transform = `rotate(${rotateCounter}deg)`;
  }
}

function rotateIcon2() {
  if (scaleX2 >= 1.5 || scaleY2 >= 1.5) {
    scaleX2 -= 0.5;
    scaleY2 -= 0.5;
    scaleCount4 += scaleX2 || scaleY2;
    githubIcon.style.transform = `scale(${scaleX2},${scaleY2})`;
  } else if (scaleCount2 >= 8) {
    linkedin.replaceWith(git.cloneNode(true));
    git.style.display = "block";
    scaleX2 += 0.005;
    scaleY2 += 0.005;
    scaleRecursion += scaleX2 || scaleY2;
    githubIcon.style.transform = `scale(${scaleX2},${scaleY2})`;
  } else if (scaleX >= 1.5 || scaleY >= 1.5) {
    scaleX -= 0.5;
    scaleY -= 0.5;
    scaleCount2 += scaleX || scaleY;
    linkedinIcon.style.transform = `scale(${scaleX},${scaleY})`;
  } else if (rotateCounter >= 720) {
    twitter.replaceWith(linkedin.cloneNode(true));
    linkedin.style.display = "block";
    scaleX += 0.005;
    scaleY += 0.005;
    scaleCount += scaleX || scaleY;
    linkedinIcon.style.transform = `scale(${scaleX},${scaleY})`;
  } else {
    rotateCounter += 1;
    twitterIcon.style.color = "#1da1f2";
    twitterIcon.style.transform = `rotate(${rotateCounter}deg)`;
  }
}


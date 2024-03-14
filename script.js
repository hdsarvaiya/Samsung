const New = document.getElementById("new");
const Box = document.getElementById("box");
const Mobile = document.getElementById("mobile1");
const TV = document.getElementById("tv1");
const app = document.getElementById("app1");
const ge = document.getElementById("ge1");
const sl = document.getElementById("sl1");
const newb = document.getElementById("new");
const mobileb = document.getElementById("mobile");
const tvb = document.getElementById("Tv");
const ab = document.getElementById("app");
const gb = document.getElementById("ge");
const sb = document.getElementById("sl");

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const img123 = document.getElementById('img123');
const textt1 = document.getElementById('text1');
const ht3 = document.getElementById('ht3');

const btnt1 = document.getElementById('btnt1');
const btnt2 = document.getElementById('btnt2');
const btnt3 = document.getElementById('btnt3');
const btnt4 = document.getElementById('btnt4');
const btnt5 = document.getElementById('btnt5');
const img1 = document.getElementById('img12');
const text1 = document.getElementById('text1');
const h3 = document.getElementById('h3');

function new_data() {
  Box.classList.add("active");
  Mobile.classList.remove("active_mobile");
  TV.classList.remove("active_tv");
  app.classList.remove("active_app");
  ge.classList.remove("active_ge");
  sl.classList.remove("active_sl");
}

function mobile_data() {
  Mobile.classList.add("active_mobile");
  Box.classList.remove("active");
  TV.classList.remove("active_tv");
  app.classList.remove("active_app");
  ge.classList.remove("active_ge");
  sl.classList.remove("active_sl");
}
function tv_data() {
  TV.classList.add("active_tv");
  Mobile.classList.remove("active_mobile");
  Box.classList.remove("active");
  app.classList.remove("active_app");
  ge.classList.remove("active_ge");
  sl.classList.remove("active_sl");
}

function app_data() {
  app.classList.add("active_app");
  TV.classList.remove("active_tv");
  Mobile.classList.remove("active_mobile");
  Box.classList.remove("active");
  ge.classList.remove("active_ge");
  sl.classList.remove("active_sl");
}

function GE_data() {
  ge.classList.add("active_ge");
  app.classList.remove("active_app");
  TV.classList.remove("active_tv");
  Mobile.classList.remove("active_mobile");
  Box.classList.remove("active");
  sl.classList.remove("active_sl");
}
function sl_data() {
  sl.classList.add("active_sl");
  ge.classList.remove("active_ge");
  app.classList.remove("active_app");
  TV.classList.remove("active_tv");
  Mobile.classList.remove("active_mobile");
  Box.classList.remove("active");
}

// Underlining Section

function n_underline() {
  newb.classList.add("underline");
  btn1.classList.add("underline");
  mobileb.classList.remove("underline");
  tvb.classList.remove("underline");
  ab.classList.remove("underline");
  sb.classList.remove("underline");
  gb.classList.remove("underline");
}

function M_underline() {
  mobileb.classList.add("underline");
  newb.classList.remove("underline");
  tvb.classList.remove("underline");
  gb.classList.remove("underline");
  sb.classList.remove("underline");
  ab.classList.remove("underline");
}

function t_underline() {
  tvb.classList.add("underline");
  mobileb.classList.remove("underline");
  newb.classList.remove("underline");
  ab.classList.remove("underline");
  gb.classList.remove("underline");
  sb.classList.remove("underline");
}

function a_underline() {
  ab.classList.add("underline");
  tvb.classList.remove("underline");
  mobileb.classList.remove("underline");
  newb.classList.remove("underline");
  gb.classList.remove("underline");
  sb.classList.remove("underline");
}
function g_underline() {
  gb.classList.add("underline");
  ab.classList.remove("underline");
  tvb.classList.remove("underline");
  mobileb.classList.remove("underline");
  newb.classList.remove("underline");
  sb.classList.remove("underline");

}
function s_underline() {
  
  
  
    sb.classList.add("underline");
    gb.classList.remove("underline");

  ab.classList.remove("underline");
  tvb.classList.remove("underline");
  mobileb.classList.remove("underline");
  newb.classList.remove("underline");
}





btn1.onclick = () => {

  img1.style.marginLeft = "0";
  h3.innerHTML = "Galaxy S24 Ultra";

}

btn2.onclick = () => {
  img1.style.marginLeft = "-20%";
  h3.innerHTML = "Galaxy S24|S24+"

    
}

btn3.onclick = () => {
  img1.style.marginLeft = "-40%";
  h3.innerHTML = "Galaxy Z Fold5|Z Flip5"
}
btn4.onclick = () => {
  img1.style.marginLeft = "-60%";
  h3.innerHTML = "Galaxy Book4 Series"
}
btn5.onclick = () => {
  img1.style.marginLeft = "-80%";
  h3.innerHTML = "Galaxy Watch6"
}


//Tv Module

btnt1.onclick = () => {

  img123.style.marginLeft = "0";
  ht3.innerHTML = "QLED (QE1C)";

}

btnt2.onclick = () => {
  img123.style.marginLeft = "-20%";
  ht3.innerHTML = "Neo QLED"

    
}

btnt3.onclick = () => {
  img123.style.marginLeft = "-40%";
  ht3.innerHTML = "Samsung OLED"
}
btnt4.onclick = () => {
  img123.style.marginLeft = "-60%";
  ht3.innerHTML = "The Frame"
}
btnt5.onclick = () => {
  img123.style.marginLeft = "-80%";
  ht3.innerHTML = "Crystal 4K UHD"
}


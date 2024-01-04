// header script
let element = document.querySelector(".sec-2")
let element2 = document.querySelector(".cen-bar")

window.onscroll = function () { magic() };

function magic() {
  if (window.scrollY > 200) {
    element.classList.add("test");
    element2.classList.add("mt");

  } else {
    element.classList.remove("test");
    element2.classList.remove("mt");

  }
}

// chatbox script

const visHidden = document.querySelector(".chatbox")
const toggleButton = document.getElementById('toggleButton');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');


toggleButton.addEventListener('click', () => {

  visHidden.classList.toggle("apparent")

  if (image1.style.display === 'none') {
    image1.style.display = 'block';
    image2.style.display = 'none';

  } else {
    image1.style.display = 'none';
    image2.style.display = 'block';

  }
});


// toDisplayTime

setInterval(() => {

  const obj = new Date()
  const h = obj.toLocaleTimeString("en-US", { hour12: true })
  const d = obj.getDay()
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const t = document.querySelector(".time-display")

  t.textContent = `${day[d]} ${h}`


}, 1000);


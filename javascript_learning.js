const colors = ["green", "red"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
const btns = document.querySelectorAll(".btn")

btn.addEventListener("click", function() {
	const randomNumber = getRandomNumber()
	document.body.style.backgroundColor = colors[randomNumber]
	color.textContent = colors[randomNumber]
})

function getRandomNumber() {
	return Math.floor(Math.random() * colors.lengths)
}


btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

    })   
})


window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});


document.addEventListener('DOMContentLoaded', function() {});
document.getElementById('getMessage').onclick = function() {};
document.getElementsByClassName('message')[0].textContent = "Here is the message";

const req = new XMLHttpRequest();
req.open("GET", '/json/cats.json', true);
req.send();
req.onload = function() {
	const json = JSON.parse(req.responseText);
	document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};

fetch('json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	})

let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});

html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		document.getElementById('data').innerHTML = "latitute: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
	});
}

const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);


// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });



var student_string;
var student_obj = JSON.parse(student_string);
var student_string_loop = JSON.stringify(student_obj);

// save JSON into a file
var persist = require('node-persist')
const {loadavg} = require('os')
persist.initSync();
persist.setItemSync('student', student_string);
// read file
var content_from_file = persist.getItemSync('student');

// global objects
__dirname
__filename
exports
module
require()
console.log()
console.error()
console.warn


<script>
	// run this function when the document is loaded
	window.onload = function() {
		// create a couple of elements in an otherwise empty HTML page
		const heading = document.createElement("h1");
		const heading_text = document.createTextNode("Big Head!");
		heading.appendChild(heading_text);
		document.body.appendChild(heading);			
	}
</script>

let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/firefox2.png');
	} else {
		myImage.setAttribute('src', 'images/firefox-icon.png);
	}
}

localStorage.getItem();
localStorage.setItem();


const table = document.getElementById("table");
const tableAttrs = table.attributes; // node element interface
for (let i = 0; i < tableAttrs.length; i++) {
	// HTMLTableElement interface: border attribute
	if (tableAttrs[i].nodeName.toLowerCase() == "border") {
		table.border = "1";
	}
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increase border";



document.querySelector(selector)
document.querySelectorAll(name)
document.createElement(name)
parentNode.appendChile(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
GlobalEventHandlers/onload
window.scrollTo()







classList 
contains 
add 
remove 
toggle 

windows.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn.addEventListener('click', function (e) {
  const question = e.currentTarget.parentElement.parentElement;
})

dataset


map()
filter()
reduce()
forEach()
split()
join()

DOMContentLoaded
load

getBoundingClientRect()
window.pageYOffset;
window.offsetTop;
scrollTo()
preventDefault();
getAttribute();
createElement()
appendChild();

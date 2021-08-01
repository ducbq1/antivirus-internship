<p>Player 1: Chris</p>

p {
	font-family: 'helvetica neue', helvetia, sans-serif;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-align: center;
	border: 2px solid rgba(0, 0, 200, 0.6);
	background: rgba(0, 0, 200, 0.3);
	color: rgba(0, 0, 200, 0.6);
	box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
	border-radius: 10px;
	padding: 3px 10px;
	display: inline-block;
	cursor: pointer;
}

const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
	let name = prompt('Enter a new name');
	para.textContent = 'Player 1: ' + name;
}

document.addEventListener('DOMContentLoaded', function() {
	function createParagraph() {
		let para = document.createElement('p');
		para.textContent = 'You clicked the button!';
		document.body.appendChild(para);
	}
	
	const buttons = document.querySelectorAll('button');
	
	for(let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', createParagraph);
	}
});


<script async src="script.js"></script>
<script defer src="script.js"></script>
<button onclick="createParagraph()">Click me!</button>



Scripts loaded using the async attribute (see below) will download the script without blocking rendering the page and will execute it as soon as the script finishes downloading. You get no guarantee that scripts will run in any specific order, only that they will not stop the rest of the page from displaying. It is best to use async when the scripts in the page run independently from each other and depend on no other script on the page.

Scripts loaded using the defer attribute (see below) will run in the order they appear in the page and execute them as soon as the script and content are downloaded.



async and defer both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked by the scripts.
If your scripts should be run immediately and they don't have any dependencies, then use async.
If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using defer and put their corresponding <script> elements in the order you want the browser to execute them.

Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.



JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. For example:


Template literals simplify this enormously:
output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;



const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  let code = input.slice(0,3);
  let semiC = input.indexOf(';');
  let name = input.slice(semiC + 1);
  let result = code + ': ' + name;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}


The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false — this can be useful in some situations, and can take up a lot less code than an if...else block if you have two choices that are chosen between via a true/false condition.




panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.parentNode.removeChild(panel);
msg.style.backgroundImage = 'url(icons/warning.png)';
panel.style.backgroundColor = 'aqua';
return Math.floor(Math.random() * (number + 1));


const controller = new AbortController();
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}, { signal: controller.signal }); // pass an AbortSignal to this handler


controller.abort(); // removes any/all event handlers associated with this controller.removeEventListener();

You are probably wondering what "this" is. The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. So why not just write person instead? As you'll see in the Object-oriented JavaScript for beginners article, when we start creating constructors and so on, this is very useful — it always ensures that the correct values are used when a member's context changes (for example, two different person object instances may have different names, but we want to use their own name when saying their greeting).



function Person(first, last, age, gender, interest) {
	this.name = {
		first: first,
		last: last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.bio = function() {
		alert(this.name.first + ' ' + this.name.last + ' is ' + this.age);
	};
	this.greeting = function() {
		alert('Hi! I\'m + this.name.first + '.');
	};
}

let person = new Object();
let person = Object.create();
 

prototype
constructor

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}


let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');




setTimeout()
clearTimeout()
setInterval()
clearInterval()
requestAnimationFrame()
cancelAnimationFrame()



fetch('coffee.jpg')
.then(response => {
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	} else {
		return reponse.blob();
	}
})
.then(myBlob => {
	let objectURL = URL.createObjectURL(myBlob);
	let image = document.createElement('img');
	image.src = objectURL;
	document.body.appendChild(image);
})
.catch(e => {
	console.log('There has been a problem with your fetch operation: ' + e.message);
});











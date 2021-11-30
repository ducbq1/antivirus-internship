
// get route parameter input from the client
route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754'
req.params: {userId: '546', bookId: '6754'}

// get query parameter input from the client
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}

route: POST '/library'
urlendcoded_body: userId=546&bookId=6754
req.body: {userId: '546', bookId: '6754'}

POST (sometimes PUT) - Create a new resource using the information sent with the request,
GET - Read an existing resource without modifying it,
PUT or PATCH (sometimes POST) - Update a resource using the data sent,
DELETE - Delete a resource

payload - the data into the request body


app.route(path).get(handler).post(handler)

Use body-parser to Parse POST Requests:
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20
name=John+Doe&age=25

app.use(require('body-parse').urlencoded({extended: false}));

// handle function events using the property
document.addEventListener('DOMContentLoaded', function() {});
// function events
document.getElementById('getMessage').onclick = function() {};
document.getElementsByClassName('message')[0].textContent = "";


const req = new XMLHttpRequest();
req.open('GET', '/json/cats.json', true);
req.send();
req.onload = function() {
	const json = JSON.parse(req.responseText);
	document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
}

const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 201) {
		const serverResponse = JSON.parse(xhr.response);
	}
}
xhr.send(body);

console.log("Hello World");
function(req, res) {
	res.send('Response String');
}

function(req, res) {
	res.sendFile(__dirname + 'relativePath/file.ext');
}

app.use(path, middlewareFunction)
app.use(path, express.static(__dirname + 'relativePath/file.ext');

function(req, res) {
	res.json({"message": "Hello Json"});
}

process.env.MESSAGE_STYLE = 'uppercase'

function(req, res, next) {
	console.log("I'm a middleware...");
	next();
}


fetch('/json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	});

[]: Square brackets reprerent an array
{}: Curly brackets represent an object
"": Double quotes represent a string. They are also used for key names in JSON



let html = "";
json.forEach(function(val) {
	const keys = Object.key(val);
	html += "<div class = 'cat'>";
	keys.forEach(function(key) {
		html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
	});
	html += "</div><br>";
});




mongoose.connect(<URI>, {useNewUrlParser: true, useUnifiedTopology: true});

const someFunc = function (done) {
	// do something
	if (error) return done(error);
	done(null, result);
};

person.save(function(err, data) {});

Model.create([{name: 'John', ...}, {...}, ...]);
Model.find()
Model.findOne()
Model.findById()
Model.findOneAndUpdate()
Model.findOneAndRemove()
Model.findByIdAndRemove()
Model.remove()

.find(), .sort(), .limit(), .select(), .exec(), .save()


module.exports = {};

'use strict'
require('dotenv').config();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.route('/').get((req, res) => {
	res.render(process.cwd() + '/views/pug/index');
});

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true,
	cookie: {secure: false}
}));

app.use(passport.initialize);
app.use(passport.session);


passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser((id, done) => {
	myDataBase.findOne({_id: new ObjectID(id)}, (err, doc) => {
		done(null, null);
	})
});













import mongoose from 'mongoose'
const { Schema } = mongoose;

const blogSchema = new Schema({
	title: String,
	author: String,
	body: String,
	comments: [{body: String, date: Date}],
	date: {type: Date, default: Date.now},
	hidden: Boolean,
	meta: {
		votes: Number,
		favs: Number
	}
});

const Blog = mongoose.model('Blog', blogSchema);









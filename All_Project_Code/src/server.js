var express = require('express'); //Ensure our express framework has been added
const bcrypt = require('bcrypt');
const saltRounds = 10;
var app = express();
var session = require('express-session');
var globalVariable={recipeLink:""};
var globalVariable={recipeInfoLink:""};
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(session({
	secret: 'keyboard cat', 
	cookie: { maxAge: 1800000 } //60000 = 1 min  120000 = 2 min 1800000 = 30 min (This I what I set it to)
}));

//Create Database Connection
var pgp = require('pg-promise')();

const dev_dbConfig = {
	host: 'db',
	port: 5432,
	database: 'instalist_DB',
	user: 'postgres',
	password: 'pwd'
};

const isProduction = process.env.NODE_ENV === 'production';
const dbConfig = isProduction ? process.env.DATABASE_URL : dev_dbConfig;

if (isProduction) {
	pgp.pg.defaults.ssl = {rejectUnauthorized: false};
}

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

//Help Tab
app.get('/help_tab', function(req, res) {

	if(req.session.loggedin){
		res.render('pages/help_tab',{
			my_title:"Help Tab"
		});
		}
		else{
			res.redirect('/login_page');
		}
});

app.get('/', function(req, res) {
	res.render('pages/login_page',{
		error:false
	});
});

//Contact Support
app.get('/contact_support', function(req, res) {

	if(req.session.loggedin){
		res.render('pages/contact_support',{
			my_title:"Contact Support"
		});
	
		}
		else{
			res.redirect('/login_page');
		}
});

//Feedback thanks
app.get('/feedbackThx', function(req, res) {

	if(req.session.loggedin){
		res.render('pages/feedbackThx',{
			my_title:"Feedback Thanks"
		});
		}
		else{
			res.redirect('/login_page');
		}
});

//Contact Support POST
app.post('/feedback', function(req, res) {
	console.log("Hi");
	var name = req.body.name;
	var email = req.body.email;
	var message=req.body.message;
	
	var insert_statement = `INSERT INTO contactUs(username,email,userMessage) VALUES('${name}','${email}', '${message}' );`
	
	db.task('get-everything', task => {
        return task.batch([
            task.any(insert_statement)
        ]);
    })
    .then(info => {
		console.log(info);
    	res.render('pages/feedbackThx',{ 
				my_title: "Thank you"

			})
    })
    .catch(err => {
            console.log('error', err);
            res.render('pages/contact_us', {
                my_title: 'Contact Us'

            })
    });
});
	

//FAQ
app.get('/faq', function(req, res) {

	if(req.session.loggedin){
		res.render('pages/faq',{
			my_title:"FAQ"
		});
		}
		else{
			res.redirect('/login_page');
		}
});

//Walkthrough
app.get('/walkthrough', function(req, res) {

	if(req.session.loggedin){
		res.render('pages/walkthrough',{
			my_title:"Guide"
		});
		}
		else{
			res.redirect('/login_page');
		}
});

//About Us
app.get('/about_us', function(req, res) {

	if(req.session.loggedin){
		res.render('pages/about_us',{
			my_title:"About Us"
		});
		}
		else{
			res.redirect('/login_page');
		}
});

//Grocery List
app.get('/grocery_list', function(req, res) {

	if(req.session.loggedin){
		res.render('pages/grocery_list',{
			my_title:"Grocery List",
			my_name: req.session.username
		});
		}
		else{
			res.redirect('/login_page');
		}
});

//Login
app.get('/login_page', function(req, res) {
	res.render('pages/login_page',{
		my_title:"Login",
		error: false
	});
});	

app.post('/auth', function (req, res) {
    console.log("Hi");
    var username = req.body.username;
    var password = req.body.password;

	var validation = `SELECT * FROM userDetails WHERE username = '${username}'  AND password = '${password}';`;


            db.task('get-everything', task => {
                return task.batch([
                    task.any(validation)
                ]);
            })
                .then(info => {
					if(info[0].length  == 1){
                    console.log(info);
					req.session.userid = info[0][0].userid;
                    req.session.loggedin = true; //cookie 
                    req.session.username = username; //cookie
					req.session.pfp = info[0][0].pfp;
                    res.redirect('/homepage');}
					else{
						res.render('pages/login_page',{
							my_title:"Login",
							error:true
						});
					}

                })
                .catch(err => {
                    console.log('error', err);
                    res.send('Incorrect Username and/or Password')
                });


});

//Sign Up
app.get('/sign_up', function(req, res) {
	res.render('pages/sign_up',{
		my_title:"Sign Up"
	});
});

app.post('/sign_up', function(req,res){
	var pic = req.body.pfp
	console.log(pic);
	if(pic.length == 0){
		pic = "KermitPfp.png";
	}
	var myPlaintextPassword = req.body.password;
	bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
		//GET RID OF THE PLAINTEXTPASSWORD IN INSERT WITH HASH
	var adding = `INSERT INTO userDetails (username,password,pfp) VALUES('${req.body.name}', '${myPlaintextPassword}', '${pic}') RETURNING userID`
	db.one(adding).then(primary_key => {
        // count = a proper integer value, rather than an object with a string
		console.log("Primary key");
		console.log(primary_key.userid);
		res.render('pages/dietary_res',{
			my_title:"dietary_res",
			user_id: primary_key.userid,
			error:false
		});
    })
	.catch(err => {
        console.log('error', err);
        res.send('Username already exists')
		res.render('pages/sign_up', {
			my_title:"Sign Up",
			error:true
			});
    });
	});

}) 

//Dietary Restrictions
app.get('/dietary_res', function(req, res) {
	if(req.session.loggedin){
		res.render('pages/dietary_res',{
			my_title:"Dietary Restrictions"
		});
		}
		else{
			res.redirect('/login_page');
		}
});

function formatArr(arr){
	var ret = "[ "
	var i = 0
	if(arr == null){
		ret = ret + "]";
	}
	else if(arr.length == 1){
		ret = ret + "'" + arr[0] + "' ]";
	}
	else{
		while(i < arr.length){
			if(i == 0){
				ret = ret + "'" + arr[i] + "' , ";
			}
			else if(i == arr.length -1){
				ret = ret + "'" + arr[i] + "' ]";
			}
			else{
				ret = ret + "'" + arr[i] + "' , ";
			}
			i = i + 1;
		}
	}
	return(ret);
}

app.post('/dietary_res', function(req, res) {
	var user = req.body.userid;
	console.log(user);
	var dr = req.body.Dietary_Restrictions;
	if(typeof(dr) == 'string'){
		dr = [dr]
	}
	if(dr != null){
		var adding = `UPDATE userDetails SET allergy = ARRAY`+formatArr(dr)+` WHERE userID = `+user +' RETURNING username;';
		db.task('get-everything', task => {
			return task.batch([
				task.one(adding)
			]);
		})
		.then(info => {
			console.log(info);
			res.redirect('/login_page');
		})
		.catch(err => {
			console.log('error', err);
			res.send('Error occured while adding dietary restrictions');
		});
	}
	else{
		res.redirect('/login_page')
	}

})

//Profile
app.get('/profile', function(req, res) {
	if(req.session.loggedin){
		var username = req.session.username;
		var allergies = []
		var diet = `select allergy from userDetails WHERE username = '${username}';`
		db.task('get-everything', task => {
			return task.batch([
			    task.any(diet)
			]);
		})
		.then(info =>{
			allergies = info[0][0].allergy
			res.render('pages/profile',{
				my_title:"Profile",
				my_name: req.session.username,
				my_pfp: req.session.pfp,
				allergy: allergies
		});
		});
	}
	else{
		res.redirect('/login_page');
	}
});

//Edit Profile
app.get('/edit_profile', function(req, res) {
	if(req.session.loggedin){
		res.render('pages/edit_profile',{
			my_title:"Edit Profile",
			my_pfp: req.session.pfp,
			my_name: req.session.username,
		});
		}
		else{
			res.redirect('/login_page');
		}
});

//Recipe List
app.get('/recipe_list', function(req, res) {

	var listUserId = req.session.userid;

	var grab = `SELECT * FROM recipe WHERE recipeuserid = '${listUserId}';`;
	
	if(req.session.loggedin){
		db.task('get-everything', task => {
			return task.batch([
			    task.any(grab)
			]);
		})
		.then(info =>{
			console.log(info)
			res.render('pages/recipe_list',{
				my_title:"Recipe List",
				recipes: info[0]
			});
		})
	}
		else{
			res.redirect('/login_page');
		}
	
});

//Homepage
app.get('/homepage', function(req, res) {

	if(req.session.loggedin){
		res.render('pages/homepage',{
			my_title:"Homepage"
		});
		}
		else{
			res.redirect('/login_page');
		}
});

//Recipe Info
app.get('/recipeinfo', function(req, res) {
	if(req.session.loggedin){
		res.render('pages/recipeinfo',{
			my_title:"Recipe Info"
		});
		}
		else{
			res.redirect('/login_page');
		}

});

//logout

app.get('/logout', function(req, res){
	req.session.userid = null;
	req.session.loggedin = false; //cookie 
	req.session.username = null; //cookie
	req.session.pfp = null;
	res.redirect('/login_page')
});

//Homepage to Recipe Info
app.post('/recipeinfo', function(req, res){
	
	console.log(req.body.href);
	res.render('pages/recipeinfo', {
		my_title:"Recipe Info",
		recipeLink: req.body.href,
		error:false
	});	
});

//recipeinfo to recipelist
app.post('/recipe_list', function(req, res){

	console.log(req.session);
	var name = req.body.name;
	var link = req.body.href;
	var userList = req.session.userid;
	
	var adding = `INSERT INTO recipe (recipeName,recipeLink, recipeUserId) VALUES('${name}', '${link}', '${userList}') RETURNING recipeId`

	console.log(adding)

		db.task('get-everything', task => {
			return task.batch([
				task.any(adding)
			]);
		})
		.then(info =>{
			console.log(info)
		});
});

//Remove a recipe from the database
app.post('/reciperemove', function(req,res){

	var user = req.session.userid;
	var id = req.body.idref;
	console.log("HERE");
	console.log(id);
	console.log(req.body.idref);
	console.log("HERE");
	console.log(user);

	var removing = (`DELETE FROM recipe WHERE recipelink = '${id}' AND recipeuserid = '${user}'`);

	console.log(removing);

	if(req.session.loggedin){
		db.task('get-everything', task => {
			return task.batch([
				task.any(removing)
			]);
		})
		.then(info =>{
			res.redirect('/recipe_list')
		})
		.catch(err => {
			console.log('error', err);
			res.send('Did not remove from database');
		});
		}
		else{
			res.redirect('/login_page');
		}
});

app.listen(3000);
console.log('Your docker is running.');
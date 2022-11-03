
let color = 'red';
var Color = 'Blue';
const PI = 3.342
console.log(color);
console.log(Color);
console.log(PI);

// constraints in declaration
let country = 'Nigeria';
// let country = 'Liberia' error cos you cant redeclare
// country = 'Liberia' (reassigned)
country = 'Mali';
console.log(country);

var gender = 'male';
var gender = 'female';
console.log(gender);


// constants- you cant declr/assign 
const GRAVITY = 10
console.log(GRAVITY);

// constraint in variable naming(no spacing btw variable name, but $ _ are allowed)

// string length
let first_name = 'RILWAN';
let last_Name = 'Ovie'; 
console.log(last_Name.length);
console.log(last_Name.length + first_name.length);
let FullName2 = first_name +" " + last_Name;
console.log(FullName2);



// Stringindex
let fullName = 'chiamaka';
console.log(fullName[2]);
let result = fullName.length
console.log(result);
let fullNameSlice = fullName.slice(0, 4);
console.log(fullNameSlice);



// String methods
// upper case
let surname = 'blard';
let finalSurname = surname.toUpperCase()
console.log(finalSurname);

// tolowercase()
let name = 'VIOLET';
console.log(color.toLowerCase());


// indexof()
let email = 'techstudio@outlook.com'
console.log(email.indexOf('@'));
let sliceEmail = email.slice(0,4)
console.log(sliceEmail);//tech
let slicegmail = email.slice(14,18)
console.log(slicegmail);//look

//replace()
let replace_email = email.replace('d', 'l');
console.log(replace_email);


//Class Work 1
let Continent = 'Africa';
console.log(Continent);
let Country = 'Nigeria';
console.log(Country);

let State = 'Lagos';
console.log(State);

//Class Work 2
let animal = 'hippopotamus'
let result_animal = animal.toUpperCase();
console.log(result_animal);

let mammal = 'HIPPOPOTAMU'
let finalcase = mammal.toLowerCase();
console.log(finalcase);
let hip = 'hippopotamus'
console.log(hip.indexOf('t'));
console.log(hip.lastIndexOf('o'));
let pot = hip.slice(5,8)
console.log(pot);
let replace = hip.replace('h', 'b')
console.log(replace);

//Joining (concatenation) variable with strings
let $firstName = 'techstudio';
let _lastName = '@gmail.com';

let $fullName = $firstName + _lastName;

console.log($fullName);
let _firstName = 'Ola';
let $lastName = 'Odogwu';
let nomenclature =_firstName + ' ' + $lastName
//Nb: we use '' space to space the two declaration
console.log(nomenclature);


//NUMBERS
let year = 2022;
let score = 100;
let score2 = 200;
console.log(year);
console.log(score);
console.log(score2);


//Math operators +,-,*,/,%
let final_score = score + score2
console.log(final_score);//300
let minus = score2 - score
console.log(minus);//100

let mult = score * score2
console.log(mult);//30000

let div = score2/score
console.log(div);//100

let index = 2 ** 5;//means 2 raised to power 5
console.log(index);//32

// let indices = num ** num;
// console.log(indices);

//modular
let mod = 5 % 2;
console.log(mod);

console.log(year + 1);
//Or use short hand 
year ++
console.log(year);

year--
console.log(year);

year += 3
console.log(year);
year -= 6
console.log(year);


//class work
let _continent = 'Africa';
let language = 'pidgin English';
let ghanaPopulation = 500;
let finlandPopulation = 800;
let _country = 'Nigeria'
let nigeriaPopulation = 1000;

console.log(_continent);
console.log(language);
console.log(ghanaPopulation);
console.log(_country);
console.log(finlandPopulation);
console.log(nigeriaPopulation);

let half_Nigeria = nigeriaPopulation/2;
console.log(half_Nigeria);
nigeriaPopulation ++
console.log(nigeriaPopulation);
console.log(nigeriaPopulation > finlandPopulation);
console.log(nigeriaPopulation > ghanaPopulation);

//concatenation (for it's will can use it\'s)
let description = _country + ' is in ' + _continent + " and it's "  + nigeriaPopulation + ' people speak ' + language
console.log(description);

//examlpe of concatrnation
let blog = 50;
let statement = 'the blog has ' + blog + ' like '
console.log(statement);

//Example of concatenation
let $score = 90;
let studentName = 'Nike ';
let school =' Aguda grammar school ';
let response = 'Hey stan did you know ' + studentName + 'attends' + school + 'and had ' + $score + ' in her test ';
console.log(response);


//template literals or string
//interpolation /use the backtis key
let responses = `Hey Silva did you know ${studentName} attends ${school} and had ${$score} in her test?` 
console.log(responses);

//Object
let friend1 ='ola';
let friend2 ='Gift';
let friend3 ='ablessing';
let friend4 ='Nike';

console.log(friend1);
console.log(friend2);
console.log(friend3);
console.log(friend4);

//Arrays
let myFriends = ['Stan', 'Femi', 'Rilwan', 'Ade']
console.log(myFriends);

myFriends[1] = 'Mark';
console.log(myFriends);

//Properties
console.log(myFriends[2]);//index property//it'l return 'Rilwan'
console.log(myFriends.length);

//Array Method
let includ = myFriends.includes('Ade');//it's like boolean property to validate array elements
console.log(includ);//True since 'Ade' is an element of the array called(myFriend)

let join = myFriends.join('+');//To join elements in an array, you can use any symbol
console.log(join);

let indexOf = myFriends.indexOf('Ade');//indeOf is for position of element in an array
console.log(indexOf);//3

let concat2 = myFriends.concat(['Akin', 'Kudus'])
console.log(concat2);//Akin and Kudus will be added to the myFriends array.

//push used to add to an element to the end of an  existing array
let push = myFriends.push('Silva')
console.log(myFriends);
//pop used to remove element from an existing array
let pop = myFriends.pop();
console.log(myFriends);

//Class work
let trainee = ['Temilolu', 'Ola', 'Nike', 'Blessing', 'Kudus', 'Gift', 'Gbolahon', 'Blard', 'Hilaray', 'Akin', 'Silva', 'Femi', 'Stanley', 'Ade', 'Ridwan' ]
console.log(trainee);

let addpush = trainee.push('Amos', 'Mike');//To add to the end of an array
console.log(trainee);

let popMike = trainee.pop();//To remove last element from an array
console.log(trainee);

//To add an element at the beginning of an array
let startPush = trainee.unshift('Zack', 'Bobby');
console.log(trainee);

//typeOf
let add = 1000;
console.log(typeof add);//number

let food = 'Hamburger';
console.log(typeof food);//string

let town;
console.log(typeof town);//undefine

let sth = null;
console.log(typeof sth);//object

//Spread Operator
let foods = ['starch', 'banga', 'eba', 'egusi']
let newFoods = ['rice', 'beans', ...foods]
// console.log(foods);
console.log(newFoods);//union of food & newFoods

let colors = ['pink', 'green', 'blue', 'red', 'white', 'grey']
console.log(colors);

//array destructure uses ...
// let [a,b,c] = colors;
let [a, b, c, ...rest] = colors;
console.log(a, b, c, ...rest);
console.log(a);//pink
console.log(rest);// red, white ,grey
console.log(colors[2]);//blue


//Data conversion and coercion
//conversion
let imputYear = '1991';
console.log(imputYear);
console.log(typeof imputYear);
console.log(imputYear + 18);
console.log(Number(imputYear) + 18);


//Some funny conversions example
console.log('Eggy');
console.log(Number('Eggy')); //NaN

let Score = 100;
let answer = Score + 10;
console.log(answer);

console.log(String(23));
console.log(String(23), 23);

//coercion
console.log('I am '+ 23 + ' years old'); //coerced by Js
console.log('I am '+ String(23) + ' years old'); //the right way


console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' + '10' - 3);
console.log('23' ** '2');
console.log('23' > '2');

console.log('23' + 'year' + 3);


let Z = '1' + 1;
let z = Z - 1;
console.log(z);

console.log(2+3+4+ '5');
console.log('10'-'4'-'3'-2+'5');

//Comparison Operators
//>,<,==,===,!=,!==,<=,>=
let Year1 = 2023;
console.log(Year1 > 2001);//True
console.log(Year1 < 2001);//False
console.log(Year1 >= 2001);//True
console.log(Year1 <= 2001);//False
console.log(Year1 != 2001); //True


// loose comparison operator ==

let score_ = '100';
let score_2 = score_ == 100;
let score_3 = score_ != 100;
console.log(score_2); //true
console.log(score_3);//False cos of ==(loose comparison operator, it does not care abt data type, provided value are the same)



//strict comparison oparator (it cares abt data type and value)
let score222 = score_ === 100;
let score333 = score_ !== 100;
console.log(score222);//false
console.log(score333);//true

let set = ['1', '2','3','4','5','6','7','8','9','10']
console.log(set);



// Loops or iteration
// for - loop//

for(let i = 0; i < i.length; i++) {
    console.log(i);} //initializer,condition,final expression


//Iteration Manually
// console.log('lifting weight repeatition 1 🤸‍♂️');
// console.log('lifting weight repeatition 2 🤸‍♂️');
// console.log('lifting weight repeatition 2 🤸‍♂️');
// console.log('lifting weight repeatition 2 🤸‍♂️');
// console.log('lifting weight repeatition 3 🤸‍♂️');
// console.log('lifting weight repeatition 4 🤸‍♂️');
// console.log('lifting weight repeatition 5 🤸‍♂️');
// console.log('lifting weight repeatition 6 🤸‍♂️');
// console.log('lifting weight repeatition 7 🤸‍♂️');
// console.log('lifting weight repeatition 8 🤸‍♂️');
// console.log('lifting weight repeatition 9 🤸‍♂️');
// console.log('lifting weight repeatition 10 🤸‍♂️');


//Using iteration
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Eggy lifts weight ${rep} 🤸‍♂️`);
}

let guys = ['Hilary', 'Blessing', 'Ade', 'Femi']

for (let i = 0; i < guys.length; i++) {
    console.log(guys[i]);
}//

//while loop//  initializer, while, final expresion++'
let babes = ['fatima', 'joy','chioma','esther']
let i= 0

while (i < babes.length) {
    console.log(babes[i].toUpperCase())
i++}

let Colors = ['blue','pink','black','red']

for (let i = 0; i < Colors.length;i++) {
    console.log(Colors[i].toLocaleUpperCase());
}

//just playing with HO array methods
//Using forEach()
Colors.forEach((i) => console.log(i));
//Using filter
const filterSth = Colors.filter((i) => {
    return (i.length > 3)
});
console.log(filterSth);

//conditional statements
//Control-of-Flow
//if/else
let AGE = 50

if (AGE === 35) {
    console.log('Baba you don old');
} else{
    console.log('Oga d info is incorrect');
}

// let password = prompt('type a password')
// alert('your password length is ' + password.length)
// console.log(password.length);

let SCORE = 30

if(SCORE >= 30){
    console.log('you are over 29 years old');
}

let PASSWORD = 'password'
if(PASSWORD.length >= 12){
    console.log('very strong password');
}else if(PASSWORD >= 8){
    console.log('password is good');
}else{
    console.log('password is poor');
}

//Logical Operators
// || means or
// && means and

//For &&
// TT = T
// TF = F
// FT = F
// FF = T

//For ||
// T||T = T
// T||F = T
// F||T = T
// F||F = F


//example with logic operators
console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false

console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//true

// let _Password = 'password1234#';
// if(_Password.length >= 12 && _Password.includes('@')){
//     console.log('Strong password');
// }else if(_Password.length >= 8 && _Password.includes('#')){
// console.log('Password maderately strong');
// }

//extra
console.log(!true);//false
console.log(!false);//true


// Assignment
// const n = prompt('Enter a number: ');
// if(n % 2 !== 0) {console.log('The number is odd');}
// else{console.log('The number is even');}

// Using Ternary Operator
// const N = prompt('Enter a number:');
// const Result = (N % 2 !== 0) ? 'odd' : 'even'
// console.log(`The number is ${Result}.`);

//other examples
// const $AGE = 50;
// console.log(($AGE >= 50) ? 'you are old': 'you are still in town');


//Switch statement
let _RESULT = [20, 40, 0, 50, 100,15, 10];
for (let i = 0; i < _RESULT.length; i++) {
//   If we wanna remove 0 from the array
if(_RESULT[i] === 0) {
    continue
}
console.log(`your score is: `, _RESULT[i]);
}


let GRADE = 'C'
if(GRADE === 'A'){
    console.log('you got A');
}
    else if(GRADE === 'B'){
        console.log('you got B');
    }
    else if(GRADE === 'C'){
        console.log('you got C');
    }
    else if(GRADE === 'D'){
        console.log('you got D');
    }
    else {console.log('you failed');
}

// switch statements

let points = 'A'

switch (points) {
    case 'A':
        console.log('you got A');

    case 'B':
        console.log('you got B');

    case 'C':
        console.log('you got C');

    case 'D':
        console.log('you got D');
    break

    default:

        console.log('you failed');
        
        break;
    }


//Global and local or Block Scope
let $Age = 100;
if($Age){
let $Age = 40
    console.log(`Inside 1st block of code: `, $Age);

    if (true) {
        let $Age = 300
        console.log(`inside 2nd block of code: `, $Age);
    }
}
console.log(`Outside block of code: `, $Age);





//Function  //Function  //Function


// Function Declaration
function greet(person='guy'){
console.log(`How far ${person}`);
}
greet("gee")//passing parameter to the function
greet()//no para, hence it takes the default parameter
greet()//no para
greet()//no para


//Expression
let speaker = function(person='person'){
    console.log("My " + person);
}
speaker()
speaker('bro')
speaker('sister')
speaker('babe')


//Arrow FUNCTION
let salute = (someText)=>{
    console.log('Na we dey here ' + someText);
}
//Calling the "salute" function
salute('dey run things')
salute('dey run things')
salute('dey run things')

let explain = (number)=>{
    let apple = 10
    let statement = 'Akin was able to buy ' + apple + ' wrap of fufu ' + number 

    console.log(statement);
}
explain('yesterday')

let $description = ' on His way back from church';
explain($description)

let explanation = $description + ' this morning';
explain(explanation)


//Argument & Parameters
let speak = function(name, time){
    console.log(`Good ${time} ${name}`);
}
speak('Blard', 'morning') //Good morning Blard
speak('Blard', 'afternoon') //Good afternoon Blard
speak('Blard', 'evening') //Good evening Blard
speak('Blard', 'night') //Good night Blard


//Assignment 1
let Avr_spartan = (60 + 70 + 80)/3;
console.log(Avr_spartan);
let Avr_alpha = (88 + 91 +120)/3;
console.log(Avr_alpha);

let _finalResult = (Avr_spartan > Avr_alpha) ? 'Spartan WINS' : 'Alpha WINS';
console.log(_finalResult);


//Assignment 2
let purchasePrice = 10;
let sellingPrice = 15;

let percentProfit = [(sellingPrice - purchasePrice)/purchasePrice]*100;
console.log(percentProfit + '%');


//Wednesday 20th April
let $trainee = ['Ola', 'Stan', 'Blessing', 'Ade'];
let fee = [60,800,0,120] 

function calculate(Array) {
  for(let i = 0; i < Array.length; i++){  
if(Array[i] === 0){
    continue
}
    console.log(Array[i]);
}

}
calculate($trainee)



//HIGHER ORDER FUNCTION & Call back 
//Higher order function that accepts other functions as an argument
//call back are function that are passed to another function as an argument and executed inside that function.


let classs = function () {
    return 'Hi'
}

let Higher = (name, thus) =>{
    let myName = 'Hilary';
    return`${thus()} ${myName} my name is ${name}`
}
let final = Higher('Eggy', classs)
console.log(final);


//Class work
let Alpha = (43, 21, 73)
let Spartan = (63, 55, 47)
let calcAverage = (one, two, three) =>{
return(one+two+three)/3
}
// console.log(calcAverage (43, 21, 73));

let aveAlpha = calcAverage (43, 21, 73);
console.log(aveAlpha);

let aveSpartan = calcAverage (63, 55, 47);
console.log(aveSpartan);



if (aveAlpha >= 2 * aveSpartan) {
    console.log(`Alpha team wins (${aveAlpha} vs ${aveSpartan})` );
}else{
    console.log(`Spartan team wins (${aveSpartan} vs ${aveAlpha})`);
}

//using Tenary operator
const winner = (aveAlpha >= 2 * aveSpartan) ? `Alpa team wins   (${aveAlpha} by ${aveSpartan})` : `Spartan team wins (${aveSpartan} by ${aveAlpha})`;
console.log(winner);


//To calculate tax

let calcTax = (salary)=> {

    return(salary*0.1)
}
let Tax_1 = calcTax(5000);
console.log(Tax_1);

let Tax_2 = calcTax(140000);
console.log(`Your Tax payable is $${Tax_2}`);

//To Calculate simple intrest
let PRT =(p,r,t)=> {
return(p*r*t)/100
}
let simpleIntrest = PRT(70000,7.5,3)
console.log(`simple intrest is ${simpleIntrest}` );

//To calculate compound intrest
// p = principal
// r = rate
// t = time
// n = number of time intrest per period

let = _Parameter = (p,r,t,n)=>{
    return (p*(1+r/n)**(n*t)) - p;
}
let compoundInt = _Parameter(50000,5,.05,1);//p=50000;r=5%(0.05);t=5;n=1
console.log(compoundInt);

//Thursday 21st April
//Objects----object literal(foreach,map,filter)
//DOM(Document Object model)

//Example of object literal
let client_user = {
    firstName: 'Tolu',
    lastName: 'William',
    Age: '25',
    hasDriverslicense:false, 
    favFood:['Beans', 'Amala', 'Rice', 'Yam']
}
let client_user2 = {
    country: 'Nigeria',
    state: 'Lagos'
}

let all_clients = {...client_user, ...client_user2}//To merge and list use dot dot dot
console.log(all_clients);



//dot vs bracket
console.log(client_user.Age);//25
console.log(client_user.favFood);//Beans...
console.log(client_user.hasDriverslicense);//false
console.log(client_user.firstName);//Tolu
console.log(client_user.lastName);//William

//To replace 'Tolu
client_user.firstName = 'Gbolahan'
console.log(client_user.firstName);//Gbolahan

//To delete
//delete client_user.firstName
delete client_user.lastName;
console.log(client_user.lastName);//undefine because the property last name has no value again //william has been deleted.

//Now let's add new value to lastName property
client_user.lastName = "Okeke";
console.log(client_user.lastName);//Okeke

//To delete from the array
console.log(client_user.favFood.pop());

//To LowwerCase
console.log(client_user.firstName.toLocaleUpperCase());


//Bracket
console.log(client_user['firstName']);
console.log(client_user['Age']);
console.log(client_user['favFood']);


//Object destructuring
const person ={
    name: 'Nike',
    age: 40,
    address:{
    city:'surulere',
    state: 'Lagos'
    }
}

console.log(person.name);//Nike
console.log(person.age);//40
console.log(person.address.state);//Lagos
console.log(person.address.city);//Surulere

let customer = {
    First_Name: 'Ola',
    Last_Name: 'Okoronkwo',
    year: 2022,
    calcBirthday: function(){
        return this.year - 1991
        
    },

statement: function(){
    return `${this.First_Name} is ${this.calcBirthday()} years old`
},

    hasData:true,
    currentDay: Date(),
    $friends:['Gift', 'Silva', 'Tolu', 'Star']
}

console.log(customer.statement());

console.log(`${customer.$friends[2]} and ${customer.Last_Name} have been friends since ${customer.year} `);

//console.log(this);outside object will display window commands but within the object, it's used to make reference to an object

//Classwork
let All_Object = {
    Gb_weight: 76,
    Gb_height: 1.99,
    Bl_weight: 80,
    Bl_height: 2.1,   
  calc_GBBMI: function () {
    return this.Gb_weight / this.Gb_height;
  },

  calc_BLBMI: function () {
    return this.Bl_weight / this.Bl_height;
  },
};  
console.log(All_Object.calc_GBBMI());
console.log(All_Object.calc_BLBMI());

let result_BMI =
  (All_Object.calc_GBBMI() > All_Object.calc_BLBMI)
    ? `Gbolahan's BMI (${All_Object.calc_GBBMI()}) is greater`
    : `Blessing's BMI (${All_Object.calc_BLBMI()}) is greater`;
console.log(result_BMI);



//Higher order functions(foreach,map,filter)//
let PEOPLE = [
    
    {
        name: 'Blessing',
        age: 30,
        position: 'Banker'
    },

    {
        name: 'Silva',
        age: 40,
        position: 'Web developer'
    },

    {
        name: 'Akin',
        age: 50,
        position: 'Product Manager'
    },

    {
        name: 'B-Lard',
        age: 60,
        position: 'Mobile App Developer'
    }
]
  
  //Using for loop//
  for(let i = 0; i < PEOPLE.length; i++){
      console.log(PEOPLE[i]);
  }

  //forEach loop// HO
  //It doesnt return a new array
  PEOPLE.forEach((person)=>{
      console.log(person);
  })

  //map//HO
  //it returns a new array
  //Doesnt change the size of the original array
  //Uses values from the original array
let other_people = PEOPLE.map((i)=>{
    return i
})
console.log(other_people);



// Filter
// it returns a new Array

let yungBlood = PEOPLE.filter((z)=>{
    return z.age > 30;
})

console.log(yungBlood);//it will return blessing and other properties

let arr = [11,22,33,44,55]

let mapArr = arr.map((item,index,array)=>{
console.log(item);
console.log(index);
console.log(array);
})


//MY WORK
function display(){
    document.getElementById('Demo').innerHTML = ('Register  <a href="http://">here</a> to have access to our unlimited resource');
}
function content(){
    document.getElementById('Demo').innerHTML = ("JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices");
}


function hover(){
    document.getElementById('JavaScript').innerHTML = ('Click To Start ');
}
function goodbye(){
    document.getElementById('JavaScript').innerHTML = ('Welcome to Blard JS Tutorials');
}


function closeMe(){
    sth = document.getElementById('Dem');
    sth.style.display = "none";
}

function openMe(){
    sth = document.getElementById('Dem');
    sth.style.display = "block";
}
function Dragg(){
    document.getElementById('Lag').innerHTML = ('EKO ISALE');
}
function click_img(){
    document.getElementById('Lag').innerHTML = ('LASGIDI LOMO');

}

//Photo Gallery
function showPreview(display){
    document.getElementById('Idk').innerHTML = display.alt; ;
}

function upDate(){
    document.getElementById("preview").style.backgroundImage = "url('/Users/macbookpro/Desktop/JAVA SCRIPT/images/blard_logo.jpg')";

    document.getElementById("preview").style.backgroundSize = "300px";
}

function upDate2(){
    document.getElementById("preview").style.backgroundImage = "url('/Users/macbookpro/Desktop/JAVA SCRIPT/images/IMG_0349.jpg')"
}

function upDate3(){
    document.getElementById("preview").style.backgroundImage = "url('/Users/macbookpro/Desktop/JAVA SCRIPT/images/profile_3.jpg')"
}

function return_preview(){
    document.getElementById("preview").style.backgroundImage = "url('../FRONTEND/image-equilibrium.jpg')"
}







// Assignment

//Dami wants to build a simple tip calculator for anything he goes to eat in a restaurant. In his country it's usual to tip 15% if the bill value is between 50 to 300. If the value is different the is 20%. 

//1) your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this.. use ternary operator only😉

//2) print a string to the console containing the bill value , the tip and the final value (bill + tip).
//Example the bill was 5 the tip was 2.2 and the total value 8.8.
//TEST DATA

//Test for bill values, 275,40,430
//Expo

//To calculate 80% of a value, just multiply it by 20/100 = 0.8

//Expo2
//Value x is between 50 and 300, if it's >= 50 && <=300✌️✌️

//SOLUTION (1)
// const bill = prompt('Enter your bill');
// const tipA = (bill*0.15);
// const tipB = (bill*0.2);
// const calcBill_1 =(Number(bill) + Number(tipA))
// const calcBill_2 = ((Number(bill) + Number(tipB)))
//using ternary operator
// const finalBill = (bill>=50 && bill<=300)?
// console.log(`Bill: $${bill}, Tip: $${tipA}, Final bill: $${calcBill_1}`) : 

// console.log(`Bill: $${bill}, Tip: $${tipB}, Final bill: $${calcBill_2}`) 

//Correction
const BILL = 430;
const TIP = BILL <= 300 && BILL >= 50 ? BILL*0.15 : BILL*0.2

console.log(`Bill was $${BILL}, Tip was`)


//Exercise 2

const companies = [
  {
    id: 1,
    name: "company One",
    category: "Finance",
    start: 1981,
    end: 2003,
  },
  {
    id: 2,
    name: "company Two",
    category: "Retail",
    start: 1992,
    end: 2008,
  },
  {
    id: 3,
    name: "company Three",
    category: "Auto",
    start: 1999,
    end: 2007,
  },
  {
    id: 4,
    name: "company Four",
    category: "Retail",
    start: 1989,
    end: 2010,
  },
  {
    id: 5,
    name: "company Five",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  {
    id: 6,
    name: "company Six",
    category: "Finance",
    start: 1987,
    end: 2010,
  },
  {
    id: 7,
    name: "company Seven",
    category: "Auto",
    start: 1986,
    end: 1996,
  },
  {
    id: 8,
    name: "company Eight",
    category: "technology",
    start: 1981,
    end: 1989,
  },
];
//1)log to the console the name of the companies only 
//2)log to the console companies that lasted 10 years or more
//Solution
//#1
console.log(companies.length);

//#2 using #filter and mapping together
let tenYearCom = companies
    .filter((company) => {
        const someMat = company.end - company.start;
        if (someMat >= 10) {
          return company.id  ;
        } ; 
        
    }).map((seletName) => {
      
        return seletName.name;
  });
console.log(tenYearCom);



//Exercise 3
const age = [30,15,10,5,40,80,2,20,21,25]

//1)log to your console again people with age greater or equal to 21.
//Solution
let overAge = age.filter((agg)=>{
    return agg >= 21;
})
console.log(overAge);

//To sort the ages 



let score1 = [60,-20,50,95,80,-5,70];
console.log(score1);
//To get the maximum number in the array
function max(array) {
    for (let i = 0; i < array.length - 1; i++){
        if (array[i] > array[i + 1]) {
            let swap = array[i];
            array[i] = array[i + 1];
            array[i + 1] = swap;
        }
    }
    let maxValue = array[array.length - 1];
    return maxValue       
}
let maxResult = max(score1);
console.log(`Maximum number is ${maxResult}`);// 95


//To get the minimum number in the array
function min (items) {
    let minIndex = 0;
    for (let j = 1; j < items.length; j++){
        if (items[minIndex] > items[j]){
            minIndex = j;
        }
    }
    return items[minIndex];
}

let minResult = min(score1);
console.log(`Minimum number is ${minResult}`);// 50

console.log(score1);

//To order array items
class BubbleSort{
    static sort(arrays) {
        for (let i = 0; i < arrays.length - 1; i++){
            for (let j = 0; j < arrays.length - i - 1; j++){
                if (arrays[j] > arrays[j + 1]) {
                    let swap = arrays[j];
                    arrays[j] = arrays[j + 1];
                    arrays[j + 1] = swap;
                }
            }
        }
    }
}

BubbleSort.sort(score1);

for (let i = 0; i < score1.length; i++){
    console.log(score1[i] + " ");
}





let finalBubbleSort = score1.sort((a, b) => {
    return a - b;//Ascending order
})
console.log(finalBubbleSort);

// TO REVERSE AN ARRAY
let finalBubbleSort2 = score1.sort((a, b) => {
  return b - a; //Descending order
});
console.log(finalBubbleSort2);

// JS DSA Task 
// Reverve the order of an array item without using "sort()" method

myArr = [50, 30,70, 84,10];// Before
console.log(myArr);
function myRevArr (myArr) {
    let length = myArr.length;
    let middle = length / 2;
    for (let i = 0; i <= middle; i++){
        let swap = myArr[i];
        myArr[i] = myArr[length - i - 1];
        myArr[length - i - 1] = swap;
    }
    
   
    for (let i = 0; i < myArr.length; i++) {
        
        console.log(myArr[i] + ",");
    }
}

myRevArr(myArr) // 10, 84, 70, 30, 50
console.log(myArr);// After => [10, 84, 70, 30, 50]

//Alternatively
const myRevArr2 = myArr.reverse()
console.log(myRevArr2); //myArr has been reversed again
console.log(myArr);


//Monday 25th April 2022
//Math Object
//It's a built in function in JS
let floor = 4.966666
let RESULT = Math.floor(floor)
console.log(RESULT);

//#ceil
let ceil = 4.5000
let _ceil = Math.ceil(ceil)

console.log(_ceil);

//Round
let Num = 2.50000000;
let _Num = Math.round(Num)
console.log(_Num);

// Pow
let reg = Math.pow(2,5);
console.log(reg);

//Random
let randomNumber = Math.random()
console.log(randomNumber);

let randomNumber2 = Math.random() * 7
console.log(randomNumber2);

let randomNumber3 = Math.floor(Math.random() * 6)+1
console.log(randomNumber3);//1,2,3,4,5,6 for die games
//Dates
const DATE = new Date();
console.log(DATE);

const MONTH = DATE.getMonth()
console.log(MONTH);


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const DAYS = [
    'Sunday',
    'Monday',
    'tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'

];

const _date = new Date();
const month = _date.getMonth()
console.log(months[month]);

const day = _date.getDay();
console.log(DAYS[day]);

const STATEMENT = `${DAYS[day]}, ${_date.getDate()} ${months[month]} ${_date.getFullYear()}`

console.log(STATEMENT);

//Setting timeout/timecount
function TT(){
    console.log(Date());
}
TT()








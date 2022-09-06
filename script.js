const   qst=[

{Question:'What is Java Script :',
 a: 'Programming Language',
 b:'Script Language',
 c:'Both',
 d:'other Thing',
 correct: 'Programming Language'

},
{
Question :"What is HTML Stand for :",
a: "Hyper Text Modele Lnaguage",
b:"Home Text Modele Lnaguage",
c:"Hyper Text Markup Language",
d:"Hyper title  Markup Language",
correct:"Hyper Text Markup Language"

},
{
Question :"What is the closet planet to the earth",
a:"Mercury",
b:"Mars",
c:"Uranus",
d:"Neptune",
correct:"Mercury"

},
{
Question :" Which African country was formerly known as Abyssinia?",
a:"Niger",
b:"Mali",
c:"Ethiopia ",
d:"Algeria",
correct:"Ethiopia "

},
{
Question :"According to Greek mythology, who was the first woman on earth?",
a:"Pandora",
b:"Meriem",
c:"Hawa",
d:"Sarah",
correct:"Pandora"

},
{
Question :"Which country consumes the most chocolate per capita?",
a:"France",
b:"USA",
c:"Switzerland",
d:"Spain",
correct:"Switzerland"

},
{
Question :"Which two U.S. states don’t observe Daylight Saving Time?",
a:"Arizona and Hawaii",
b:"Florida and virginia",
c:"Texas and Hawaii",
d:"California and Georgia",
correct:"Arizona and Hawaii"

},
{
Question :"Who was the first female Prime Minister of Great Britain?",
a:"Margaret Thatcher",
b:"Isabel Perón",
c:"Sirimavo Bandaranaike",
d:"Indira Gandhi",
correct:"Margaret Thatcher"

}
]

let loadQuestions=()=>{
// labels
const qu=document.getElementById('h');
const la =document.getElementById('boxa');
const lb =document.getElementById('boxb');
const lc =document.getElementById('boxc');
const ld =document.getElementById('boxd');
//pick a random number between 0 and 3
var i=Math.floor(Math.random() * (2 + 1));

//set the question in labels

qu.innerText=qst[i].Question;
la.innerText=qst[i].a;
lb.innerText=qst[i].b;
lc.innerText=qst[i].c;
ld.innerText=qst[i].d; 
return i;
}
var i=loadQuestions();

//test if the correct answer is checked
function testChecked(){
if (document.getElementById('ia').checked){
     var elea = document.getElementById('boxa');
     //içi je vais tester la avec qst[i]
     if(qst[i].correct==elea.innerHTML)
     {
alert(elea.innerHTML+" is correct");
i=loadQuestions();
    
}else
{
alert(elea.innerHTML+" is incorrect");
i=loadQuestions();
}

}
if (document.getElementById('ib').checked){
    var eleb = document.getElementById('boxb');
    //içi je vais tester la with qst[i]
    if(qst[i].correct==eleb.innerHTML)
    {
alert(eleb.innerHTML+" is correct");

i=loadQuestions();
}
else {
alert(eleb.innerHTML+" is incorrect");}
i=loadQuestions();
}
if (document.getElementById('ic').checked){
    var elec = document.getElementById('boxc');
    //içi je vais tester la with qst[i]
    if(qst[i].correct==elec.innerHTML)
    {
alert(elec.innerHTML+" is correct");

i=loadQuestions();

   
}else
{
alert(elec.innerHTML+" is incorrect");
i=loadQuestions();
}}

if (document.getElementById('id').checked){
    var eled = document.getElementById('boxd');
    //içi je vais tester la with qst[i]
    if(qst[i].correct==eled.innerHTML)
    {
alert(eled.innerHTML+" is correct");
i=loadQuestions();
   
}
else{
alert(eled.innerHTML+" is incorrect");
i=loadQuestions();
}}
}

const   qst=[

{Question:'What is Java Script :',
 a: 'Programming Language',
 b:'Script Languag',
 c:'Both',
 d:'other Thing',
 correct: 'a'

},
{
Question :"What is HTML Stand for :",
a: "Hyper Text Modele Lnaguage",
b:"Home Text Modele Lnaguage",
c:"Hyper Text Markup Language",
d:"Hyper title  Markup Language",
correct: 'c'

},
{
Question :"What is the closet planet to the earth",
a:"Mercury",
b:"Mars",
c:"Uranus",
d:"Neptune",
correct: 'a'

}
]


console.log(qst[0].Question);

const ad =document.getElementById('box');
console.log(ad)
ad.innerText="helloooooooooooo"

console.log(document.getElementById('box'))
var parentDOM = document.getElementsByClassName('checkmarka');
console.log(parentDOM.namedItem)
var testElements = document.getElementsByClassName('checkmarka');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'div';
});

console.log(testDivs)


/*

er.a=qst[0].a




/*42 SECOND */

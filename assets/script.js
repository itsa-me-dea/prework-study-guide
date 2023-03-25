//3.4.3

/*
function helloWorld() {
  console.log("It is I... SQUIRTLE! （＾∀＾●）ﾉｼ");
}
*/

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics() 

console.log('Which topic should we study first?');
selectTopic()

/*
var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
 console.log(shapes[x]);
}
*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
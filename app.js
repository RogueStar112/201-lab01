let q1_name = prompt("What's your name?");
let q2_color = prompt("What's your favourite colour?")
let q3_food = prompt("What's your favourite food?")
let q4_song = prompt("What's your favourite song?")

console.log(`Name: ${q1_name}. This is to give a personal experience.`);
console.log(`Favourite colour: ${q2_color}.` );
console.log(`Favourite food: ${q3_food}` );
console.log(`Favourite song: ${q4_song}`)

let reply = ``;

reply += `Hello ${q1_name}. I like the colour of ${q2_color} too! ${q3_food} sounds appetizing! This song '${q4_song}' is a bop!`;

alert(reply);


function renderHTML() {
  document.getElementById('q1_answer').innerHTML = `${q1_name}`;
  document.getElementById('q2_answer').innerHTML = `${q2_color}`;
  document.getElementById('q3_answer').innerHTML = `${q3_food}`;
  document.getElementById('q4_answer').innerHTML = `${q4_song}`;
}


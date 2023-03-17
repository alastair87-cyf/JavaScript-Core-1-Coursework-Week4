/* 
  You are given an array with a list of names.

  You should log only the peoples first names.

  For example, if the name is "John Smith" you should return "John"
*/

let names = [
  "Tamzin Lindsay",
  "Jessica Tate",
  "Tony Holcomb",
  "Shae Patton",
  "Arron Graham",
];

names[0] = names[0].split(" ")[0];
names[1] = names[1].split(" ")[0];
names[2] = names[2].split(" ")[0];
names[3] = names[3].split(" ")[0];
names[4] = names[4].split(" ")[0];

names.forEach((name) => {
  console.log(name);
});

/* EXPECTED OUTPUT 

  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"
  
*/

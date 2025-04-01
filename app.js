let profile = [
    "aidanvania", //username
    21, //age
    true, //isSubscribed
    "Missouri", //location
    ["Reading", "Hiking"] //hobbies
];

console.log(profile[0]);
console.log(profile[4][1]);

profile[0] = "aidanbeck";
profile[4][profile[4].length] = "Caving";
for (i of profile) { console.log(i) };
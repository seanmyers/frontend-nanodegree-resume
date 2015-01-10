var inputName = "AlbERt EINstEiN";
var names = inputName.split(" ");
names[1] = names[1].toUpperCase();
names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
finalName = names.join(" ");
console.log(finalName);



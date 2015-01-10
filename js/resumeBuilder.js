var bio  = {
  "name" : "Sean Myers",
  "role" : "Co-Founder NBT Solutions LLC",
  "contactInfo" : {
    "email" : "sean.myers@nbtsolutions.com",
    "twitter" : "@seandmyersd",
    "github" : "http://github.com/seanmyers",
    "phone" : "+1 716 359-3586",
  },
  "picture" : "images/sean.png",
  "welcomeMessage" : "I am an experienced geospatial engineer and developer",
  "skills" : ["Product Management", "GIS", "front end programming"]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contactInfo.github);
console.log(formattedTwitter);

$("#header").prepend(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPicture);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#header").append(HTMLskillsStart);
/* $("#header").append(formattedSkills);
*/
for (i = 0; i < bio.skills.length; i++) {
  var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
  console.log(formattedSkills);
  $("#skills").append(formattedSkills);
};

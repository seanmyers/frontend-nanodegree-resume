var bio  = {
  "name" : "Sean Myers",
  "role" : "Co-Founder NBT Solutions LLC",
  "contactInfo" : {
    "email" : "sean.myers@nbtsolutions.com",
    "twitter" : "@seandmyers",
    "github" : "http://github.com/seanmyers",
    "phone" : "+1 716 359-3586",
  },
  "picture" : "images/sean.png",
  "welcomeMessage" : "Experienced Geospatial Engineer and Developer",
  "skills" : ["Product Management", "Geographic Information Systems", "Front End Programming"]
}

var work = {};
  work.employer = "NBT Solutions";
  work.startdate = "January 2009";
  work.title = "Product C-Founder";
  work.years = 5;
  work.locaation = "Buffalo, NY";

var education = {};
  education["name"] = "University of New Hampshire";
  education["years"] = "1988 - 1992";
  education["city"] = "Durham, NH";

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contactInfo.github);

/* Format employment and education information */

var formattedStart = HTMLworkStart.replace("%data%",work.startdate);
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer);

var formattedSchool = HTML

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
  $("#skills").append(formattedSkills);
};

/* Add formattted employment and educaiton information */

$("#workExperience").prepend(formattedStart);
$("#workExperience").append(formattedEmployer);

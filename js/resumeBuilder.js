var bio  = {
  "name": "Sean Myers",
  "role": "Co-Founder NBT Solutions LLC",
  "contactInfo": {
    "email": "sean.myers@nbtsolutions.com",
    "twitter": "@seandmyers",
    "github": "http://github.com/seanmyers",
    "phone": "+1 716 359-3586"
  },
  "picture": "images/sean.png",
  "welcomeMessage": "Experienced Geospatial Engineer and Developer",
  "skills": ["Product Management", "Geographic Information Systems", "Front End Programming"]
}

var education = {
  "schools": [
    {
      "name": "College of Environmental Science and Forestry",
      "city": "Syracuse, NY",
      "degree": "B.S.",
      "majors": ["Environmental Science"],
      "dates": "1986",
      "url": "http://www.esf.edu/"
    },
    {
      "name": "University of New Hampshire",
      "city": "Durham, NH",
      "degree": "M.S.",
      "majors": "Environmental Administration and Management",
      "dates": "1992",
      "url": "http://www.unh.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity",
      "dates": "2015",
      "url": "http://www.udacity.com/nanodegree"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "NBT Solutions",
      "title": "Co-Founder",
      "dates": "January 2009 - Present",
      "description": "Co-Founder of a geospatial engineering and application
      development company. Currently NBT Solutions has 10 employees and offices
      in Buffalo, NY and Portland, ME."
    },
    {
      "employer": "CDM Smith",
      "title": "Geospatial Engineer",
      "dates": "April 2002 - January 2009",
      "description": "Resonsible for the design and implementation of municipal
      and utility GIS projects"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "VETRO FiberMap",
      "dates": "2015",
      "description": "SaaS application that supports the marketing, planning,
      and management of broadband networks",
      "images": [
        "https://s3.amazonaws.com/Myers/ProjectImages/DemandGen.png",
        "https://s3.amazonaws.com/Myers/ProjectImages/NetView.png"
      ]
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contactInfo.github);


$("#header").prepend(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPicture);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);


/* if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
};

for (i = 0; i < bio.skills.length; i++) {
  var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
  $("#skills").append(formattedSkills);
};

*/



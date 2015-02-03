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
      "description": "Co-Founder of a geospatial engineering and application development company. Currently NBT Solutions has 10 employees and offices in Buffalo, NY and Portland, ME."
    },
    {
      "employer": "CDM Smith",
      "title": "Geospatial Engineer",
      "dates": "April 2002 - January 2009",
      "description": "Resonsible for the design and implementation of municipal and utility GIS projects"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "VETRO FiberMap",
      "dates": "2015",
      "description": "SaaS application that supports the marketing, planning, and management of broadband networks",
      "images": [
        "https://s3.amazonaws.com/Myers/ProjectImages/DemandGen.png",
        "https://s3.amazonaws.com/Myers/ProjectImages/NetView.png"
      ]
    }
  ],
  display: function() {

    for (i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDate = HTMLworkDates.replace("%data%",projects.projects[i].dates);
      $(".project-entry:last").append(formattedDate);

      var formattedDescription = HTMLworkDescription.replace("%data%",projects.projects[i].description);
      $(".project-entry:last").append(formattedDescription);

    } /* end for loop */
  }
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contactInfo.github);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPicture);
$("#header").append(formattedMessage);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
};

for (i = 0; i < bio.skills.length; i++) {
  var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
  $("#skills").append(formattedSkills);
};


/* create a loop to input the jobs */

function displayWork() {

  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var combinedJob = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(combinedJob);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription =
    HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

  }; /* end for loop */
}; /* end function displayWork */

displayWork();

projects.display();

/* Button that initializes a script to capitalize the last name of a person's
 * full name */

function inName (name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

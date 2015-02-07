var bio  = {
  "name": "Sean Myers",
  "role": "Co-Founder NBT Solutions LLC",
  "contacts": {
    "email": "sean.myers@nbtsolutions.com",
    "twitter": "@seandmyers",
    "github": "http://github.com/seanmyers",
    "phone": "+1 716 359-3586",
    "location": "Buffalo, NY"
  },
  "biopic": "images/sean.png",
  "welcomeMessage": "Experienced Geospatial Engineer and Developer",
  "skills": ["Product Management", "Geographic Information Systems", "Front \
    End Programming"],

  display: function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedPicture = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

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
    } /* for loop */
  } /* function display */
} /* BIO OBJECT */

var education = {
  "schools": [
    {
      "name": "College of Environmental Science and Forestry",
      "location": "Syracuse, NY",
      "degree": "B.S.",
      "majors": ["Environmental Science"],
      "dates": "1986",
      "url": "http://www.esf.edu/"
    },
    {
      "name": "University of New Hampshire",
      "location": "Durham, NH",
      "degree": "M.S.",
      "majors": ["Environmental Administration and Management"],
      "dates": "1992",
      "url": "http://www.unh.edu"
    },
  ],
  "onlineCourses": [
     {
      "title": "Front-End Web Developer",
      "school": "Udacity",
      "dates": "2015",
      "url": "http://www.udacity.com/nanodegree"
    },
  ],

  display: function() {
    console.log(education.schools.length);
    for (i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);

      var formattedSchool = HTMLschoolName.replace("%data%",education.schools[i].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
      var formattedSchoolDegree = formattedSchool.replace("#",education.schools[i].url) + formattedDegree;
      $(".education-entry:last").append(formattedSchoolDegree);

      var formattedDate = HTMLschoolDates.replace("%data%",education.schools[i].dates);
      $(".education-entry:last").append(formattedDate);

      var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
      $(".education-entry:last").append(formattedLocation);

      for (j = 0; j < education.schools[i].majors.length; j++) {
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
        $(".education-entry:last").append(formattedMajor);
      }; /* for loop */
    }; /* for loop */

    $("#education").append(HTMLonlineClasses);

    for (i = 0; i < education.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("#",education.onlineCourses[i].url).replace("%data%",education.onlineCourses[i].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);

      var formattedOnlineSchool = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedOnlineSchool);

      var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
      $(".education-entry:last").append(formattedOnlineDate);

      var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
      $(".education-entry:last").append(formattedURL);

    } /* for loop */
  } /* display function */
} /* SCHOOL OBJECT */

var work = {
  "jobs": [
    {
      "employer": "NBT Solutions",
      "title": "Co-Founder",
      "dates": "January 2009 - Present",
      "description": "Co-Founder of a geospatial engineering and application development company. Currently NBT Solutions has 10 employees and offices in Buffalo, NY and Portland, ME.",
      "location": "Portland, ME"
    },
    {
      "employer": "CDM Smith",
      "title": "Geospatial Engineer",
      "dates": "April 2002 - January 2009",
      "description": "Resonsible for the design and implementation of municipal and utility GIS projects",
      "locaton": "Manchester, NY"
    }
  ],

  display: function () {
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

    } /* end for loop */
  } /* end function Display.Work */
} /* WORK OBJECT */


var projects = {
  "projects": [
    {
      "title": "VETRO FiberMap",
      "dates": "2015",
      "description": "SaaS application that supports the marketing, planning, and management of broadband networks",
      "images": [
        "https://s3.amazonaws.com/Myers/ProjectImages/DemandGen.png",
        "https://s3.amazonaws.com/Myers/ProjectImages/NetView.png"
      ],
    },
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

      for (j = 0; j < projects.projects[i].images.length; j++) {
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedImage);
      } /* end images for loop */
    } /* end projects for loop */
  } /* end display function */
} /* PROJECTS OBJECT */

/* DISPLAY THE RESUME INFORMATION */

bio.display();
education.display();
work.display();
projects.display();

/* add the map */
$("#mapDiv").append(googleMap);

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

/*
This is empty on purpose! Your code to build the resume will go here.
 */



// var newHTMLheaderName = HTMLheaderName.replace("%data%", "iti jain");
// $("#main").append(newHTMLheaderName);


var work = {
    "Jobs": [{
            title: "Mentor",
            dates: "15-12-2018 - 15-11-2019",
            location: "Noida",
            employer: "Coding Blocks"

        },
        {
            title: "Technology Analyst",
            dates: "1-02-2020 - present",
            location: "Mumbai",
            employer: "Morgan Stanley"
        }
    ]
};


var projects = {
    "project": [{
            "title": "travel and tours",
            "description": "djistraks project",
            "dates": "2nd sem"

        },

        {
            "title": "responsive resume",
            "description": "html css responsive",
            "dates": "6th sem"
        }
    ]
};

var bio = {
    "name": "Iti Jain",
    "role": "Technology Analyst",
    "contacts": {
        "mobile": "9530116805",
        "email": "itijain2497@gmail.com",
        "github": "https://github.com/jainiti",
        "twitter": "https://twitter.com/itijain17",
        "location": "Delhi"
    },
    "welcomeMessage": "Welcome onboard!",
    "skills": ["HTML5", "CSS3", "AngularJS", "JS", "NodeJS", "ExpressJS", "SASS", "Gulp/Grunt", "Handlebars"],
    "biopic": "https://static.scientificamerican.com/blogs/cache/file/CA198B89-ECAE-49FA-82EB4688CA54EBD1_source.jpg?w=590&h=800&28D4B36B-99A8-4B17-8E6A9C0E04277A20"
};


var education = {
    "schools": [{
            "name": "Alwar Public School",
            "location": "Alwar",
            "degree": "Senior Secondary Education",
            "majors": ["Maths", "Physics", "Chemistry", "English", "Computer Science"],
            "dates": "May 2015",
            "url": "http://www.alwarpublicschool.com/"
        },
        {
            "name": "Jaypee Institute of Information Technology",
            "location": "Noida",
            "degree": "B-Tech",
            "majors": ["Data Structures", "Machine Learning"],
            "dates": "July 2016 - May 2020",
            "url": "http://www.jiit.ac.in/",
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Developer",
            "school": "Udacity",
            "dates": "july 2019 - sept 2020",
            "url": "https://www.udacity.com/?utm_source=gsem_brand&utm_medium=ads&utm_campaign=920638031_c&utm_term=63844644623_in&utm_keyword=%2Budacity_b&gclid=Cj0KCQjw5MLrBRClARIsAPG0WGzQJFime_rWIkxtiCR_3Q3XRH0q0VCTUxQdtlW5tsrSJf_kBv5hYDoaAomGEALw_wcB"
        }


    ]

};




var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedBioRole);
var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedBioName);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedbiopic = HTMLbioPic.replace("%data", bio.biopic);
$("#header").append(formattedbiopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome)
$("#header").append(HTMLskillsStart);

bio.skills.forEach(function(skill) {
    skill = HTMLskills.replace("%data%", skill);
    $("#skills").append(skill);
});


$("#workExperience").append(HTMLworkStart);
for (job in work.Jobs) {

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.Jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.Jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry").append(formattedEmployer);
    $(".work-entry").append(formattedTitle);
    // console.log(formattedEmployer);
    // console.log(formattedTitle);
    var formattedDate = HTMLworkDates.replace("%data%", work.Jobs[job].dates);
    $(".work-entry").append(formattedDate);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.Jobs[job].location);
    $(".work-entry").append(formattedLocation);


}

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedgithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);




// function locationizer(work_obj) {
//     var locationarray = [];

//     for (job in work_obj.Jobs) {
//         var newLocation = work_obj.Jobs[job].location;
//         locationarray.push(newLocation);
//     }
//     return locationarray;
// }


// console.log(locationizer(work));

$("#mapDiv").append(googleMap);


function schoolDisplay(education) {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry").append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry").append(formattedSchoolMajor);
    }


}

schoolDisplay(education);




function projectDisplay(projects) {
    $("#projects").append(HTMLprojectStart);
    for (proj in projects.project) {

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
        // console.log(formattedTitle);
        $(".project-entry").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
        $(".project-entry").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
        $(".project-entry").append(formattedDescription);

    }
}

projectDisplay(projects);
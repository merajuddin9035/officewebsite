
function toggleForm() {
    var form = document.getElementById("signup-form");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function toggleForm1() {
    var form = document.getElementById("login-form");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
fetch('jobs-data.json')
  .then(response => response.json())
  .then(data => {
    // do something with the data
  });

  var xhr = new XMLHttpRequest();
xhr.open('GET', 'jobs-data.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    // do something with the data
  }
};
xhr.send();



const element = document.getElementById("element");
element.addEventListener("click", function() {
  // animate or toggle visibility of other elements
});

const text = document.getElementById("animated-text");
text.classList.add("show");

// parse the JSON data
var jobs = JSON.parse(jsonString);

// select the element where the jobs will be inserted
var jobList = document.getElementById("job-list");

// iterate through the jobs array
for (var i = 0; i < jobs.length; i++) {
  var job = jobs[i];

  // create the HTML elements for the job
  var jobItem = document.createElement("li");
  var jobTitle = document.createElement("h2");
  var company = document.createElement("p");
  var location = document.createElement("p");
  var description = document.createElement("p");
  var applyButton = document.createElement("a");

  // set the text content of the elements
  jobTitle.textContent = job.title;
  company.textContent = job.company;
  location.textContent = job.location;
  description.textContent = job.description;
  applyButton.textContent = "Apply Now";
  applyButton.href = job.apply_url;

  // append the elements to the job item
  jobItem.appendChild(jobTitle);
  jobItem.appendChild(company);
  jobItem.appendChild(location);
  jobItem.appendChild(description);
  jobItem.appendChild(applyButton);

  // append the job item to the job list
  jobList.appendChild(jobItem);
}

// select the search form and input elements
var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");

// add a submit event listener to the form
searchForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var searchTerm = searchInput.value.toLowerCase();

  // iterate through the jobs and hide the ones that don't match the search term
  for (var i = 0; i < jobs.length; i++) {
    var job = jobs[i];
    var jobTitle = job.title.toLowerCase();
    var company = job.company.toLowerCase();
    var jobItem = document.getElementById("job-" + job.id);
    if (jobTitle.indexOf(searchTerm) === -1 && company.indexOf(searchTerm) === -1) {
      jobItem.style.display = "none";
    } else {
      jobItem.style.display = "block";
    }
  }
});

var images = document.querySelectorAll('.scroll-animation');

window.addEventListener('scroll', function() {
  var value = window.scrollY;
  images.forEach(function(image) {
    var speed = image.getAttribute('data-speed');
    image.style.transform = 'translateY(' + value * speed + 'px)';
  });
});



  






  
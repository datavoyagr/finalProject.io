// /**
//  * CS 290 Web programming
//  * final Project
//  * Author: Nicole Miller
//  * Date: 3/3/2020
//  */



var survey = document.getElementById('survey');
survey.onsubmit = function(event) {
  event.preventDefault();

  var request = new XMLHttpRequest();
  // POST to httpbin which returns the POST data as JSON
  request.open('POST', 'https://httpbin.org/post', /* async = */ false);

  var formData = new FormData(document.getElementById('survey'));
  request.send(formData);

  console.log(request.response);
}

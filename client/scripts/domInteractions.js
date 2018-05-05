// //write jquery that interacts with dom
$(document).ready(function() {

  $('#option').on('click','#roomSelect', function (event) {
    var element = $(event.target);
    console.log(element);
    // app.filterRoom()
  });
  
});
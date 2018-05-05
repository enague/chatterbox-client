// //write jquery that interacts with dom
$(document).ready(function() {

  

  $('#roomSelect').on('click', '#option', function(event) {
    var element = $(event.target);
    
    // app.filterRoom()
  });
  
  //FRIEND UNFRIEND BUTTON
  $('body').on('click', '#userName', function(event) {
    var element = $(event.target);
    var username = element[0].innerHTML;
    
    app.handleUsernameClick(username, event);
  });
  
  //SUBMIT BUTTON
  $('#send').on('click', function(event) {
    //access app.send with a message
    
    var message = {
      username: app.username,
      roomname: $("#roomSelect :selected").text().trim(),
      text: $("#input")[0].value
    }
    
    $("#input")[0].value = '';
    
    app.send(message);
  });
  
  $('#filter').on('click', function(event) {
    //access app.send with a message
    var room = $("#roomSelect :selected").text();
    
    app.filterRoom(room);
  });
  
  
  //USERNAME CSS
  $('body').on('mouseenter', '#userName', function(event) {
    $(event.target).addClass('hover-username');
  });
  
  $('body').on('mouseleave', '#userName', function(event) {
    $(event.target).removeClass('hover-username');
    
  });
  
  $('#refresh').on('click', function(event) {
    //call refresh page
    var roomname = $("#roomSelect :selected").text();
    app.refreshPage(roomname);
  });
  
});
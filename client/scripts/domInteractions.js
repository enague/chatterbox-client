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
    
    
    if (app.friends[username] === undefined || app.friends[username] === false) {
      app.friends[username] = true;
    } else {
      app.friends[username] = false;
      console.log(element[0].innerHTML);
    }
    
  });
  
  //SUBMIT BUTTON
  $('#send').on('click', function(event) {
    //access app.send with a message
    var message = {
      username: 'EricSam',
      room: $("#roomSelect :selected").text(),
      text: $("#input")[0].value
    }
    
    $("#input")[0].value = '';
    
    app.send(message);
  });
  
  $('#filter').on('click', function(event) {
    //access app.send with a message
    var room = $("#roomSelect :selected").text()
    
    app.filterRoom(room);
  });
  
  
  //USERNAME CSS
  $('body').on('mouseenter', '#userName', function(event) {
    $(event.target).addClass('hover-username');
  });
  
  $('body').on('mouseleave', '#userName', function(event) {
    $(event.target).removeClass('hover-username');
    
  });
});
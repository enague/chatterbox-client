// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  messages: [],
  rooms: {},
  friends: {},
  
  init: function() {
    // debugger;
    app.fetch();
    
    
    // console.log(app.fetch());
    // console.log(app.messages);
    // var messages = app.messages

    // if (messages.length) {
    //   _.each(messages, function(message) {
    //     app.renderMessage(message);
    //   })
    // }
  },
  
  send: function(message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent', data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  
  fetch: function() {
      $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: app.server,
      type: 'GET',
      // data: data,
      contentType: 'application/json',
      success: function (data) {
        // console.log(data);
        if (app.messages.length === 0) {
          app.messages = data.results;
          
          //render all messages and rooms
          _.each(app.messages, function(message) {
            app.renderMessage(message);
            
            var roomName = message.roomname;
            
            //check if we have it in our rooms array if not add and append it
            if (app.rooms[roomName] === undefined & roomName !== 'undefined' & roomName !== ' ') {
              app.rooms[roomName] = roomName;
              app.renderRoom(roomName);
            }
          });
        }
        console.log(app.messages);
        console.log(app.rooms);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to fetch', data);
      }
    });
  },
  
  clearMessages: function() {
    $('#chats').empty();
  },
  
  renderMessage: function(message) {
    //create node
    messageDiv = $(`<div id="messageDiv">
                <div id="userName"><strong>${message.username}</strong></div>
                <div id="message">${message.text}</div>
              </div>`);
   
    //append node
    $('#chats').append(messageDiv);
  },
  
  renderRoom: function(roomName) {
    selectOption = $(`<option id='option'> ${roomName} </option>`)
    
    $('#roomSelect').append(selectOption);
  },
  
  filterRoom: function(roomName) {
    app.clearMessages();
    
    _.each(app.messages, function(message) {
      if (message.roomname === roomName) {
        app.renderMessage(message);
      }
    })
  }
};

app.init();

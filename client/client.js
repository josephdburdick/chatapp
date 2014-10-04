/**
* Templates
*/
Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }});
}

//catch the event and send the message when the user is pressing enter
Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var name = 'Anonymous';
      var message = document.getElementById('message');
 
      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });
 
        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}

var events = (function(){
    var topics = {};
    var hOP = topics.hasOwnProperty;
  
    return {
      subscribe: function(topic, listener) {
        // Create the topic's object if not created
        if(!hOP.call(topics, topic)) topics[topic] = [];
  
        // Adding  the listener to queue
        var index = topics[topic].push(listener) -1;
  
        //  removal of topic
        return {
          remove: function() {
            delete topics[topic][index];
          }
        };
      },
      publish: function(topic, info) {
        // If the topic doesn't exist, or there's no listeners in queue, get out of loop
        if(!hOP.call(topics, topic)) return;
  
        // Cycle through topics queue, fire!
        topics[topic].forEach(function(item) {
                item(info != undefined ? info : {});
        });
      }
    };
  })();
// import { useState, useEffect } from 'react'
// import { usePubNub } from 'pubnub-react'

// export default function Chat() {

//   const pubnub = usePubNub();
//   const [channels] = useState(['main']);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {

//     const listener = {
//       message: msg => setMessages(prev => [...prev, msg])
//     }

//     pubnub.subscribe({ channels });

//     pubnub.addListener(listener);

//     return () => {
//       pubnub.unsubscribe({ channels });
//       pubnub.removeListener(listener);
//     }

//   }, [pubnub]);

//   const sendMessage = msg => {
//     if(msg) pubnub.publish({ channel: 'main', message: msg })
//   }

//   return (
//     <div className="fixed bottom-0 right-0 p-4 max-w-xs ">

//       {/* Display messages */}

//       <div className="max-h-96 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div key={index} className="bg-gray-300 p-2 mb-2 rounded ">{msg.text}</div>
//         ))}
//       </div>

//       {/* Input */}

//       <input 
//         className="border p-2 w-full text-black"
//         onKeyDown={e => e.key === 'Enter' && sendMessage(e.target.value)}
//       />

//       {/* Send button */}

//       <button
//         className="bg-blue-500 p-2 mt-2 w-full"
//         onClick={() => sendMessage(document.querySelector('input').value)}  
//       >
//         Send
//       </button>

//     </div>
//   )
// }


const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey: "myPublishKey",
  subscribeKey: "mySubscribeKey",
  userId: "myUniqueUserId",
});

// add listener
// paste below "add listener" comment
const listener = {
  status: (statusEvent) => {
      if (statusEvent.category === "PNConnectedCategory") {
          console.log("Connected");
      }
  },
  message: (messageEvent) => {
      showMessage(messageEvent.message.description);
  },
  presence: (presenceEvent) => {
      // handle presence
  }
};
pubnub.addListener(listener);

// publish message
// paste below "publish message" comment
const publishMessage = async (message) => {
  // With the right payload, you can publish a message, add a reaction to a message,
  // send a push notification, or send a small payload called a signal.
  const publishPayload = {
      channel : "hello_world",
      message: {
          title: "greeting",
          description: message
      }
  };
  await pubnub.publish(publishPayload);
}

// subscribe to a channel

// built-in package for reading from stdin
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.setPrompt("");
readline.prompt();
// publish after hitting return
readline.on('line', (message) => {
    publishMessage(message).then(() => {
        readline.prompt();
    });
});

const showMessage = (msg) => {
    console.log("message: " + msg);
}

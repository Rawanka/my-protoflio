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
//     <div className="fixed bottom-0 right-0 p-4 max-w-xs">

//       {/* Display messages */}

//       <div className="max-h-96 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div key={index} className="bg-gray-300 p-2 mb-2 rounded">{msg.text}</div>
//         ))}
//       </div>

//       {/* Input */}

//       <input 
//         className="border p-2 w-full"
//         onKeyDown={e => e.key === 'Enter' && sendMessage(e.target.value)}
//       />

//       {/* Send button */}

//       <button
//         className="bg-blue-500 text-white p-2 mt-2 w-full"
//         onClick={() => sendMessage(document.querySelector('input').value)}  
//       >
//         Send
//       </button>

//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import PubNub from 'pubnub'

export default function Home() {

  const [messages, setMessages] = useState([])

  useEffect(() => {

    const pubnub = new PubNub({
      publishKey: 'pub-c-0849b72c-151e-4068-a10e-f90a2dc727a0',
      subscribeKey: 'sub-c-d209e7ae-98f7-4ee6-9b18-1dc2e15cf745',
      uuid: 'user123' 
    })

    const listener = {
      message: msg => setMessages(prev => [...prev, msg.message.description])
    }

    pubnub.addListener(listener)
    pubnub.subscribe({channels: ['channel1']})

    return () => {
      pubnub.unsubscribe({channels: ['channel1']})
      pubnub.removeListener(listener)
    }

  }, [])

  const sendMessage = async msg => {
    await pubnub.publish({
      channel: 'channel1',
      message: {
        description: msg  
      }
    })
  }

  return (
    <div>
      
      {messages.map(msg => <div>{msg}</div>)}

      <input 
        onKeyDown={e => e.key === 'Enter' && sendMessage(e.target.value)}
      />

      <button onClick={() => sendMessage(input.value)}>
        Send
      </button>

    </div>
  )

}


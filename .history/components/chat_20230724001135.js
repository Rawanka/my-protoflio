import { useState, useEffect } from 'react'
import { usePubNub } from 'pubnub-react'

export default function Chat() {

  const pubnub = usePubNub();
  const [channels] = useState(['main']);
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    const listener = {
      message: msg => setMessages(prev => [...prev, msg])
    }

    pubnub.subscribe({ channels });

    pubnub.addListener(listener);

    return () => {
      pubnub.unsubscribe({ channels });
      pubnub.removeListener(listener);
    }

  }, [pubnub]);

  const sendMessage = msg => {
    if(msg) pubnub.publish({ channel: 'main', message: msg })
  }

  return (
    <div className="fixed bottom-0 right-0 p-4 max-w-xs ">

      {/* Display messages */}

      <div className="max-h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="bg-gray-300 p-2 mb-2 rounded text-black">{msg.text}</div>
        ))}
      </div>

      {/* Input */}

      <input 
        className="border p-2 w-full"
        onKeyDown={e => e.key === 'Enter' && sendMessage(e.target.value)}
      />

      {/* Send button */}

      <button
        className="bg-blue-500 text-white p-2 mt-2 w-full"
        onClick={() => sendMessage(document.querySelector('input').value)}  
      >
        Send
      </button>

    </div>
  )
}




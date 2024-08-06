// pages/index.js

import { useState, useEffect } from 'react'
import { usePubNub } from 'pubnub-react'

export default function Home() {

  const pubnub = usePubNub()

  const [channels] = useState(['chat'])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const listener = {
      message: msg => setMessages(prev => [...prev, msg])  
    }

    pubnub.addListener(listener)
    pubnub.subscribe({channels})

    return () => {
      pubnub.unsubscribe({channels})
      pubnub.removeListener(listener)
    }
  }, [pubnub])  

  const sendMessage = msg => {
    if (msg) pubnub.publish({channel: channels[0], message: msg})
  }

  return (
    <div className="h-screen flex bg-gray-200">

      <div className="m-auto bg-white rounded shadow p-8 max-w-xl">

        <div className="text-lg font-bold text-center mb-4">
          Chat
        </div>

        <div className="space-y-2 h-64 overflow-y-scroll">
          {messages.map((msg, index) => (
            <p key={index} className="bg-gray-300 p-2 rounded">{msg.text}</p>
          ))}
        </div>

        <div className="flex mt-4">
          <input 
            className="border p-2 flex-1 mr-2"
            onKeyPress={e => e.key === 'Enter' && sendMessage(e.target.value)}
          />
          <button 
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => sendMessage(document.querySelector('input').value)}
          >
            Send
          </button>
        </div>

      </div>

    </div>
  )
}
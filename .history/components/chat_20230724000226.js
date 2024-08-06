import { useState, useEffect } from 'react'
import PubNub from 'pubnub'

export default function Home() {

  const [messages, setMessages] = useState([])

  useEffect(() => {

    const pubnub = new PubNub({
      publishKey: '...',
      subscribeKey: '...' 
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
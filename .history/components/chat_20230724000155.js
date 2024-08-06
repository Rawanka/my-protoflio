import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';

function Chat({ pubnub }) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const listener = {
      message: msg => setMessages(prev => [...prev, msg.message.description]) 
    };
    
    pubnub.addListener(listener);
    pubnub.subscribe({channels: ['hello_world']});

    return () => {
      pubnub.unsubscribe({channels: ['hello_world']});
      pubnub.removeListener(listener);
    }
  }, [pubnub]);

  const sendMessage = async msg => {
    await pubnub.publish({ 
      channel: 'hello_world',
      message: {
        title: 'greeting',
        description: msg
      }
    });
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
  );

}

// Initialize PubNub client
const pubnub = new PubNub({...}); 

function App() {
  return (
    <Chat pubnub={pubnub} /> 
  )
}
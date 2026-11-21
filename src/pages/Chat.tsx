import { useState } from "react";

export function Chat() {

  const [messages , setMessages] = useState<{message: string, role: string}[]>([
    {message: 'Hello', role: 'user'},
    {message: 'Hello', role: 'assistant'},
  ]);

  const [messageInput , setMessage] = useState<string>('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setMessage(e.target.value);
  }

  async function handleSend(){

    setMessages((prev)=>{
      return [...prev , {message: messageInput, role: 'user'}];
    })
    const response = await fetch('http://localhost:3000/chat/message' , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          message: messageInput,
          chat_id: 4,
          role: "user"
      }),
    });

    const data = await response.json();
    console.log(response.status, data);
    setMessages((prev)=>{
      return [...prev , {message: data.ai_message, role: data.role}];
    })
  }

  return (
    <div>
      {
        messages.map((message , index)=>{
          return (
            <div className="flex flex-col" key={index}>
              <div className={`text-sm text-gray-500 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>{message.message}</div>
            </div>
          )
        })
      }

      <input type="text" value={messageInput} onChange={handleInput}/>
      
      <button onClick={() => void handleSend()}>Send</button>
      
    </div>
  )
}
"use client"
import { PromptForm } from '@/components/prompt-form'
import { useEffect, useRef, useState } from 'react'

interface Message {
    id: string,
    content: string
    role: 'user' | 'assistant'
}

export function ChatPanel() {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSubmit = (value: string) => {
        // add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            content: value,
            role: 'assistant'
        }

        setMessages(prevMessages => [...prevMessages, userMessage])

        //simulate AI response
        setTimeout(() => {

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: `AI response to "${value}"`,
                role: 'assistant'
            }
            setMessages(prevMessages => [...prevMessages, aiMessage])
        }, 1000);

        setInput("")

    }


  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`mb-4 p-3 rounded-lg ${
              message.role === 'user' 
                ? 'bg-blue-100 ml-auto text-right' 
                : 'bg-white border border-gray-200'
            }`}
            style={{ maxWidth: '80%' }}
          >
            <p className={`text-sm ${message.role === 'user' ? 'text-blue-800' : 'text-gray-800'}`}>
              {message.content}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t bg-white p-4">
        <PromptForm
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  ) 

}
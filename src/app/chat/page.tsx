import React from 'react'
import SidebarLeft from '@/components/sidebar-left'
import SidebarRight from '@/components/sidebar-right'
import { Paperclip, Send } from 'lucide-react'
import { ChatPanel } from '@/components/chat-panel'

const Chat = () => {
  return (
    <div className="flex overflow-hidden h-screen">
      <div className="flex-shrink-0 w-40 overflow-hidden">
        <SidebarLeft />
      </div>
      <ChatPanel/>
     <div className="flex-grow flex items-end justify-center mb-5">
        <div className="w-3/4 relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Paperclip className="h-6 w-6 text-gray-400 cursor-pointer" />
          </div>
          <input 
            className="w-full p-2 pl-12 pr-12 text-xl h-[7vh] rounded-full bg-[#2f2f2f]" 
            type="text" 
            placeholder="Type your message here..."
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Send className="h-6 w-6 text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div> 
      <div className="flex-shrink-0 w-40 overflow-hidden">
        <SidebarRight />
      </div>
    </div>
  )
}

export default Chat
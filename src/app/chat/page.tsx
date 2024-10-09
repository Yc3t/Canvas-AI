import React from 'react'
import SidebarLeft from '@/components/sidebar-left'
import SidebarRight from '@/components/sidebar-right'

const Chat = () => {
  return (
    <div className="flex overflow-hidden h-screen">
      <div className="flex-shrink-0 w-40 overflow-hidden">
        <SidebarLeft />
      </div>
      <div className="flex-grow">
        {/* Main chat content goes here */}
      </div>
      <div className="flex-shrink-0 w-40 overflow-hidden">
        <SidebarRight />
      </div>
    </div>
  )
}

export default Chat
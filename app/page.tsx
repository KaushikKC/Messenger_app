import React from 'react'
import Chatinput from './Chatinput'
import MessageList from './MessageList'

function HomePage() {
  return (
    <main>
      <MessageList />
      <Chatinput />
    </main>
  )
}

export default HomePage
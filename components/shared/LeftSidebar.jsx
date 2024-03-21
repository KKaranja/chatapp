import React from 'react';
import Chat from './Chat';
import { chats } from '@/constants';

const title = 'Sample  chat';
const LeftSidebar = () => {
  return (
    <div className="flex flex-col gap-2 w-[150px] left-3">
      {chats.map((chat) => (
        <Chat key={chat.id} title={chat.title} />
      ))}
    </div>
  );
};

export default LeftSidebar;

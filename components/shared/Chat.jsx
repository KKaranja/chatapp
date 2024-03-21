import React from 'react';
import { BsChatDots } from 'react-icons/bs';

const Chat = ({ title }) => {
  return (
    <div className="flex justify-between items-center gap-2 rounded-full bg-gray-500  text-light-50 py-2 px-2">
      <BsChatDots />
      {title}
    </div>
  );
};

export default Chat;

import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const username = 'Isaac';
const page = () => {
  return (
    <div>
      <span className="">{username}</span>
      <h1 className="">Welcome to Briefly AI</h1>
      <p className="">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <Textarea
        className="mt-[1.25rem]"
        placeholder="Type your message here."
      />
    </div>
  );
};

export default page;

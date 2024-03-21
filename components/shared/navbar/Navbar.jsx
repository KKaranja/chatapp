import React from 'react';
import { BsFillChatRightQuoteFill } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiChevronDown } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';

const userName = 'username';
const Navbar = () => {
  return (
    <div className="container h-[4.5rem] flex justify-between items-center">
      <div className="">
        <BsFillChatRightQuoteFill />
      </div>
      <div className=" flex justify-between items-center gap-6 flex-row">
        <Link href="/">
          <IoMdNotificationsOutline />
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <BiUser />
            {userName}
          </div>
          <BiChevronDown />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FcBullish } from "react-icons/fc";
import { IoMdLogOut } from "react-icons/io";
import classNames from 'classnames';
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/constants";
import { Link, useLocation } from "react-router-dom";

const classes =
  "flex items-center px-3 py-2 gap-4 font-light rounded-sm hover:bg-neutral-700 active:bg-nuetral-600 hover:no-underline ";

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 p-3 text-white bg-neutral-900 text-base">
      <div className="flex  items-center gap-2 px-2 py-5">
        <FcBullish fontSize={24} />
        <span className="text-base">OpenShop</span>
      </div>
      <div className="flex-1 flex-col flex py-2 gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLinks key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLinks item={item} key={item.key} />
        ))}
        <div>
          <Link to="/logout" className={classes}>
            <IoMdLogOut />
            <span className="text-base text-red-400">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

function SidebarLinks({ item }) {
  const {pathname} = useLocation()
  return (
    <Link to={item.path} className={classNames(item.path === pathname ? 'text-white bg-neutral-600' : '', classes) }>
      {item.icon}
      <span className="text-base">{item.label}</span>
    </Link>
  );
}

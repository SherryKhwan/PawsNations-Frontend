"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../dashboard-layout/layout-context";
import { VideoCameraIcon } from "@heroicons/react/24/outline";

export const SidebarWrapper = ({ children }) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[202] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <VideoCameraIcon className="h-10 w-10" />
          <span>YFILM</span>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarMenu title="Main Menu">{children}</SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};

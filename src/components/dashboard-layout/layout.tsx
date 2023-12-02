import React, { ReactElement } from "react";
import { useLockedBody } from "../../lib/hooks/useBodyLock";
import { NavbarWrapper } from "../dashboard-navbar/navbar";
import { SidebarContext } from "./layout-context";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [content, setContent] = React.useState<ReactElement>(
    <div>Iye im wu agbogidi!!</div>
  );
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
        content,
        setContent,
      }}
    >
      <section className="flex">
        <NavbarWrapper />
      </section>
    </SidebarContext.Provider>
  );
};

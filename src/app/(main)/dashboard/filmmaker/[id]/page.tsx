"use client";
import { useLockedBody } from "@/lib/hooks/useBodyLock";
import { SidebarContext } from "@/components/dashboard-layout/layout-context";
import { NavbarWrapper } from "@/components/dashboard-navbar/navbar";
import { SidebarWrapper } from "@/components/dashboard-sidebar/sidebar";
import React, { useState } from "react";
import DashboardContent from "@/components/dashboard-content";
import DashboardProjectsContents from "@/components/dashboard-projects-contents";
import { SidebarItem } from "@/components/dashboard-sidebar/sidebar-item";
import { AccountsIcon } from "@/components/icons/sidebar/accounts-icon";
import DashboardOngoingProjectsContents from "@/components/dashboard-ongoing-projects-content";
import DashboadEventsContents from "@/components/dasboard-events-content";
import { PaymentsIcon } from "@/components/icons/sidebar/payments-icon";
import DashboardCreateProjectContent from "@/components/dashboard-create-project-content";
import DashboardApplyContent from "@/components/dashboard-apply-content";

const FilmakerDashboard = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [queryString, setQueryString] = useState("");
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };
  const [content, setContent] = React.useState(<DashboardProjectsContents />);
  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
        content,
        setContent,
        queryString,
        setQueryString,
      }}
    >
      <section className="flex">
        <SidebarWrapper>
          <SidebarItem
            content={<DashboardProjectsContents />}
            title="All Projects"
            icon={<AccountsIcon />}
          />
          <SidebarItem
            content={<DashboardOngoingProjectsContents />}
            title="Ongoing Projects"
            icon={<PaymentsIcon />}
          />
          <SidebarItem
            content={<DashboadEventsContents />}
            title="Events"
            icon={<PaymentsIcon />}
          />
          <SidebarItem
            content={<DashboardCreateProjectContent />}
            title="Create Project"
            icon={<PaymentsIcon />}
          />
          <SidebarItem
            content={<DashboardApplyContent />}
            title="Apply "
            icon={<PaymentsIcon />}
          />
        </SidebarWrapper>
        <div className="w-full">
          <NavbarWrapper />
          <DashboardContent />
        </div>
      </section>
    </SidebarContext.Provider>
  );
};

export default FilmakerDashboard;

import React from "react";
import { useSidebarContext } from "./dashboard-layout/layout-context";

const DashboardContent = () => {
  const { content } = useSidebarContext();
  return content;
};

export default DashboardContent;

"use client";
import { useLockedBody } from "@/lib/hooks/useBodyLock";
import { SidebarContext } from "@/components/dashboard-layout/layout-context";
import { NavbarWrapper } from "@/components/dashboard-navbar/navbar";
import { SidebarWrapper } from "@/components/dashboard-sidebar/sidebar";
import React, { useEffect, useMemo, useState } from "react";
import DashboardContent from "@/components/dashboard-content";
import { SidebarItem } from "@/components/dashboard-sidebar/sidebar-item";
import { AccountsIcon } from "@/components/icons/sidebar/accounts-icon";
import DashboadEventsContents from "@/components/dasboard-events-content";
import { PaymentsIcon } from "@/components/icons/sidebar/payments-icon";
import { Acquisition, User } from "@/types/data";
import getAcquisitions from "@/lib/api/getAcquisitions";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useUser } from "@/lib/providers/user";

export default function ScoutDashboard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };
  const [content, setContent] = React.useState(<AllAcquisitions />);
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
        <SidebarWrapper>
          <SidebarItem
            content={<AllAcquisitions />}
            title="All Negotioations"
            icon={<AccountsIcon />}
          />

          <SidebarItem
            content={<DashboadEventsContents />}
            title="Events"
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
}

const AllAcquisitions = () => {
  const [acquisitions, setAcquisitions] = useState<Acquisition[]>([]);
  const user = useUser();
  useEffect(() => {
    const getAllAcquisitions = async () => {
      const acquisitions = await getAcquisitions({});
      if (acquisitions && acquisitions.length > 0)
        setAcquisitions(acquisitions);
    };
    getAllAcquisitions();
  }, [user?._id]);

  const columns = useMemo(
    () => [
      { uid: "project", name: "Project" },
      { uid: "filmmaker", name: "Film Maker" },
      { uid: "director", name: "Director" },
      { uid: "actions", name: "" },
    ],
    []
  );

  return (
    <div className="p-4">
      <p className="text-center text-[2rem] my-4">All Acquisitions</p>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={acquisitions}>
          {(acquisition) => (
            <TableRow key={acquisition._id}>
              <TableCell>{acquisition.project.title}</TableCell>
              <TableCell>{acquisition.filmmaker.firstName}</TableCell>
              <TableCell>
                {acquisition.project.directors
                  .map((d) => d.firstName + " " + d.lastName)
                  .join(", ")}
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-5">
                  <Tooltip content="View Project">
                    <Link href={`/projects/${acquisition.project._id}`}>
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EyeIcon className="h-5 w-5" />
                      </span>
                    </Link>
                  </Tooltip>
                  <Tooltip content="Negotiate">
                    <Link href={`/negotiation/${acquisition._id}`}>
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <PencilIcon className="h-5 w-5" />
                      </span>
                    </Link>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

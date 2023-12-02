"use client";

import { Input, Navbar, NavbarContent } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { SupportIcon } from "../icons/navbar/support-icon";
import { SearchIcon } from "../icons/searchicon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { useSidebarContext } from "../dashboard-layout/layout-context";

export const NavbarWrapper = () => {
  // const [searchTerm, setSearchTerm] = useState<string>("");
  const { setQueryString } = useSidebarContext();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  useEffect(() => {
    const id = setTimeout(() => setQueryString(debouncedSearchTerm), 1000);
    return () => clearTimeout(id);
  }, [debouncedSearchTerm]);

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            value={debouncedSearchTerm}
            onChange={(e) => setDebouncedSearchTerm(e.target.value)}
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <NotificationsDropdown />

          <div className="max-md:hidden">
            <SupportIcon />
          </div>

          {/* <NavbarContent>
            <UserDropdown />
          </NavbarContent> */}
        </NavbarContent>
      </Navbar>
    </div>
  );
};

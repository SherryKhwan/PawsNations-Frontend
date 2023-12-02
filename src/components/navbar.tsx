"use client";

import React, { useCallback } from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  NavbarMenuToggle,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Avatar,
  Dropdown,
} from "@nextui-org/react";
import Link from "next/link";
import { menuItems } from "@/lib/menuItems";
import { DarkModeSwitch } from "./darkModeSwitch";
import { useUser } from "@/lib/providers/user";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = useUser();

  const logOut = useCallback(() => {
    localStorage.removeItem("user");
    Cookies.remove("token", {
      path: "/",
      // domain: typeof window !== undefined && window.location.host,
    });
    window.location.href = "/";
  }, []);

  return (
    <Nav isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
            <p className="font-bold text-inherit">PawsNations</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems(user?._id, user?.userType).map((item, index) => (
          <NavbarItem isActive key={`${item.title}-${index}`}>
            <Link color="foreground" href={item.link}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="black sm:hidden">
        {menuItems(user?._id, user?.userType).map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link color="foreground" href={item.link}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent justify="end">
        {(!user && (
          <>
            <NavbarItem className="lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )) || (
          <NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Avatar
                    as="button"
                    color="secondary"
                    size="md"
                    src={`${user.image}`}
                  />
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="User menu actions"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <DropdownItem
                  key="profile"
                  className="flex flex-col justify-start w-full items-start"
                >
                  <p>Signed in as</p>
                  <p>{user.email}</p>
                </DropdownItem>
                <DropdownItem key="profile">
                  <Link href="/profile">Profile</Link>
                </DropdownItem>
                <DropdownItem key="dashboard">
                  <Link href={`/dashboard/${user.userType}/${user._id}`}>
                    Dashboard
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  className="text-danger "
                  onClick={() => {
                    logOut();
                  }}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        )}

        <NavbarItem>
          <DarkModeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
};

export default Navbar;

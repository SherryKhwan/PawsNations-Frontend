import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const NavbarServicesDropdown = () => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            endContent={<ChevronDownIcon />}
            radius="sm"
            variant="light"
          >
            Services
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          key="autoscaling"
          description="ACME scales apps to meet user demand, automagically, based on load."
        >
          <Link color="foreground" href="#">
            Filmmaker services
          </Link>
        </DropdownItem>
        <DropdownItem
          key="usage_metrics"
          description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
        >
          <Link color="foreground" href="#">
            {" "}
            Scout services
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarServicesDropdown;

import NextLink from "next/link";
import React, { ReactElement } from "react";
import { useSidebarContext } from "../dashboard-layout/layout-context";
import clsx from "clsx";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
  content?: ReactElement;
}

export const SidebarItem = ({ icon, title, isActive, content }: Props) => {
  const { collapsed, setCollapsed, setContent } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return (
    <div
      onClick={() => {
        setContent(content);
      }}
      className="text-default-900 active:bg-none max-w-full"
    >
      <div
        className={clsx(
          isActive
            ? "bg-primary-100 [&_svg_path]:fill-primary-500"
            : "hover:bg-default-100",
          "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
        )}
        onClick={handleClick}
      >
        {icon}
        <span className="text-default-900">{title}</span>
      </div>
    </div>
  );
};

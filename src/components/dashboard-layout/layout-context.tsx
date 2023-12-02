"use client";

import React, {
  Dispatch,
  FunctionComponent,
  JSXElementConstructor,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
} from "react";

interface SidebarContext {
  collapsed: boolean;
  setCollapsed: () => void;
  content: ReactElement;
  setContent: Dispatch<
    SetStateAction<ReactElement<any, string | JSXElementConstructor<any>>>
  >;
  queryString?: string;
  setQueryString?: Dispatch<SetStateAction<string>>;
}

export const SidebarContext = createContext<SidebarContext>({
  collapsed: false,
  setCollapsed: () => {},
  content: <div>fuck you</div>,
  setContent: () => {},
  queryString: "",
  setQueryString: () => {},
});

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

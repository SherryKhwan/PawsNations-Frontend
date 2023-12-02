"use client";

import { Tabs, Tab } from "@nextui-org/tabs";

type Item = {
  label: string;
  content: any;
};

type Props = {
  items: Item[];
  classNames?: object;
  className?: string;
};

export default function ClientTabs(props: Props) {
  return (
    <Tabs {...props}>
      {(item) => (
        <Tab key={item.label} title={item.label}>
          {item.content}
        </Tab>
      )}
    </Tabs>
  );
}

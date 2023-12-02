"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

type AccordionProps = {
  items: {
    title: string;
    content: string;
  }[];
};

export default function ClientAccordion({ items }: AccordionProps) {
  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={`Accordion ${index}`}
          title={item.title}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

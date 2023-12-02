"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
} from "@nextui-org/react";

type SelectItem = {
  name: string;
  key: string | number;
  description?: string;
};

type SelectProps = {
  value: string;
  items: SelectItem[];
  placeholder: string;
  onSelect: (key: string) => void;
  label: string;
};

export default function Select({
  value,
  items,
  placeholder,
  onSelect,
  label,
}: SelectProps) {
  return (
    <div className="flex flex-col w-fit mb-2">
      <label className="text-small font-medium pb-1.5">
        <span>{label}</span>
      </label>
      <Dropdown>
        <DropdownTrigger>
          {value ? (
            <Button variant="solid" color="primary">
              {value}
            </Button>
          ) : (
            <Button variant="ghost" color="primary" className="px-4 py-2">
              {placeholder}
            </Button>
          )}
        </DropdownTrigger>
        <DropdownMenu
          variant="flat"
          onAction={(key) => onSelect(String(key))}
          aria-label={label}
          items={items}
        >
          {(item: SelectItem) => (
            <DropdownItem
              key={item.key}
              color="secondary"
              description={item.description}
            >
              {item.name}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

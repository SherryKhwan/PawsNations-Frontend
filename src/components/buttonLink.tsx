"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function ButtonLink({
  startContent,
  href,
  ...props
}: {
  startContent: any;
  href: string;
}) {
  return (
    <Button startContent={startContent} color="default" href={href}>
      Back to projects
    </Button>
  );
}

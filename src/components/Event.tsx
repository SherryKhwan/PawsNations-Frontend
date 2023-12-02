import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

interface Event {
  event: {
    type: string;
    name: string;
    date: string;
    location: string;
    description: string;
  };
}

const Event = ({ event }: Event) => {
  return (
    <Card className="max-w-[400px]" shadow="sm">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="sm"
          width="100%"
          alt={"event"}
          className="w-full object-cover h-[140px]"
          src="/images/event_image.jpg"
        />
        <div>
          <p className="uppercase text-center underline mt-2">
            <b>{event.name}</b>
          </p>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <p className="text-default-500">{event.description}</p>
      </CardFooter>
    </Card>
  );
};

export default Event;

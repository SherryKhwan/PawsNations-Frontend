import React from "react";
import { events } from "../lib/events";
import MovieCard from "./movieCard";
import Link from "next/link";
import Event from "./Event";

const DashboadEventsContents = () => {
  return (
    <div className="p-4">
      <p className="text-center text-[2rem] my-4">Upcoming Events</p>
      <div className="flex flex-wrap gap-4 p-2 justify-center">
        {events.map((event, index) => (
          <Link href={`/events/334`} key={event.name + index}>
            <Event event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboadEventsContents;

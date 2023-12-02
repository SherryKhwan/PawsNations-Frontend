"use client";

import moment from "moment";
import { Project } from "@/types/data";
import { CalendarIcon, ClockIcon, StarIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface Props {
  width?: string;
  isOwnProject: boolean;
  isOngoing: boolean;
  project: Project;
}

const MovieCard = ({ width, isOwnProject, isOngoing, project }: Props) => {
  return (
    <Card
      isBlurred
      className={`border-none bg-background/60 dark:bg-default-100/50 max-w-[${width}px] h-full`}
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 ">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={project.image?.url || "/images/default_poster.png"}
              width="100%"
            />
          </div>
          {(!isOngoing && (
            <div className="flex flex-col col-span-6 md:col-span-8">
              <p className="uppercase font-bold">{project.title}</p>
              {project.directors?.length > 0 && (
                <p>
                  Director{" "}
                  <span className="opacity-60 mt-3">
                    {project.directors
                      ?.map(
                        (director) =>
                          director.firstName + " " + director.lastName
                      )
                      .join(", ")}
                  </span>
                </p>
              )}
              {project.writers?.length > 0 && (
                <p>
                  Writer
                  <span className="opacity-60 ms-2 mt-3">
                    {project.writers
                      .map((writer) => writer.firstName + " " + writer.lastName)
                      .join(", ")}
                  </span>
                </p>
              )}
              {(project.cast?.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap mt-3 gap-3">
                    {project.cast.map((cast) => (
                      <Chip key={cast._id}>
                        {cast.firstName + " " + cast.lastName}
                      </Chip>
                    ))}
                  </div>
                </div>
              )) ||
                null}
              {(project.genres?.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap mt-3 gap-3">
                    {project.genres?.map((genre) => (
                      <Chip key={genre.name} variant="bordered">
                        {genre.name}
                      </Chip>
                    ))}
                  </div>
                </div>
              )) ||
                null}
              <div className="mt-4">
                {!isOwnProject && <p>{project.description}</p>}
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Chip
                  color="primary"
                  radius="sm"
                  startContent={
                    <StarIcon color="" className="w-4 h-4 text-[#ffd700]" />
                  }
                >
                  {project.rating}
                </Chip>
                <Chip
                  color="primary"
                  radius="sm"
                  startContent={
                    <CalendarIcon color="" className="w-4 h-4 text-[#ffd700]" />
                  }
                >
                  {moment(project.releaseDate).format("DD/MM/YYYY")}
                </Chip>
                <Chip
                  color="primary"
                  radius="sm"
                  startContent={
                    <ClockIcon color="" className="w-4 h-4 text-[#ffd700]" />
                  }
                >
                  {Math.floor(project.runtime / 60) +
                    "hr " +
                    (project.runtime % 60)}
                  min
                </Chip>
              </div>
              {!isOwnProject && (
                <div className="mt-4 flex gap-3 flex-wrap">
                  {project.languages.map((language) => (
                    <Chip key={language} radius="sm" color="danger">
                      {language}
                    </Chip>
                  ))}
                </div>
              )}
            </div>
          )) || (
            <div className="flex flex-col gap-2 col-span-6 md:col-span-8">
              <p>
                Status: <span className="opacity-50">{project.status}</span>
              </p>
              <p>
                Filming Deadline: <span className="opacity-50">2/09/2024</span>
              </p>
              <p>
                Release date: <span className="opacity-50">2/12/2024</span>
              </p>
              <p>
                Top Collaborators:
                <span className="opacity-50 mt-4">
                  Calvin Philips, Lucas Joe, Kyle Peters
                </span>
              </p>
              <Link href={`/projects/${project._id}`}>
                <Button color="primary">Go to Project</Button>
              </Link>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
export default MovieCard;

"use client";

import moment from "moment";
import { Pet } from "@/types/data";
import { CalendarIcon, ClockIcon, StarIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface Props {
  width?: string;
  isOwnProject: boolean;
  isOngoing: boolean;
  pet: Pet;
}

const PetCard = ({ width, isOwnProject, isOngoing, pet }: Props) => {
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
              src={pet.image?.url || "/images/default_poster.png"}
              width="100%"
            />
          </div>
          {(true && (
            <div className="flex flex-col col-span-6 md:col-span-8">
              <p className="uppercase text-lg font-bold">{pet.name}</p>
              <p className="text-xl font-bold">Rs. {pet.price}</p>
              <p>
                Category:{" "}
                <span className="opacity-60 mt-3">
                  {pet.category.name}
                </span>
              </p>
              <p>
                Breed:{" "}
                <span className="opacity-60 mt-3">
                  {pet.breed.name}
                </span>
              </p>
              {pet.colors?.length > 0 && (
                <p>
                  Colors:{" "}
                  <span className="opacity-60 mt-3">
                    {pet.colors
                      ?.map(
                        (color) =>
                          color
                      )
                      .join(", ")}
                  </span>
                </p>
              )}
              {pet.personality?.length > 0 && (
                <p>
                  Personality:
                  <span className="opacity-60 ms-2 mt-3">
                    {pet.personality
                      .map((personality) => personality)
                      .join(", ")}
                  </span>
                </p>
              )}
              {/* {(pet.cast?.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap mt-3 gap-3">
                    {pet.cast.map((cast) => (
                      <Chip key={cast._id}>
                        {cast.firstName + " " + cast.lastName}
                      </Chip>
                    ))}
                  </div>
                </div>
              )) ||
                null}
              {(pet.genres?.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap mt-3 gap-3">
                    {pet.genres?.map((genre) => (
                      <Chip key={genre.name} variant="bordered">
                        {genre.name}
                      </Chip>
                    ))}
                  </div>
                </div>
              )) ||
                null} */}
              <div className="mt-4">
                <p className="font-bold">Description:</p>
                {!isOwnProject && <p>{pet.description}</p>}
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Chip
                  color="primary"
                  radius="sm"
                  startContent={
                    <StarIcon color="" className="w-4 h-4 text-[#ffd700]" />
                  }
                >
                  {pet.tags}
                </Chip>
                <Chip
                  color="primary"
                  radius="sm"
                  startContent={
                    <CalendarIcon color="" className="w-4 h-4 text-[#ffd700]" />
                  }
                >
                  {moment(pet.createdAt).format("DD/MM/YYYY")}
                </Chip>
                <Chip
                  color="primary"
                  radius="sm"
                  startContent={
                    <ClockIcon color="" className="w-4 h-4 text-[#ffd700]" />
                  }
                >
                  {/* {Math.floor(pet.runtime / 60) +
                    "hr " +
                    (pet.runtime % 60)} */}
                  min
                </Chip>
              </div>
              {!isOwnProject && (
                <div className="mt-4 flex gap-3 flex-wrap">
                  {/* {pet.languages.map((language) => (
                    <Chip key={language} radius="sm" color="danger">
                      {language}
                    </Chip>
                  ))} */}
                </div>
              )}
            </div>
          )) || (
              <div className="flex flex-col gap-2 col-span-6 md:col-span-8">
                <p>
                  Status: <span className="opacity-50">{pet.adoptionStatus}</span>
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
                <Link href={`/pets/${pet._id}`}>
                  <Button color="primary">Go to Project</Button>
                </Link>
              </div>
            )}
        </div>
      </CardBody>
    </Card>
  );
};
export default PetCard;

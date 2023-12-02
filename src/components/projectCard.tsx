import { Project } from "@/types/data";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Spacer } from "@nextui-org/spacer";
import Image from "next/image";
import { StarIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";

export default async function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardBody>
        <div className="flex">
          <div className="w-1/4 shrink-0 relative">
            {project?.image?.url && (
              <Image
                src={project.image.url}
                alt={project.title}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            )}
          </div>
          <Spacer x={4} />
          <div>
            <h1 className="font-bold text-lg mb-2">{project.title}</h1>
            <div className="mb-2">
              <span className="font-semibold mr-2">Director</span>
              <span className="text-foreground-500">
                {project.creator.firstName + " " + project.creator.lastName}
              </span>
            </div>

            <div className="mb-2 flex gap-2">
              {project.cast.map((cast, i) => (
                <Chip
                  key={i}
                  variant="bordered"
                  color="primary"
                  avatar={
                    <Avatar
                      name={cast.firstName?.[0]}
                      color="secondary"
                      size="lg"
                    />
                  }
                >
                  {cast.firstName + " " + cast.lastName}
                </Chip>
              ))}
            </div>

            <div className="mb-4">
              {project.genres.map((genre, i) => (
                <Chip
                  key={i}
                  className="capitalize"
                  color="primary"
                  variant="shadow"
                >
                  {genre.name}
                </Chip>
              ))}
            </div>

            <p className="mb-4">{project.description}</p>

            <div className="flex gap-4 flex-wrap mb-4">
              {project.rating ? (
                <Chip
                  color="primary"
                  variant="bordered"
                  startContent={<StarIcon className="h-5 w-5 text-secondary" />}
                >
                  {project.rating}
                </Chip>
              ) : (
                ""
              )}
              {project.releaseDate ? (
                <Chip
                  color="primary"
                  variant="bordered"
                  startContent={
                    <CalendarIcon className="h-5 w-5 text-secondary" />
                  }
                >
                  {project.releaseDate.split("T")[0]}
                </Chip>
              ) : (
                ""
              )}

              {project.runtime ? (
                <Chip
                  color="primary"
                  variant="bordered"
                  startContent={
                    <ClockIcon className="h-5 w-5 text-secondary" />
                  }
                >
                  {project.runtime} min
                </Chip>
              ) : (
                ""
              )}
            </div>

            {project.languages && (
              <div className="flex gap-4">
                {project.languages.map((language, i) => {
                  return (
                    <Chip
                      key={i}
                      radius="sm"
                      color="secondary"
                      className="capitalize"
                    >
                      {language}
                    </Chip>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

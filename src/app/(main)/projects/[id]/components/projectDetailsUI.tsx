"use client";

import moment from "moment";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Chip, } from "@nextui-org/react";
import {
  ArrowSmallLeftIcon,
  StarIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import ClientTabs from "@/components/clientTab";
import { Project, User } from "@/types/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/providers/user";

const Detail = ({ title, description }) => (
  <div className="mt-4">
    <h1 className="font-bold text-gray-900">{title}</h1>
    <span className="text-gray-500">{description}</span>
  </div>
);

export default function ProjectDetailsUI({ project }: { project: Project }) {
  const router = useRouter();
  const user = useUser();

  return (
    <div>
      <div className="bg-movie-poster bg-cover bg-top bg-no-repeat bg-clip-content w-full h-[30vh] md:h-[50vh]"></div>
      <div className="md:flex md:gap-4  md:mt-[-100px] p-4">
        <div className="flex flex-col items-center rounded-lg shadow-md mx-auto p-4 my-4 md:w-[25%] bg-[white] md:my-0">
          <div className="bg-movie-poster bg-cover bg-top bg-no-repeat w-full h-[20vh] md:h-[30vh]"></div>
          <div className="self-start mt-4">
            {project.directors.length > 0 && (
              <Detail
                title={"Director"}
                description={project.directors
                  ?.map(
                    (director) => `${director.firstName} ${director.lastName}`
                  )
                  .join(", ")}
              />
            )}
            {project.writers.length > 0 && (
              <Detail
                title={"Writers"}
                description={project.writers
                  ?.map((writer) => `${writer.firstName} ${writer.lastName}`)
                  .join(", ")}
              />
            )}
            {project.cast.length > 0 && (
              <Detail
                title={"Cast"}
                description={project.cast
                  ?.map((writer) => `${writer.firstName} ${writer.lastName}`)
                  .join(", ")}
              />
            )}

            <Detail title={"Plot"} description={project.description} />
          </div>
        </div>
        <div className="md:w-[70%]">
          <Card>
            <CardBody className="flex flex-row justify-between">
              <div className="flex flex-col gap-8">
                <h2 className="text-lg uppercase font-bold">{project.title}</h2>
                <div className="flex gap-4 flex-wrap">
                  <Chip
                    color="primary"
                    startContent={
                      <StarIcon className="h-5 w-5 text-[#ffd700]" />
                    }
                  >
                    {project.rating}
                  </Chip>
                  <Chip
                    color="primary"
                    startContent={
                      <CalendarIcon className="h-5 w-5 text-[#ffd700]" />
                    }
                  >
                    {moment(project.releaseDate).format("DD/MM/YYYY")}
                  </Chip>
                  <Chip
                    color="primary"
                    startContent={
                      <ClockIcon className="h-5 w-5 text-[#ffd700]" />
                    }
                  >
                    {Math.floor(project.runtime / 60) +
                      "hr " +
                      (project.runtime % 60)}
                    min
                  </Chip>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.genres?.map((genre, idx) => (
                    <Chip
                      key={`genre-${idx}`}
                      variant="bordered"
                      color="primary"
                      size="sm"
                      className="capitalize"
                    >
                      {genre.name}
                    </Chip>
                  ))}
                </div>
                <div className=" flex flex-col gap-1"></div>
                <div className="icons flex gap-5 flex-wrap  items-center">
                  <FaFacebook className="w-6 h-6 text-blue-500 " />
                  <FaYoutube className="w-6 h-6 text-red-500 " />
                  <FaTwitter className="w-6 h-6 text-blue-500 " />
                  <FaInstagram className="w-6 h-6 text-red-500 " />
                  <FaTiktok className="w-6 h-6 text-blue-500 " />
                  <FaLinkedin className="w-6 h-6 text-blue-500 " />
                </div>
                <div>
                  <Button
                    startContent={<ArrowSmallLeftIcon className="w-6 h-6" />}
                    color="default"
                    // href="/projects"
                    onClick={() => router.back()}
                  // as={Link}
                  >
                    Back to projects
                  </Button>
                </div>
              </div>
              <div className="md:w-[50%] h-full md:flex md:flex-col  md:items-end gap-4">
                <div className="flex md:justify-end mt-6 md:mt-0">
                  {user && user._id == project.creator._id ? (
                    <Button
                      className="shadow-lg"
                      color="secondary"
                      href={`/projects/${project._id}/acquisitions`}
                      as={Link}
                    >
                      View Offers
                    </Button>
                  ) : (
                    <Button
                      className="shadow-lg"
                      color="primary"
                      href={`/projects/${project._id}/sendOffer`}
                      as={Link}
                    >
                      Express Interest
                    </Button>
                  )}
                </div>

                <div className="flex mt-4 gap-4 flex-col w-full">
                  {project?.quality && (
                    <div className="flex gap-3">
                      <p className="mr-auto">Quality</p>
                      <Chip radius="sm" color="danger">
                        {project.quality}
                      </Chip>
                    </div>
                  )}
                  {project.languages.length > 0 && (
                    <div className="flex gap-3 flex-wrap">
                      <p className="mr-auto">Langauge</p>
                      {project.languages?.map((language, idx) => (
                        <Chip
                          key={`lang-${idx}`}
                          radius="sm"
                          color="danger"
                          className="capitalize"
                        >
                          {language}
                        </Chip>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
          <div className="mt-6">
            <ClientTabs
              classNames={{
                tabList: "w-[90vw] md:w-full  overflow-scroll",
              }}
              aria-label="Options"
              items={[
                {
                  label: "Synopsis",
                  content: (
                    <Card>
                      <CardBody>{project.synopsis}</CardBody>
                    </Card>
                  ),
                },
                {
                  label: "Awards and Accolades",
                  content: (
                    <Card>
                      <CardBody>
                        {project.awards?.map((award, idx) => (
                          <div
                            key={`award-${idx}`}
                            className="flex gap-2 items-center"
                          >
                            <StarIcon className="h-5 w-5 text-[#ffd700]" />
                            <p>{award}</p>
                          </div>
                        ))}
                      </CardBody>
                    </Card>
                  ),
                },
                {
                  label: "Photos and Videos",
                  content: (
                    <Card>

                      <CardBody>
                        {project.content.map((content, i) => {
                          return (
                            <>
                              {isVideo ? (<video width={340} controls>
                                <source src={content.url} />
                              </video>) : (<Image width={240} src={content.url} />)}
                            </>
                          )
                        })}
                      </CardBody>
                    </Card>
                  ),
                },
                {
                  label: "Technical Details",
                  content: (
                    <Card>
                      <CardBody>
                        <div className="flex flex-col gap-4">
                          {project.technicalDetails?.map((detail, idx) => (
                            <div
                              key={`detail-${idx}`}
                              className="flex gap-3 justify-between md:justify-between w-full"
                            >
                              <p>{detail.label}</p>
                              <Chip radius="sm" color="danger">
                                {detail.value}
                              </Chip>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  ),
                },
                {
                  label: "Production Details",
                  content: (
                    <Card>
                      <CardBody>
                        {/* <ul>
                          {project.productionDetails?.map((detail, idx) => (
                            <li key={`detail-${idx}`}>
                              <p>{detail}</p>
                            </li>
                          ))}
                        </ul> */}
                        {project.productionDetails}
                      </CardBody>
                    </Card>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

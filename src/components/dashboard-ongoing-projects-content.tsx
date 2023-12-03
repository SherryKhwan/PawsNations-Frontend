import React, { useEffect, useState } from "react";
import { getProjectsByFilmmakerID } from "../lib/projects";
import MovieCard from "./PetCard";
import Link from "next/link";
import { useSidebarContext } from "./dashboard-layout/layout-context";
import { Pagination } from "@nextui-org/react";
import { useUser } from "@/lib/providers/user";

const DashboardOngoingProjectsContents = () => {
  const user = useUser();
  const [projects, setProjects] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { queryString } = useSidebarContext();
  console.log(
    "🚀 ~ file: dashboard-ongoing-projects-content.tsx:13 ~ DashboardOngoingProjectsContents ~ queryString:",
    queryString
  );

  useEffect(() => {
    const getOngoingProjects = async () => {
      const { noOfPages, projects: fetchedProjects } =
        await getProjectsByFilmmakerID(true, user._id, 1, "");
      setProjects(fetchedProjects);
      setNumberOfPages(noOfPages);
    };
    getOngoingProjects();
  }, []);
  return (
    <div className="p-4">
      <p className="text-center text-[2rem] my-4">
        Overview of ongoing projects
      </p>
      <div className="flex flex-wrap gap-4 p-2">
        {projects.map((project) => (
          <Link href={`/projects/${project._id}`} key={project._id}>
            <MovieCard
              isOngoing={true}
              isOwnProject={true}
              width={"400"}
              project={project}
            />
          </Link>
        ))}
      </div>
      {projects.length !== 0 ? (
        <div className="mt-4 flex justify-center flex-col items-start ml-14">
          <p className="text-lg font-bold">Page No.</p>
          <Pagination
            total={numberOfPages}
            size="lg"
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      ) : null}
    </div>
  );
};

export default DashboardOngoingProjectsContents;

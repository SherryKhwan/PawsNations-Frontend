import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import Link from "next/link";
import { getProjectsByFilmmakerID } from "@/lib/projects";
import { useSidebarContext } from "./dashboard-layout/layout-context";
import { Pagination } from "@nextui-org/react";
import { useUser } from "@/lib/providers/user";

const DashboardProjectsContents = () => {
  const [projects, setProjects] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { queryString } = useSidebarContext();
  const user = useUser();

  useEffect(() => {
    const getOngoingProjects = async () => {
      const { noOfPages, projects: fetchedProjects } =
        await getProjectsByFilmmakerID(
          false,
          user._id,
          currentPage,
          queryString
        );
      setProjects(fetchedProjects);
      setNumberOfPages(noOfPages);
    };
    getOngoingProjects();
  }, [queryString, currentPage, user._id]);
  return (
    <div className="p-4">
      <p className="text-center text-[2rem] my-4">All Projects</p>
      <div className="flex flex-wrap gap-4 p-2">
        {projects.map((project) => (
          <Link href={`/projects/${project._id}`} key={project._id}>
            <MovieCard
              isOngoing={false}
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

export default DashboardProjectsContents;

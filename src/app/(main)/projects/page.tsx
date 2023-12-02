"use client";

import React, { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/navbar";
import MovieCard from "@/components/movieCard";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { Project } from "@/types/data";
import { Input, Navbar, NavbarContent, Pagination } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons/searchicon";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const numberOfPages = useRef(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const getAllProject = async () => {
    const { noOfPages, projects: fetchedProjects } = await getAllProjects(
      currentPage,
      searchTerm
    );
    numberOfPages.current = noOfPages;
    setProjects(fetchedProjects);
  };

  useEffect(() => {
    getAllProject();
  }, [currentPage, searchTerm]);
  useEffect(() => {
    const id = setTimeout(() => setSearchTerm(debouncedSearchTerm), 1000);
    return () => clearTimeout(id);
  }, [debouncedSearchTerm]);

  return (
    <div>
      <div className="p-6">
        <h1 className="text-lg md:text-[2rem] text-center">
          Browse our awesome collection of movies
        </h1>
        <Navbar
          isBordered className="w-full max-md:hidden my-6"
          classNames={{
            wrapper: "w-full max-w-full",
          }}
        >
          <NavbarContent className="w-full max-md:hidden">
            <Input
              startContent={<SearchIcon />}
              isClearable
              value={debouncedSearchTerm}
              onChange={(e) => setDebouncedSearchTerm(e.target.value)}
              className="w-full"
              classNames={{
                input: "w-full",
                mainWrapper: "w-full",
              }}
              placeholder="Search..."
            />
          </NavbarContent>
        </Navbar>
        <div className="mt-4 flex justify-center flex-col items-end mr-28">
          <p className="text-lg font-bold">Page No.</p>
          <Pagination
            total={numberOfPages.current}
            size="lg"
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
        <div className="mt-4 flex flex-col  items-center gap-5  md:mx-auto p-2">
          {projects.map((project, index) => (
            <Link key={`${index}-${project}`} href={`/projects/${project._id}`}>
              <MovieCard
                project={project}
                isOngoing={false}
                isOwnProject={false}
                width={"810"}
              />
            </Link>
          ))}
        </div>
        <div className="mt-4 flex justify-start flex-col">
          <p className="text-lg font-bold ">Page No.</p>
          <Pagination
            total={numberOfPages.current}
            size="lg"
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

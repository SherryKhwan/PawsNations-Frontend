"use client";
import Navbar from "@/components/navbar";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createProjectSchema } from "@/lib/createProjectSchema";
import { useForm } from "react-hook-form";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import ProjectCreationFAQ from "@/components/projectCreationFAQ";
import CreateProjectForm from "@/components/create-project-form";

type FormData = yup.InferType<typeof createProjectSchema>;

const CreateProjectPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProjectSchema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <div>
      <div className="pt-6 w-[90%] md:w-[60%] mx-auto">
        <h1 className="text-center w-full text-[2rem] md:text-[3rem]">
          Create And Submit Your film project
        </h1>
        <CreateProjectForm />
        <section className="my-10">
          <p className=" md:text-lg text-center">
            A great project should have a compelling pitch, clear production
            details, cast details, writer details, director details, genre,
            release date, title and other neccessary information that gives a
            scout a good idea about the movie
          </p>
        </section>
        <Divider className="my-6" />
        <section className="my-10">
          <p className=" md:text-lg text-center">
            Creating a project on YFilm gives you increased exposure and
            simplified collaboration
          </p>
        </section>{" "}
        <Divider className="my-4" />
        <section className="my-6">
          <h2 className="text-lg text-center">FAQs</h2>
          <ProjectCreationFAQ />
        </section>
      </div>
    </div>
  );
};

export default CreateProjectPage;

"use client";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createProjectSchema } from "@/lib/createProjectSchema";
import { useForm } from "react-hook-form";
import {
  Divider,
  Input,
  Textarea,
  Select,
  SelectItem,
  Selection,
  Button,
} from "@nextui-org/react";
import ProjectCreationFAQ from "@/components/projectCreationFAQ";
import saveProject from "@/lib/api/saveProject";
import { getAllGenres } from "@/lib/genres";
import { Genre, Person } from "@/types/data";
import { json } from "stream/consumers";
import { getAllCrew } from "@/lib/crew";
import SelectWithModal from "./selectWithModal";
import saveCrew from "@/lib/api/saveCrew";

type FormData = yup.InferType<typeof createProjectSchema>;

const CreateProjectForm = () => {
  const [genres, setGenres] = useState<Genre[]>();
  const [directors, setDirectors] = useState<Person[]>();
  const [writers, setWriters] = useState<Person[]>();
  const [cast, setCast] = useState<Person[]>();
  const [selectedGenres, setSelectedGenres] = useState<Selection>();
  const [selectedDirectors, setSelectedDirectors] = useState<Selection>();
  const [selectedWriters, setSelectedWriters] = useState<Selection>();
  const [selectedCast, setSelectedCast] = useState<Selection>();

  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProjectSchema),
  });

  const getAllGenre = async () => {
    const fetchedGenres = await getAllGenres();
    setGenres(fetchedGenres);
  };

  const mapObjectFromId = (array: string, userType: string) => {
    const arrayOfId = array.split(",");
    const crewObj = [];
    if (userType === "cast") {
      for (let i = 0; i < arrayOfId.length; i++) {
        const crewObject = cast.find(
          (castMember) => castMember._id === arrayOfId[i]
        );
        crewObj.push({
          firstName: crewObject.firstName,
          lastName: crewObject.lastName,
          image: crewObject.image,
        });
      }
    } else if (userType === "director") {
      for (let i = 0; i < arrayOfId.length; i++) {
        const crewObject = directors.find(
          (castMember) => castMember._id === arrayOfId[i]
        );
        crewObj.push({
          firstName: crewObject.firstName,
          lastName: crewObject.lastName,
          image: crewObject.image,
        });
      }
    } else if (userType === "writer") {
      for (let i = 0; i < arrayOfId.length; i++) {
        const crewObject = writers.find(
          (castMember) => castMember._id === arrayOfId[i]
        );
        crewObj.push({
          firstName: crewObject.firstName,
          lastName: crewObject.lastName,
          image: crewObject.image,
        });
      }
    }
    return crewObj;
  };

  const getAllDirectors = async () => {
    const fetched = await getAllCrew("director");
    setDirectors(fetched);
  };
  const getAllWriters = async () => {
    const fetched = await getAllCrew("writer");
    setWriters(fetched);
  };
  const getallCast = async () => {
    const fetched = await getAllCrew("cast");
    setCast(fetched);
  };

  const getAllCrewData = async () => {
    await getAllDirectors();
    await getAllWriters();
    await getallCast();
  };

  useEffect(() => {
    getAllGenre();
    getAllCrewData();
  }, []);

  const handleCreate = async (
    firstName: string,
    lastName: string,
    userType: string
  ): Promise<void> => {
    const res = await saveCrew({
      firstName: firstName,
      lastName: lastName,
      userType: userType,
    });
    await getAllCrewData();
  };

  const onSubmit = async (data: FormData) => {
    // const cast = mapObjectFromId(data.cast, "cast");
    // const writers = mapObjectFromId(data.writers, "writer");
    // const director = mapObjectFromId(data.director, "director");
    const cast = data.cast.split(",");
    const writers = data.writers.split(",");
    const director = data.director.split(",");
    const genre = data.genre.split(",");
    await saveProject({ ...data, cast, writers, director, genre });
  };
  return (
    <form className="my-6 md:w-[50%] mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("title")}
        type="text"
        variant="flat"
        label="Title"
        errorMessage={errors.title?.message}
        className="my-4"
      />
      <Input
        {...register("budget")}
        type="text"
        variant="flat"
        label="Budget"
        errorMessage={errors.budget?.message}
        className="my-4"
      />
      <Input
        {...register("language")}
        type="text"
        variant="flat"
        label="Language"
        errorMessage={errors.language?.message}
        className="my-4"
      />
      <div className="flex gap-2">
        <Input
          {...register("colorQuality")}
          type="text"
          variant="flat"
          label="colorQuality"
          errorMessage={errors.colorQuality?.message}
          className="my-4 w-1/2"
        />
        <Input
          {...register("camera")}
          type="text"
          variant="flat"
          label="camera"
          errorMessage={errors.camera?.message}
          className="my-4 w-1/2"
        />
      </div>
      <div className="flex gap-2">
        <Input
          {...register("releaseDate")}
          type="date"
          variant="flat"
          label="releaseDate"
          errorMessage={errors.releaseDate?.message}
          className="my-4 w-1/2"
        />
        <Input
          {...register("runtime")}
          type="text"
          variant="flat"
          label="runtime"
          errorMessage={errors.runtime?.message}
          className="my-4 w-1/2"
        />
      </div>
      <Textarea
        variant="flat"
        label="Synopsis"
        labelPlacement="outside"
        placeholder="Enter the movie synopsis"
        errorMessage={errors.synopsis?.message}
        className=" my-4"
        minRows={4}
        {...register("synopsis")}
      />
      <div className="flex gap-2">
        <Select
          label="Genre"
          {...register("genre")}
          labelPlacement="outside"
          variant="flat"
          placeholder="Select project genres"
          errorMessage={errors.genre?.message}
          selectionMode="multiple"
          selectedKeys={selectedGenres}
          className="my-4"
          onSelectionChange={setSelectedGenres}
        >
          {genres?.map((genre) => (
            <SelectItem key={genre._id} value={genre._id}>
              {genre.name}
            </SelectItem>
          ))}
        </Select>
      </div>

      <SelectWithModal
        handleCreate={handleCreate}
        userType={"director"}
        register={register("director")}
        errors={errors.director?.message}
        arry={directors}
        label="Directors"
        selectedArry={selectedDirectors}
        setSelectedArry={setSelectedDirectors}
      />
      <SelectWithModal
        handleCreate={handleCreate}
        userType={"cast"}
        register={register("cast")}
        errors={errors.cast?.message}
        arry={cast}
        label="Cast"
        selectedArry={selectedCast}
        setSelectedArry={setSelectedCast}
      />

      {/* <Textarea
        {...register("cast")}
        type="text"
        variant="flat"
        label="cast"
        labelPlacement="outside"
        minRows={2}
        errorMessage={errors.cast?.message}
        className="my-6"
        description="Important: Enter comma seperated cast list for the movie"
      /> */}
      <SelectWithModal
        handleCreate={handleCreate}
        userType={"writer"}
        arry={writers}
        register={register("writers")}
        errors={errors.writers?.message}
        label="Writers"
        selectedArry={selectedWriters}
        setSelectedArry={setSelectedWriters}
      />
      {/* <Textarea
        {...register("writers")}
        type="text"
        variant="flat"
        label="writers"
        labelPlacement="outside"
        minRows={2}
        errorMessage={errors.writers?.message}
        className="my-6"
        description="Important: Enter comma seperated writers list for the movie"
      /> */}

      {/* <Textarea
        {...register("productionDetails")}
        type="text"
        variant="flat"
        label="productionDetails"
        labelPlacement="outside"
        minRows={2}
        errorMessage={errors.productionDetails?.message}
        className="my-6"
      /> */}
      {/* <Textarea
        {...register("director")}
        type="text"
        variant="flat"
        label="Director"
        labelPlacement="outside"
        minRows={2}
        errorMessage={errors.director?.message}
        className="my-6"
        description="Important: Enter comma seperated directors list for the movie"
      /> */}
      <Button className="block mx-auto w-1/2" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateProjectForm;

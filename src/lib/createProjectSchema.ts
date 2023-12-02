import * as yup from "yup";

export const createProjectSchema = yup
  .object({
    title: yup.string().required(),
    synopsis: yup.string().required(),
    budget: yup.string().required(),
    genre: yup.string().required("Genre is required"),

    language: yup .string().required(),
    colorQuality: yup.string(),
    camera: yup.string(),
    // aspectRatio: yup.string(),
    releaseDate: yup.date(),
    cast: yup.string(),
    // productionDetails: yup.string(),
    director: yup.string().required(),
    writers: yup.string().required(),
    runtime: yup.string().required(),
  })
  .required();

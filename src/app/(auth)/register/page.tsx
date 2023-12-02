"use client";

import {
  Button,
  Checkbox,
  Input,
  Switch,
  Textarea,
  Card as CardNextUI,
  CardFooter,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { notifyError, notifySuccess } from "@/utils/toast";
import { Select, SelectItem } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { Company } from "@/types/data";

function Card({
  footerText,
  img,
  onClick,
}: {
  footerText: string;
  img: string;
  onClick: () => void;
}) {
  return (
    <CardNextUI
      isFooterBlurred
      radius="lg"
      isPressable
      className="border-none cursor-pointer bg-primary"
      onClick={() => {
        onClick();
        // console.log("hello");
      }}
    >
      <Image
        alt="image"
        className="object-cover"
        height={200}
        src={img}
        width={200}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button
          className="text-base text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          {footerText}
        </Button>
      </CardFooter>
    </CardNextUI>
  );
}

interface RegistrationFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: "filmmaker" | "scout";
  company?: Company;
}

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const [location, setLocation] = useState("");
  const [userType, setUserType] = useState<"filmmaker" | "scout">("filmmaker");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const { push } = useRouter();
  const registerFn = async (data: RegistrationFormData) => {
    // const userType = isSelected ? "scout" : "filmmaker";
    const locObj = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/'${encodeURIComponent(
        location
      )}'.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );
    const locData = locObj.data.features[0];
    const obj: RegistrationFormData = {
      ...data,
      userType,
      company: {
        ...data.company,
        location: {
          coordinates: {
            longitude: locData.center[0],
            latitude: locData.center[1],
          },
          description: locData.place_name,
          zip: locData.context[0].text,
        },
      },
    };
    // const obj = {
    //   ...
    // };
    // !isSelected ? delete obj["company"] : null;
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`,
      obj
    );
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: registerFn,

    onSuccess: (e: any) => {
      notifySuccess("Registration successful");
      push("/login");
    },
    onError: (
      e: AxiosError<{ error: { message: string }; success: boolean }>
    ) => {
      notifyError(e.response.data.error.message);
      console.log(e.response.data.error.message);
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    try {
      mutate(data);
      console.log("Login successful");
    } catch (error) {
      console.error("Login failed");
    }
  };
  if (!userType)
    return (
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl overflow-auto flex flex-col items-center justify-center gap-6">
        <h2
          className="text-center text-2xl text-indigo-900 font-display font-semibold lg:text-left xl:text-3xl
  xl:text-bold"
        >
          Choose User Type
        </h2>
        <Card
          footerText={"Filmmaker"}
          img={"/images/video-camera-dynamic-color.png"}
          onClick={() => {
            console.log("filmmaker");
            setUserType("filmmaker");
          }}
        />
        <Card
          footerText={"Scout"}
          img={"/images/zoom-dynamic-color.png"}
          onClick={() => {
            setUserType("scout");
          }}
        />
      </div>
    );
  return (
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl overflow-auto">
      <h2
        className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
          xl:text-bold"
      >
        Register
      </h2>
      <div className="mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <Input
              type="text"
              variant="underlined"
              label="First Name"
              {...register("firstName", { required: "First Name is required" })}
              //   placeholder="Enter your First Name"
            />
          </div>
          <div className="mt-4">
            <Input
              type="text"
              variant="underlined"
              label="Last Name"
              {...register("lastName", { required: "Last Name is required" })}
              //   placeholder="Enter your First Name"
            />
          </div>
          <div className="mt-4">
            <Input
              type="text"
              variant="underlined"
              label="Email"
              {...register("email", { required: "Email is required" })}
              //   placeholder="Enter your First Name"
            />
          </div>
          <div className="mt-8">
            <Input
              label="Password"
              variant="underlined"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FiEyeOff className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FiEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              {...register("password", { required: "Password is required" })}
              type={isVisible ? "text" : "password"}
              //   className="max-w-xs"
            />
          </div>
          <div className="mt-8">
            {/* <Checkbox defaultSelected>I work for a company</Checkbox> */}
            <div className="flex flex-col gap-2">
              <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                I want to register a company
              </Switch>
            </div>
          </div>

          {isSelected && (
            <div className="mt-8">
              <h2
                className="text-center text-2xl text-indigo-900 font-display font-semibold lg:text-left xl:text-3xl
          xl:text-bold"
              >
                Register A company
              </h2>
              <div className="mt-4">
                <Input
                  type="text"
                  variant="underlined"
                  label="Name"
                  required
                  {...register("company.name")}
                  //   placeholder="Enter your First Name"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-3">
                  {/* <Input
                    type="text"
                    variant="underlined"
                    label="Type"
                    required
                    {...register("company.type")}
                    //   placeholder="Enter your First Name"
                  /> */}
                  <Select
                    label="Select Type Of Company"
                    className="max-w-xs"
                    {...register("company.type")}
                  >
                    {["production", "distribution", "sponsor"].map(
                      (type: string) => (
                        <SelectItem key={type} value={type}>
                          {type[0].toUpperCase() + type.slice(1)}
                        </SelectItem>
                      )
                    )}
                  </Select>
                  <Input
                    type="text"
                    variant="underlined"
                    label="Description"
                    required
                    {...register("company.description")}
                    //   placeholder="Enter your First Name"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-500">Contact</p>

                <div className="flex items-center gap-3">
                  <Input
                    type="email"
                    variant="underlined"
                    label="Email"
                    required
                    {...register("company.contact.email")}
                    //   placeholder="Enter your First Name"
                  />
                  <Input
                    type="phone"
                    variant="underlined"
                    label="Phone"
                    required
                    {...register("company.contact.phone")}
                    //   placeholder="Enter your First Name"
                  />
                </div>
              </div>
              <div className="mt-4">
                <Textarea
                  variant="underlined"
                  label="Address"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  required
                  description="Please enter address in '{house number} {street} {city} {state} {zip}' this format for better geolocation"
                  cols={2}
                  // {...register("company.location")}
                />
              </div>
            </div>
          )}
          {/* <div className="mt-10">
            <button
              className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg"
            >
              Register
            </button>
          </div> */}
          <div className="mt-10">
            <Button
              isLoading={isLoading}
              type="submit"
              className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg"
            >
              Register
            </Button>
          </div>
        </form>
        <div className="my-12 text-sm font-display font-semibold text-gray-700 text-center">
          Already have an account ?{" "}
          <Link
            href="login"
            className="cursor-pointer text-indigo-600 hover:text-indigo-800"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

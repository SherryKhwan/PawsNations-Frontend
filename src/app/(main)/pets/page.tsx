"use client";

import React, { useEffect, useRef, useState } from "react";
import PetCard from "@/components/PetCard";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { Pet } from "@/types/data";
import { Input, Navbar, NavbarContent, Pagination } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons/searchicon";

const PetsPage = () => {
  const [projects, setProjects] = useState<Pet[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);
  const numberOfPages = useRef(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const getAllPets = async () => {
    const fetchedPets: Pet[] = [
      {
        _id: "1",
        name: "Garfield",
        gender: 'male',
        description: "An orange cat",
        price: 10000,
        image: {
          key: "1",
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1024px-RedCat_8727.jpg',
        },
        age: 1,
        breed: {
          _id: "1",
          name: 'Domestic',
          description: 'A domestic cat found on the streets',
          origin: 'Sub-Continent',
        },
        colors: ['Orange'],
        vaccinationStatus: 'Vaccinated',
        adoptionStatus: 'Available',
        isSpayedOrNeutered: true,
        category: {
          _id: "1",
          name: 'Cat',
          description: 'A cat found on the streets'
        },
        owner: {
          _id: "1",
          email: 'john@example.com',
          phone: '1234567890',
          createdAt: '2022-01-01T00:00:00.000Z',
          firstName: 'John',
          gender: 'male',
          lastName: 'Doe',
          location: {
            area: "Area 1",
            city: {
              _id: "1",
              name: "City 1",
            },
            country: {
              _id: "1",
              name: "Country 1",
              states: [],
            },
            state: {
              _id: "1",
              name: "State 1",
              cities: [],
            }
          },
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet molestie malesuada, nunc nisl tincidunt nisl, eget ultricies nisi nisl sit amet nisl.',
        },
        condition: "healthy",
        personality: ["friendly", "playful"],
        size: "small",
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
        location: {
          area: "Area 1",
          city: {
            _id: "1",
            name: "City 1",
          },
          country: {
            _id: "1",
            name: "Country 1",
            states: [],
          },
          state: {
            _id: "1",
            name: "State 1",
            cities: [],
          }
        },
      },
      {
        _id: "1",
        name: "Garfield",
        price: 10000,
        gender: 'male',
        description: "An orange cat",
        image: {
          key: "1",
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1024px-RedCat_8727.jpg',
        },
        age: 1,
        breed: {
          _id: "1",
          name: 'Domestic',
          description: 'A domestic cat found on the streets',
          origin: 'Sub-Continent',
        },
        colors: ['Orange'],
        vaccinationStatus: 'Vaccinated',
        adoptionStatus: 'Available',
        isSpayedOrNeutered: true,
        category: {
          _id: "1",
          name: 'Cat',
          description: 'A cat found on the streets'
        },
        owner: {
          _id: "1",
          gender: 'male',
          email: 'john@example.com',
          phone: '1234567890',
          createdAt: '2022-01-01T00:00:00.000Z',
          firstName: 'John',
          lastName: 'Doe',
          location: {
            area: "Area 1",
            city: {
              _id: "1",
              name: "City 1",
            },
            country: {
              _id: "1",
              name: "Country 1",
              states: [],
            },
            state: {
              _id: "1",
              name: "State 1",
              cities: [],
            }
          },
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet molestie malesuada, nunc nisl tincidunt nisl, eget ultricies nisi nisl sit amet nisl.',
        },
        condition: "healthy",
        personality: ["friendly", "playful"],
        size: "small",
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
        location: {
          area: "Area 1",
          city: {
            _id: "1",
            name: "City 1",
          },
          country: {
            _id: "1",
            name: "Country 1",
            states: [],
          },
          state: {
            _id: "1",
            name: "State 1",
            cities: [],
          }
        },
      }
    ];
    setPets(fetchedPets);
  }

  const getAllProject = async () => {
    const { noOfPages, projects: fetchedProjects } = await getAllProjects(
      currentPage,
      searchTerm
    );
    numberOfPages.current = noOfPages;
    setProjects(fetchedProjects);
  };

  useEffect(() => {
    getAllPets();
  }, []);


  // useEffect(() => {
  //   getAllProject();
  // }, [currentPage, searchTerm]);
  // useEffect(() => {
  //   const id = setTimeout(() => setSearchTerm(debouncedSearchTerm), 1000);
  //   return () => clearTimeout(id);
  // }, [debouncedSearchTerm]);

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
            total={5}
            // total={numberOfPages.current}
            size="lg"
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
        <div className="mt-4 flex flex-col  items-center gap-5  md:mx-auto p-2">
          {pets.map((pet, index) => (
            <Link key={`${index}-${pet}`} href={`/pets/${pet._id}`}>
              <PetCard
                pet={pet}
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
            // total={numberOfPages.current}
            total={5}
            size="lg"
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PetsPage;

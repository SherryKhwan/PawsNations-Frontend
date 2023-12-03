import { type } from "os";

type Media = {
  key: string;
  url: string;
};

type User = {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  image?: Media;
  _id: string;
  location: Location;
  createdAt: string;
  isDeleted?: boolean;
  deletedAt?: string;
  rating?: number;
  email: string;
  phone: string;
  pets?: Pet[];
  bio?: string;
};

type Breed = {
  _id: string;
  origin: string;
  name: string;
  image?: Media;
  description: string;
  pet?: Pet;
  relatedBreeds?: Breed[];
};

export type Pet = {
  _id: string;
  name: string,
  description: string,
  gender: 'male' | 'female',
  image: Media,
  breed: Breed,
  category: Category,
  vaccinationStatus: 'Vaccinated' | 'Not Vaccinated' | 'Not Applicable',
  adoptionStatus?: 'Available' | 'Pending Adoption' | 'Adopted',
  isSpayedOrNeutered: boolean,
  colors: string[],
  content?: Media[] = [],
  owner: User;
  price?: number = 0;
  createdAt: string;
  updatedAt: string;
  location: Location;
  tags?: string[] = [];
  size: 'small' | 'medium' | 'large';
  age: number;
  personality: Personality[];
  condition: Condition;
};

type Condition = 'healthy' | 'sick' | 'wounded' | 'injured' | 'unknown' ;

type Personality = 'friendly' | 'energetic' | 'calm' | 'aggressive' | 'playful';

type Category = {
  _id: string;
  name: string;
  description: string;
  image?: Media;
};

type City = {
  _id: string;
  name: string;
}

type State = {
  _id: string;
  name: string;
  cities: City[];
}

type Country = {
  _id: string;
  name: string;
  states: State[]
}

type Location = {
  city: City,
  state: State,
  country: Country,
  address?: string,
  zip?: string,
  area: string,
  longitude?: number,
  latitude?: number,
}

export type Negotitaion = {
  _id: string;
  to: User;
  from: User;
  type: string;
  subType: string;
  paymentPlan: string;
  amount?: number;
  revenueShare?: number;
  distributionRegions?: string[];
  addTerms?: string;
  acquisition: string;
};

export type Acquisition = {
  _id: string;
  project: Project;
  scout: User;
  filmmaker: User;
  status: string;
};

export type OfferType = {
  _id: string;
  name: string;
  description: string;
  subtypes: OfferSubtype[];
};

export type OfferSubtype = {
  name: string;
  description?: string;
  paymentPlans: string[];
};

export type DistributionRegion = {
  _id: string;
  name: string;
  subregions: string[];
};

export type PricePlan = {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
};

export type Company = {
  contact: { email: string; phone: string };
  location: {
    coordinates: { latitude: number; longitude: number };
    description: string;
    zip: string;
  };
  description: string;
  name: string;
  type: string;
};

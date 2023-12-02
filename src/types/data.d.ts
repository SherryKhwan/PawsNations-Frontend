type Image = {
  key: string;
  url: string;
};
type Person = {
  firstName: string;
  lastName: string;
  image?: Image;
  _id: string;
  createdAt: string;
};

type Crew = {
  firstName: string;
  lastName: string;
  _id?: string;
  userType: string;
  image?: Image;
};

type Genre = {
  _id: string;
  name: string;
  description: string;
  popularity: number;
  averageRating: number;
  parentGenre?: string;
  relatedGenres?: string[];
};

type User = Person & {
  email: string;
  userType: string;
};

export type Project = {
  runtime: number;
  productionDetails: any[];
  title: string,
  description: string,
  image?: {
    key: string,
    url: string,
  },
  genres: Genre[],
  writers: Person[],
  cast: Person[],
  directors: Person[],
  languages: string[],
  quality: string,
  releaseDate: string,
  synopsis: string,
  needsFunding: boolean,
  content: [{
    key: string;
    url: string;
  }];
  creator: User;
  rating: number;
  awards: string[];
  status: "draft" | "submitted" | "active" | "acquired";
  acquirer?: User;
  technicalDetails: {
    label: string;
    value: string;
  }[];

  createdAt: string;
  updatedAt: string;
  _id: string;
};

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

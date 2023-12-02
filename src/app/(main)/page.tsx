"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { CubeIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import { useState } from "react";
import { Divider } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/tabs";
import PricePlanCard from "@/components/pricingCard";
import { PricePlan } from "@/types/data";
import Newsletter from "@/components/newsletter";
const features = [
  {
    title: "Streamline Project Negotitations",
    description:
      "Effortlessly negotiate film projects and collaborate with ease on YFilm's platform. Connect with filmmakers and scouts to bring your creative vision to life.",
  },
  {
    title: "Creative collaboration",
    description:
      "YFilm fosters a growing community of filmmakers and scouts, providing a platform for creative collaboration and the exchange of ideas. Join the community and unlock new opportunities for your films.",
  },
  {
    title: "Growing Community",
    description:
      "Join a vibrant community of filmmakers and scouts on Yfilm. Connect network, and collaborate with like minded like minded professionals to expand your creative horizon",
  },
];

const learnMoreData = [
  {
    Icon: CubeIcon,
    title: "Register, create, filmmaker/scouts",
    subtitle: "Join YFilm to start your filmmaking journey today.",
    button1Text: "Register",
    button1Link: "#",
    button2Text: "Learn More",
    button2Link: "#",
  },
  {
    Icon: CubeIcon,
    title: "Register, create, filmmaker/scouts",
    subtitle: "Join YFilm to start your filmmaking journey today.",
    button1Text: "Register",
    button1Link: "#",
    button2Text: "Learn More",
    button2Link: "#",
  },
  {
    Icon: CubeIcon,
    title: "Register, create, filmmaker/scouts",
    subtitle: "Join YFilm to start your filmmaking journey today.",
    button1Text: "Register",
    button1Link: "#",
    button2Text: "Learn More",
    button2Link: "#",
  },
];

const featuredData = [
  { name: "John Doe", image: "/images/featured/1.png" },
  { name: "Ben Clark", image: "/images/featured/2.png" },
  { name: "Aston Creed", image: "/images/featured/3.png" },
  { name: "John Doe", image: "/images/featured/4.png" },
];

const featureMain = {
  review:
    "YFilm has been an incredible platform for connecting filmmakers and scouts. It has streamlined the negotiation process and allowed for seamless collaboration on film projects.",
  image: "/images/featured/4.png",
  name: "John Doe",
  designation: "Film Producer",
};

const pricePlans: PricePlan[] = [
  {
    name: "Basic Plan",
    description: "Perfect for beginners and small projects",
    price: { monthly: 19, yearly: 180 },
    features: [
      "Easy-to-use interface",
      "24/7 customer support",
      "Access to project templates",
    ],
  },
  {
    name: "Business Plan",
    description: "Ideal for established filmmakers and larger projects",
    price: { monthly: 29, yearly: 280 },
    features: [
      "Easy-to-use interface",
      "24/7 customer support",
      "Access to project templates",
    ],
  },
];

export default function Home() {
  const [selectedFeatureIdx, setSelectedFeatureIdx] = useState(0);
  return (
    <main>
      <div className="w-full h-[50vh] relative">
        <Image
          fill
          alt="NextUI hero Image with delay"
          src="/images/family.jpg"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="container mx-auto flex flex-col gap-y-20 py-20 px-5">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold leading-tight">
              Connect with pet owners and pet lovers all over from Pakistan.
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-small font-extralight">
              PawNations is a pioneering platform for connecting pet shelters with potential adapters by providing users with a platform to easily discover and engage with available pets, view their pictures and discuss pet related topics including diets, medicines and common problems            </p>
            <div className="mt-8 flex gap-4">
              <Button color="primary">Join</Button>
              <Button color="secondary">Learn More</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 h-[70vh] relative">
            <Image
              fill
              alt="NextUI hero Image with delay"
              src="/images/landing-hero.jpg"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="md:w-1/2 md:pr-5">
            <h2 className="font-bold text-2xl mb-4 leading-normal">
              Streamline film project negotitations and foster creative
              collboration with YFilm
            </h2>
            <p>
              YFilm provides filmmakers and scouts with a pioneering platform
              that simplifies the process of negotiating film projects and
              encouragesa creative collaboration. With our innovative features
              and user friendly interface, you can easily connect with industry
              professionals, showcase your work, and
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 h-[70vh] relative">
            <Image
              fill
              alt="NextUI hero Image with delay"
              src="/images/landing-hero.jpg"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="md:w-1/2 md:pr-5 flex flex-col gap-7">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`pl-10 cursor-pointer ${idx === selectedFeatureIdx ? "border-l-2 border-solid" : ""
                  }`}
                onClick={() => setSelectedFeatureIdx(idx)}
              >
                <h2 className="font-bold text-xl mb-4 leading-normal">
                  {feature.title}
                </h2>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {learnMoreData.map((data, idx) => (
            <div key={idx}>
              <data.Icon className="h-10 w-10" />
              <h2 className="text-2xl font-bold mt-10">{data.title}</h2>
              <p className="text-sm mt-4">{data.subtitle}</p>
              <div className="flex mt-10 gap-4">
                <Button color="primary" variant="ghost">
                  {data.button1Text}
                </Button>
                <Button
                  endContent={<ChevronRightIcon className="h-3 w-3" />}
                  color="secondary"
                  variant="light"
                >
                  {data.button2Text}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Divider />
        {/* featured */}
        <div>
          <div className="flex flex-wrap gap-5 justify-center md:justify-between">
            <h3 className="w-full md:max-w-sm">
              Featured by renowned filmmakers and industry-leading scouts
            </h3>
            {featuredData.map((data, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Avatar color="primary" size="lg" src={data.image} />
                <div className="mt-4 text-sm">{data.name}</div>
              </div>
            ))}
          </div>

          {/* main feature */}
          <div className="mt-10 flex flex-col items-center">
            <h2 className="max-w-lg text-center font-semibold">
              {featureMain.review}
            </h2>

            <Avatar
              className="mt-10"
              color="primary"
              size="lg"
              src={featureMain.image}
            />

            <div className="text-sm text-center mt-5">
              <div className="font-bold">{featureMain.name}</div>
              <div>{featureMain.designation}</div>
            </div>
          </div>
        </div>
        <Divider />

        {/* pricing plans */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Pricing Plans</h1>
          <h3 className="text-sm font-light mt-4">
            Choose the pricing plan that works best for you
          </h3>
          <Tabs
            aria-label="Options"
            variant="light"
            color="secondary"
            classNames={{ base: "mt-10", panel: "w-full flex justify-center" }}
            items={[
              { id: "monthly", label: "Monthly" },
              { id: "yearly", label: "Yearly" },
            ]}
          >
            {(planType) => (
              <Tab key={planType.id} title={planType.label}>
                <div className="grid grid-cols-2 gap-10 pt-10">
                  {pricePlans.map((plan, idx) => (
                    <PricePlanCard
                      key={`plan-${idx}`}
                      pricePlan={plan}
                      variant={planType.id}
                    />
                  ))}
                </div>
              </Tab>
            )}
          </Tabs>
        </div>

        {/* join now */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Join the YFilm Community Today
            </h1>
            <h3 className="mt-5 text-xs">
              Discover new film projects and collaborate with talented
              filmmakers
            </h3>
          </div>
          <div className="flex gap-5">
            <Button color="primary">Sign Up</Button>
            <Button color="primary" variant="ghost">
              Learn More
            </Button>
          </div>
        </div>

        <Divider />
        {/* newsletter */}
        <Newsletter />
      </div>
    </main>
  );
}

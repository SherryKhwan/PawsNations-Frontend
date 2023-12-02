import { DistributionRegion } from "@/types/data";

export default async function getDistributionRegions(): Promise<
  DistributionRegion[]
> {
  return [
    {
      _id: "1",
      name: "Global",
      subregions: [],
    },
    {
      _id: "2",
      name: "Americas",
      subregions: ["North America", "South America"],
    },
    {
      _id: "3",
      name: "Europe",
      subregions: ["France", "Germany", "Italy", "Spain", "United Kingdom"],
    },
  ];
}

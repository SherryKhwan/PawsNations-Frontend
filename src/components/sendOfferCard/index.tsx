import { SendOfferCardUI } from "./SendOfferCardUI";
import getOfferTypes from "@/lib/api/getOfferTypes";
import getDistributionRegions from "@/lib/api/getDistibutionRegions";
import { Acquisition, Project } from "@/types/data";

export default async function SendOfferCard({
  project,
  acquisition,
}: {
  project: Project;
  acquisition?: Acquisition;
}) {
  const offerTypes = await getOfferTypes();
  const distributionRegions = await getDistributionRegions();
  return (
    <SendOfferCardUI
      offerTypes={offerTypes}
      distributionRegions={distributionRegions}
      project={project}
      acquisition={acquisition}
    />
  );
}

import ProjectCard from "@/components/projectCard";
import SendOfferCard from "@/components/sendOfferCard";
import getAcquisition from "@/lib/api/getAcquisition";
import getProjectById from "@/lib/api/getProject";
import React from "react";

export default async function SendOffer({ params }) {
  const { acquisitionId } = params;
  const acquisition = await getAcquisition(acquisitionId);
  const project = await getProjectById(acquisition.project._id);

  return (
    <main>
      <div className="bg-background pt-5 px-10 flex flex-col gap-4">
        <ProjectCard project={project} />
        <SendOfferCard project={project} acquisition={acquisition} />
      </div>
    </main>
  );
}

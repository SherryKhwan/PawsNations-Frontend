import ProjectCard from "@/components/projectCard";
import SendOfferCard from "@/components/sendOfferCard";
import getProjectById from "@/lib/api/getProject";
import React from "react";

export default async function SendOffer({ params }) {
  const { id: projectId } = params;
  const project = await getProjectById(projectId);
  return (
    <main>
      <div className="bg-background pt-5 px-10 flex flex-col gap-4">
        <ProjectCard project={project} />
        <SendOfferCard project={project} />
      </div>
    </main>
  );
}

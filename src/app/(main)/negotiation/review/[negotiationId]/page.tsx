import NegotiationDetailsCard from "@/components/negotaitionDetailsCard";
import ProjectCard from "@/components/projectCard";
import getAcquisition from "@/lib/api/getAcquisition";
import getNegotiation from "@/lib/api/getNegotiation";
import React from "react";

export default async function NegotiationReview({ params }) {
  const { negotiationId } = params;
  const negotiation = await getNegotiation(negotiationId);
  const acquisition = await getAcquisition(negotiation.acquisition);

  return (
    <main className="mb-4">
      <div className="container mx-auto px-4 flex flex-col gap-4 pt-5">
        <ProjectCard project={acquisition.project} />
        <NegotiationDetailsCard
          negotiation={negotiation}
          acquisition={acquisition}
        />
      </div>
    </main>
  );
}

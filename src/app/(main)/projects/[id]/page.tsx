import React from "react";

import getProject from "@/lib/api/getProject";
import ProjectDetailsUI from "./components/projectDetailsUI";

export default async function ProjectDetailsPage({ params }) {
  const { id: projectId } = params;
  const project = await getProject(projectId);

  return <ProjectDetailsUI project={project} />;
}

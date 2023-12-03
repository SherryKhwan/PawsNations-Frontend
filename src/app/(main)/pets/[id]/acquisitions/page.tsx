import getAcquisitions from "@/lib/api/getAcquisitions";
import AcquisitionsUI from "./components/AcquisitionsUI";

export default async function Acquisitions({ params }) {
  const { id: projectId } = params;
  const acquisitions = await getAcquisitions(projectId);

  return <AcquisitionsUI acquisitions={acquisitions} />;
}

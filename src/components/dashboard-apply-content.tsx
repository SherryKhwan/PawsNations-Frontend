import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const contents = [
  "Apply For Jobs",
  "Apply For Grants",
  "Apply For Funding Opportunities",
];

const CardContent = ({ text }: { text: string }) => (
  <Card className="w-[300px] h-[300px] ">
    <CardBody className="flex justify-center items-center">
      <Link className="text-blue-500" href="#">
        {text}
      </Link>
    </CardBody>
  </Card>
);

const DashboardApplyContent = () => {
  return (
    <div className="p-4 flex justify-center w-full flex-wrap gap-4 ">
      {contents.map((content, index) => (
        <CardContent key={`${index}-${content}`} text={content} />
      ))}
    </div>
  );
};

export default DashboardApplyContent;

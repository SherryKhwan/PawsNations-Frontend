import { PricePlan } from "@/types/data";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Button, Card, Chip, Divider } from "@nextui-org/react";
import { features } from "process";

const variantAbbreviations = {
  yearly: "yr",
  monthly: "month",
};

export default function PricePlanCard({
  pricePlan,
  variant,
}: {
  pricePlan: PricePlan;
  variant: string;
}) {
  return (
    <Card className="p-5">
      <div className="font-bold text-sm">{pricePlan.name}</div>
      <div className="text-sm mt-1">{pricePlan.description}</div>
      <Divider className="my-5" />

      <div className="mt-5">
        <h1 className="text-3xl font-bold">
          ${pricePlan.price[variant]}/{variantAbbreviations[variant]}
        </h1>
        {variant === "monthly" ? (
          <h3 className="text-xs mt-3">
            Save{" "}
            {(
              (1 - pricePlan.price.yearly / (pricePlan.price.monthly * 12)) *
              100
            ).toFixed(0)}
            % with annual plan
          </h3>
        ) : (
          ""
        )}
        <Button variant="solid" color="primary" className="mt-7 text-xs w-full">
          Get started
        </Button>
      </div>

      <Divider className="my-5" />
      <div className="flex flex-col gap-3">
        {pricePlan.features.map((feature, idx) => (
          <Chip
            key={`feature-${idx}`}
            variant="light"
            startContent={<CheckIcon className="h-3 w-3" />}
          >
            {feature}
          </Chip>
        ))}
      </div>
    </Card>
  );
}

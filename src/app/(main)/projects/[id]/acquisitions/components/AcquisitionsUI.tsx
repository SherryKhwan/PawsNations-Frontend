"use client";

import { Acquisition, Negotitaion } from "@/types/data";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";
import React, { useEffect, useMemo, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";

import {
  CurrencyDollarIcon,
  PencilIcon,
  ShareIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@nextui-org/link";
import UserAvatar from "@/components/userAvatar";
import getNegotiations from "@/lib/api/getNegotiations";
import { Spinner } from "@nextui-org/spinner";
import { useUser } from "@/lib/providers/user";

export default function AcquisitionsUI({
  acquisitions,
}: {
  acquisitions: Acquisition[];
}) {
  const user = useUser();

  const [selectedAcquisitionIdx, setSlectedOfferIdx] = useState(0);
  const [negotiations, setNegotiations] = useState<Negotitaion[]>([]);
  const [negotiationsLoading, setNegotiationsLoading] = useState(false);
  const selectedAcquisition = useMemo(
    () => acquisitions[selectedAcquisitionIdx],
    [acquisitions, selectedAcquisitionIdx]
  );

  useEffect(() => {
    const onAcquisitionChange = async () => {
      setNegotiationsLoading(true);
      if (selectedAcquisition) {
        const negotiations = await getNegotiations(selectedAcquisition._id);
        setNegotiations(negotiations);
      }
      setNegotiationsLoading(false);
    };
    onAcquisitionChange();
  }, [selectedAcquisition]);

  return (
    <main className="flex-grow flex">
      <div className="w-full flex">
        <div className="w-1/4 p-2 flex flex-col">
          {acquisitions.map((acquisition, idx) => (
            <div
              key={`option-${idx}`}
              className={twMerge(
                "p-2 rounded-md cursor-pointer transition-all",
                idx === selectedAcquisitionIdx
                  ? "bg-primary"
                  : "hover:bg-secondary"
              )}
              onClick={() => setSlectedOfferIdx(idx)}
            >
              <UserAvatar key={`acquisition-${idx}`} user={acquisition.scout} />
            </div>
          ))}
        </div>
        <Divider orientation="vertical" />
        <div className="flex-grow">
          <div className="w-full h-full">
            {negotiationsLoading && (
              <div className="flex items-center justify-center h-full">
                <Spinner size="lg" />
              </div>
            )}
            {!negotiationsLoading &&
              selectedAcquisition &&
              negotiations?.length > 0 && (
                <div className="p-2 flex flex-col gap-10">
                  {negotiations.map((negotiation) => (
                    <Link
                      key={`negotiation-${negotiation._id}`}
                      href={`/negotiation/review/${negotiation._id}`}
                      className={twJoin(
                        "w-fit",
                        negotiation.from._id === user._id
                          ? "ml-auto"
                          : "mr-auto"
                      )}
                    >
                      <Card className="w-full w-sm hover:-translate-y-2 cursor-pointer hover:bg-secondary">
                        <CardBody className="grid grid-cols-2 gap-2">
                          {[
                            {
                              label: "Offer Type",
                              value: negotiation.type,
                              icon: TagIcon,
                            },
                            {
                              label: "Offer Terms",
                              value: negotiation.subType,
                              icon: PencilIcon,
                            },
                            {
                              label: "Payment Plan",
                              value: negotiation.paymentPlan,
                              icon: CurrencyDollarIcon,
                            },
                            {
                              label: "Revenue Share",
                              value: negotiation.revenueShare,
                              unit: "%",
                              icon: ShareIcon,
                            },
                          ].map(({ label, value, unit, icon }) => (
                            <>
                              <div className="text-xs flex items-center">
                                <span className="mr-2">{label}</span>
                                {icon &&
                                  React.createElement(icon, {
                                    className: "h-3 w-3 text-primary",
                                  })}
                              </div>

                              <div className="font-bold">
                                {value}
                                {unit}
                              </div>
                            </>
                          ))}
                        </CardBody>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </main>
  );
}

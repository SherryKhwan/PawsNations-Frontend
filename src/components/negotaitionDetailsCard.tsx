"use client";

import { Acquisition, Negotitaion, User } from "@/types/data";
import React from "react";
import Range from "@/components/range";
import UserAvatar from "@/components/userAvatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  PencilIcon,
  ShareIcon,
  TagIcon,
  TicketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@nextui-org/link";
import getAcquisition from "@/lib/api/getAcquisition";
import { useUser } from "@/lib/providers/user";

const statusIcons = {
  pending: ClockIcon,
  accepted: TicketIcon,
  rejected: XMarkIcon,
};

export default function NegotiationDetailsCard({
  negotiation,
  acquisition,
}: {
  negotiation: Negotitaion;
  acquisition: Acquisition;
}) {
  const user = useUser();

  return (
    <Card>
      <CardBody>
        <h1 className="text-xl mb-4">Offer Details</h1>
        <div className="p-10 flex items-center justify-center">
          <UserAvatar user={acquisition.scout} />

          <div className="w-72 px-5 flex items-center justify-center">
            <div className="w-full h-[1px] bg-foreground-300"></div>
          </div>
          <UserAvatar user={acquisition.filmmaker} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 ">
          <DealTerm
            heading="Offer Type"
            value={negotiation.type}
            icon={TagIcon}
          />
          <DealTerm
            heading="Offer Terms"
            value={negotiation.subType}
            icon={PencilIcon}
          />

          {negotiation.distributionRegions &&
            negotiation.distributionRegions.length > 0 && (
              <DealTerm
                heading="Distribution Regions"
                value={negotiation.distributionRegions.join(", ")}
                icon={GlobeAltIcon}
              />
            )}

          <DealTerm
            heading="Payment Plan"
            value={negotiation.paymentPlan}
            icon={CurrencyDollarIcon}
          />

          {negotiation.amount && negotiation.amount > 0 ? (
            <DealTerm
              heading="Amount"
              value={`$${negotiation.amount}`}
              icon={CurrencyDollarIcon}
            />
          ) : (
            ""
          )}

          {negotiation.revenueShare && (
            <div>
              <div className="text-small  flex items-center">
                <span className="mr-1 text-foreground-500">Revenue Share</span>
                <span>
                  <ShareIcon className="h-5 w-5 text-primary" />
                </span>
              </div>
              <Range
                value={negotiation.revenueShare}
                min={0}
                max={100}
                unit="%"
                endLabels={["Film Maker", "Scout"]}
              />
            </div>
          )}

          {acquisition.status && (
            <DealTerm
              heading="Status"
              value={acquisition.status}
              icon={statusIcons[acquisition.status]}
            />
          )}
        </div>
        {negotiation.addTerms && (
          <div className="mt-10">
            <span className="text-foreground-500">Additional Terms</span>
            <div className="mt-3 py-4 pl-3 pr-10 rounded-lg border">
              {negotiation.addTerms.split("\n").map((term, idx) => (
                <div key={idx} className="p-1 mb-2 flex">
                  <span>
                    <CheckIcon className="h-4 w-4 mt-1 mr-1 text-success" />
                  </span>
                  {term}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardBody>
      <CardFooter className="justify-end flex gap-2">
        {user && negotiation.from._id === user._id ? (
          <>
            <Button
              as={Link}
              variant="solid"
              color="secondary"
              href={`/negotiation/${acquisition._id}`}
            >
              New Offer
            </Button>
            <Button
              as={Link}
              variant="solid"
              color="primary"
              href={`/projects/${acquisition.project._id}/acquisitions`}
            >
              View Trail
            </Button>
          </>
        ) : (
          <>
            <Button
              as={Link}
              variant="solid"
              color="primary"
              href={`/negotiation/${acquisition._id}`}
            >
              Negotiate
            </Button>
            <Button variant="solid" color="success">
              Accept
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}

const DealTerm = ({ heading, value, icon }) => {
  return (
    <div>
      <div className="text-small  flex items-center">
        <span className="mr-1 text-foreground-500">{heading}</span>
        {icon && (
          <span>
            {React.createElement(icon, { className: "h-5 w-5 text-primary" })}
          </span>
        )}
      </div>
      <h2 className="text-large capitalize">{value}</h2>
    </div>
  );
};

"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";

import {
  OfferType,
  OfferSubtype,
  DistributionRegion,
  User,
  Project,
  Acquisition,
} from "@/types/data";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { useEffect, useMemo, useState } from "react";
import Select from "../select";
import Range from "../range";
import sendNegotiation from "@/lib/api/sendNegotiation";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/providers/user";

const rangePaymentPlans = ["Royalties", "Revenue Share"];

export const SendOfferCardUI = ({
  offerTypes,
  distributionRegions,
  project,
  acquisition,
}: {
  offerTypes: OfferType[];
  distributionRegions: DistributionRegion[];
  project: Project;
  sendTo?: string;
  acquisition?: Acquisition;
}) => {
  const router = useRouter();
  const user = useUser();

  const [selectedOfferType, setSelectedOfferType] = useState<OfferType>(null);
  const [selectedOfferSubtype, setSelectedOfferSubtype] =
    useState<OfferSubtype>(null);

  const [selectedRegion, setSelectedRegion] = useState<string>(null);

  const [selectedPaymentPlan, setSelectedPayementPlan] = useState<string>("");
  const [addTerms, setAddTerms] = useState<string>("");

  const [amount, setAmount] = useState<string>("");
  const [revenueShare, setRevenueShare] = useState<number>(0);

  useEffect(() => {
    setSelectedOfferSubtype(null);
    setSelectedPayementPlan("");
  }, [selectedOfferType]);

  const isRangePaymentPlan = useMemo(
    () => rangePaymentPlans.includes(selectedPaymentPlan),
    [selectedPaymentPlan]
  );

  const canSendOffer = useMemo(
    () =>
      selectedOfferType &&
      selectedOfferSubtype &&
      selectedPaymentPlan &&
      (isRangePaymentPlan ? revenueShare : amount),
    [
      selectedOfferType,
      selectedOfferSubtype,
      selectedPaymentPlan,
      revenueShare,
      amount,
      isRangePaymentPlan,
    ]
  );

  const [sendingOffer, setSendingOffer] = useState(false);
  const handleSend = async () => {
    setSendingOffer(true);
    const sendTo =
      acquisition && user
        ? acquisition.filmmaker._id === user._id
          ? acquisition.scout._id
          : acquisition.filmmaker._id
        : project.creator._id;

    const negotiation = await sendNegotiation({
      project: project._id,
      from: user._id,
      to: sendTo,
      type: selectedOfferType.name,
      subType: selectedOfferSubtype.name,
      paymentPlan: selectedPaymentPlan,
      amount: Number(amount),
      addTerms,
      // distributionRegions: selectedRegion ? [selectedRegion] : [],
      revenueShare,
    });
    router.push(`/negotiation/review/${negotiation._id}`);
    setSendingOffer(false);
  };

  return (
    <Card>
      <CardBody>
        <h1 className="text-lg font-bold mb-4">Offer Details</h1>
        <div className="flex flex-col w-fit mb-2">
          <Select
            label="Deal Type"
            placeholder="Select Deal Type"
            onSelect={(selectedOfferTypeIdx) =>
              setSelectedOfferType(offerTypes[Number(selectedOfferTypeIdx)])
            }
            value={selectedOfferType?.name}
            items={offerTypes.map((offerType, key) => ({
              name: offerType.name,
              key,
              description: offerType.description,
            }))}
          />
        </div>

        {selectedOfferType ? (
          <div className="pl-2">
            <p className="text-foreground-500 mb-4">
              {selectedOfferType.description}
            </p>

            {selectedOfferType.name === "Distribution" ? (
              <div className="flex flex-col mb-4 w-fit">
                <label
                  htmlFor="region"
                  className="text-small flex items-center font-medium pb-1.5"
                >
                  <GlobeAltIcon className="h-4 w-4 mr-1" />
                  <span>Region</span>
                </label>
                <Dropdown>
                  <DropdownTrigger>
                    {selectedRegion ? (
                      <Button variant="solid">{selectedRegion}</Button>
                    ) : (
                      <Button variant="ghost" className="px-4 py-2">
                        Select Region
                      </Button>
                    )}
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="flat"
                    onAction={(key) => setSelectedRegion(String(key))}
                    items={distributionRegions}
                    aria-label="Offer Types"
                  >
                    {(distributionRegion: DistributionRegion) => {
                      if (distributionRegion.subregions.length > 0) {
                        return (
                          <DropdownSection title={distributionRegion.name}>
                            {distributionRegion.subregions.map((subregion) => (
                              <DropdownItem key={subregion}>
                                {subregion}
                              </DropdownItem>
                            ))}
                          </DropdownSection>
                        );
                      } else {
                        return (
                          <DropdownItem key={distributionRegion.name}>
                            {distributionRegion.name}
                          </DropdownItem>
                        );
                      }
                    }}
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : (
              ""
            )}

            <Select
              label="Offer Terms"
              placeholder="Select Offer Term"
              onSelect={(selectedSubtypeIdx) =>
                setSelectedOfferSubtype(
                  selectedOfferType.subtypes[Number(selectedSubtypeIdx)]
                )
              }
              value={selectedOfferSubtype?.name}
              items={selectedOfferType.subtypes.map((subtype, key) => ({
                name: subtype.name,
                key,
              }))}
            />

            {selectedOfferSubtype && (
              <>
                <Select
                  label="Payment Plan"
                  placeholder="Select Payment Plan"
                  onSelect={setSelectedPayementPlan}
                  value={selectedPaymentPlan}
                  items={selectedOfferSubtype.paymentPlans.map(
                    (paymentPlan) => ({
                      name: paymentPlan,
                      key: paymentPlan,
                    })
                  )}
                />

                {selectedPaymentPlan && (
                  <>
                    {isRangePaymentPlan ? (
                      <Range
                        min={0}
                        max={100}
                        value={revenueShare}
                        onChange={setRevenueShare}
                        label="Revenue Share"
                        endLabels={["Scout", "Film Maker"]}
                        unit="%"
                      />
                    ) : (
                      <Input
                        label="Budget"
                        placeholder="0.00"
                        labelPlacement="outside"
                        isRequired={true}
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                              $
                            </span>
                          </div>
                        }
                        className="max-w-xs mb-4"
                        variant="flat"
                        value={amount}
                        onValueChange={(v) =>
                          /^(\d*)(\.)?(\d*)$/.test(v) && setAmount(v)
                        }
                      />
                    )}

                    <Textarea
                      label="Offer Terms"
                      labelPlacement="outside"
                      placeholder="Additional Terms for your offer"
                      variant="flat"
                      value={addTerms}
                      onValueChange={setAddTerms}
                    />
                  </>
                )}
              </>
            )}
          </div>
        ) : null}
      </CardBody>
      <CardFooter className="justify-end">
        <Button
          variant="flat"
          color="success"
          isDisabled={!canSendOffer}
          onClick={handleSend}
          isLoading={sendingOffer}
        >
          Send Offer
        </Button>
      </CardFooter>
    </Card>
  );
};

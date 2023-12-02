import { OfferType } from "@/types/data";

export default async function getOfferTypes(): Promise<OfferType[]> {
  return [
    {
      _id: "1",
      name: "Distribution",
      description:
        "Projects for distribution on various platforms such as streaming services, video-on-demand, and more.",
      subtypes: [
        { name: "Pay Per View", paymentPlans: ["Upfront", "Revenue Share"] },
        {
          name: "Subscription",
          paymentPlans: ["Monthly Installments", "Royalties"],
        },
        { name: "Theatrical", paymentPlans: ["Lump Sum", "Royalties"] },
        { name: "RevenueShare", paymentPlans: ["Lump Sum", "Royalties"] },
      ],
    },
    {
      _id: "2",
      name: "Production",
      description:
        "Express interest in acquiring rights for projects that are still in development. This secures distribution rights once the project is completed.",
      subtypes: [
        { name: "Feature Film", paymentPlans: ["Fixed", "Royalties"] },
        { name: "TV Series", paymentPlans: ["Fixed", "Royalties"] },
        { name: "Short Film", paymentPlans: ["Fixed", "Royalties"] },
      ],
    },
    {
      _id: "3",
      name: "Sponsorship",
      description:
        "Sponsorship for ongoing projects. This can include product placement, brand integration, and more.",
      subtypes: [],
    },
    {
      _id: "4",
      name: "Liscensing",
      description: "Liscensing for projects.",
      subtypes: [
        { name: "Limited Term", paymentPlans: ["One-Time", "Royalties"] },
        { name: "Perpetual", paymentPlans: ["One-Time", "Royalties"] },
      ],
    },
  ];
}

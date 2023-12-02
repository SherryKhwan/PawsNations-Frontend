const faqs = [
  {
    title: "What is YFilm?",
    content:
      "YFilm is a platform that connects filmmakers, production companies, and scouts in the film industry. It provides a space where filmmakers can pitch their film projects, scouts can discover and acquire these projects, and production companies can explore potential acquisitions.",
  },
  {
    title: "How does YFilm work?",
    content:
      "Filmmakers create project listings on YFilm, providing details about their film ideas. Scouts and production companies can browse these listings, make offers, and negotiate deals with filmmakers. The platform also facilitates secure communication between parties to streamline the negotiation process.",
  },
  {
    title: "Who can use YFilm?",
    content:
      "YFilm is designed for filmmakers who want to showcase their film projects, scouts or interested parties looking to acquire unique projects, and production companies seeking new content for their portfolios.",
  },
  {
    title: "What types of projects are featured on YFilm?",
    content:
      "YFilm features a diverse range of film projects, including feature films, short films, documentaries, and more. Projects may span various genres, themes, and creative concepts.",
  },
  {
    title: "How does negotiation work on YFilm?",
    content:
      "YFilm simplifies negotiation by offering pre-selected options for offers and counteroffers. This approach helps streamline the process and ensures that both parties can quickly and effectively communicate their terms.",
  },
  {
    title: "Is my information secure on YFilm?",
    content:
      "Yes, YFilm takes data security seriously. We implement strong authentication measures, secure messaging, and user privacy controls to ensure a safe and confidential environment for all users.",
  },
  {
    title: "How are transactions processed on YFilm?",
    content:
      "YFilm uses Stripe to handle payment transactions. This secure payment gateway enables seamless financial transactions between parties while keeping financial information protected.",
  },
  {
    title: "Can I track my interactions and negotiations?",
    content:
      "Absolutely. YFilm includes an audit trail feature that allows users to track their interactions, offers, and negotiation history. This feature enhances transparency and accountability.",
  },
  {
    title: "Is YFilm open to international users?",
    content:
      "Yes, YFilm is a global platform, and users from around the world can join, create projects, and engage in negotiations. Our goal is to foster collaboration on an international scale.",
  },
  {
    title: "How can I get started on YFilm?",
    content:
      "To get started, create an account on YFilm, whether you're a filmmaker, scout, or production company. Once you've signed up, you can start exploring projects, making offers, and engaging in the film acquisition process.",
  },
  {
    title: "Is YFilm planning to add more features in the future?",
    content:
      "Yes, we're committed to continuous improvement. We plan to enhance the platform based on user feedback and needs. As the industry evolves, we aim to introduce new features that benefit all users.",
  },
  {
    title: "How can I get support if I have questions or issues?",
    content:
      "YFilm offers a dedicated support system where you can submit inquiries and receive assistance. Our team is here to help you navigate the platform and address any concerns you may have.",
  },
  {
    title: "What's the long-term vision of YFilm?",
    content:
      "YFilm's vision is to become the go-to platform for filmmakers, scouts, and production companies in the film industry. We aspire to create a thriving ecosystem that fosters collaboration, innovation, and successful film projects.",
  },
];

export default await function getFaqs() {
  return faqs;
};

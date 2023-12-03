export const menuItems = (id: string, userType: string) => {
  const type = userType === "scout" ? "scout" : "filmaker";
  return [
    { title: "About us", link: "#" },
    { title: "How it works", link: "/how-it-works" },
    { title: "Pets", link: "/pets" },
    { title: "Shop", link: "/shop" },
  ];
};

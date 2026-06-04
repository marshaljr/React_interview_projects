export const menu = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "About",
    link: "/about",
    children: [
      {
        label: "Team",
        link: "/about/team",
      },
      {
        label: "Company",
        link: "/about/company",
      },
    ],
  },
  {
    label: "Services",
    link: "/services",
    children: [
      {
        label: "Web Development",
        link: "/services/web-development",
      },
      {
        label: "Mobile Development",
        link: "/services/mobile-development",
      },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

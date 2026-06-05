const menus = [
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
        children: [
          {
            label: "iOS Development",
            link: "/services/mobile-development/ios",
          },
          {
            label: "Android Development",
            link: "/services/mobile-development/android",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
export default menus;

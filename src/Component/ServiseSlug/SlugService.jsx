const slugToTitleDictionary = {
  home: "Home",
  projects: "Projects",
  services: "Services",
  freelancers: "Freelancers",
  about: "About",
  faqs: "Faqs",
  terms: "Terms",
  privacy: "Privacy",
  atmemly: "Atmemly Guide",
  contactus: "Contact Us",
  programming: "Programming",
  graphicdesign: "Graphic Design",
  blogging: "Blogging",
  marketing: "Marketing",
  createa: "Create Account",
  login: "Login",
  restpass: "Rest Password",
  restpass2: "Rest Password 2",
  activationp: "Activation Password",
  activationp2: "Activation Password 2",
};
export const convertSlugToTitle = (slug) => {
  return (
    slugToTitleDictionary[slug] ||
    slug
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" }
];

const projects = [
  {
    number: "01",
    category: "WEB / PERSONAL",
    year: "STARTER CONCEPT",
    title: "Personal Portfolio",
    description: "A thoughtful home on the web to introduce myself, share selected work, and make it easy to get in touch.",
    tags: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive single-page layout", "Clear path through the work", "Accessible, lightweight interactions"]
  },
  {
    number: "02",
    category: "PRODUCTIVITY / CONCEPT",
    year: "STARTER CONCEPT",
    title: "Everyday Planner",
    description: "A simple concept for turning a busy to-do list into a calmer, more focused plan for the day.",
    tags: ["UX CONCEPT", "ORGANIZATION"],
    features: ["Prioritize the next useful step", "Group tasks into clear categories", "Keep the interface easy to scan"]
  },
  {
    number: "03",
    category: "DATA / CONCEPT",
    year: "STARTER CONCEPT",
    title: "Personal Insights",
    description: "A dashboard concept for making small routines easier to understand through clear, useful summaries.",
    tags: ["DATA STORYTELLING", "DASHBOARD"],
    features: ["Highlight simple patterns over time", "Present information with clear hierarchy", "Keep insights approachable"]
  }
];

const hobbies = [
  {
    number: "01",
    title: "Exploring new ideas",
    description: "Following a question down the rabbit hole and seeing what new connections turn up.",
    tag: "CURIOSITY"
  },
  {
    number: "02",
    title: "Making things",
    description: "Turning a rough thought into something tangible, then learning from the first version.",
    tag: "CREATIVITY"
  },
  {
    number: "03",
    title: "Learning by doing",
    description: "Trying a new skill hands-on and enjoying the little discoveries along the way.",
    tag: "GROWTH"
  }
];

// Replace the empty destinations with Paolo's verified public contact details.
const contactLinks = [
  { label: "Email", detail: "Add your email", icon: "@" , href: "" },
  { label: "LinkedIn", detail: "Add your profile", icon: "in", href: "" },
  { label: "GitHub", detail: "Add your profile", icon: "gh", href: "" }
];

const navigationContainer = document.querySelector("#navigation-links");
navigationItems.forEach((item) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = item.href;
  link.textContent = item.label;
  listItem.append(link);
  navigationContainer.append(listItem);
});

const projectsContainer = document.querySelector("#projects-container");
projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project-card";

  const visual = document.createElement("div");
  visual.className = "project-visual";
  visual.setAttribute("aria-hidden", "true");
  const visualNumber = document.createElement("span");
  visualNumber.className = "project-visual-number";
  visualNumber.textContent = project.number;
  visual.append(visualNumber);

  const body = document.createElement("div");
  body.className = "project-body";
  const topline = document.createElement("div");
  topline.className = "project-topline";
  const category = document.createElement("span");
  category.className = "project-category";
  category.textContent = project.category;
  const year = document.createElement("span");
  year.className = "project-year";
  year.textContent = project.year;
  topline.append(category, year);

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = project.title;
  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const tagList = document.createElement("ul");
  tagList.className = "tag-list";
  project.tags.forEach((tag) => {
    const tagItem = document.createElement("li");
    tagItem.textContent = tag;
    tagList.append(tagItem);
  });

  const featureList = document.createElement("ul");
  featureList.className = "feature-list";
  project.features.forEach((feature) => {
    const featureItem = document.createElement("li");
    featureItem.textContent = feature;
    featureList.append(featureItem);
  });

  body.append(topline, title, description, tagList, featureList);
  article.append(visual, body);
  projectsContainer.append(article);
});

const hobbiesContainer = document.querySelector("#hobbies-container");
hobbies.forEach((hobby) => {
  const article = document.createElement("article");
  article.className = "hobby-card";
  const number = document.createElement("span");
  number.className = "hobby-number";
  number.textContent = hobby.number;
  const title = document.createElement("h3");
  title.className = "hobby-title";
  title.textContent = hobby.title;
  const description = document.createElement("p");
  description.className = "hobby-description";
  description.textContent = hobby.description;
  const tag = document.createElement("span");
  tag.className = "hobby-tag";
  tag.textContent = hobby.tag;
  article.append(number, title, description, tag);
  hobbiesContainer.append(article);
});

const contactContainer = document.querySelector("#contact-links");
contactLinks.forEach((contact) => {
  const link = document.createElement(contact.href ? "a" : "span");
  link.className = "contact-link";
  const isConfigured = Boolean(contact.href);
  if (isConfigured) {
    link.href = contact.href;
  } else {
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("aria-label", `${contact.label}: add your contact details in script.js`);
  }

  const label = document.createElement("span");
  label.className = "contact-link-label";
  const icon = document.createElement("span");
  icon.className = "contact-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = contact.icon;
  const detail = document.createElement("span");
  detail.textContent = isConfigured ? contact.label : `${contact.label} · ${contact.detail}`;
  label.append(icon, detail);

  const action = document.createElement("span");
  action.className = "contact-link-action";
  action.setAttribute("aria-hidden", "true");
  action.textContent = isConfigured ? "↗" : "SET UP";
  link.append(label, action);
  contactContainer.append(link);
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

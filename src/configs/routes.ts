import * as ROUTES from "@/constants/routes.ts";
import {
  IconExperience,
  IconPerson,
  IconProject,
  IconWeb,
} from "@/components/icons";

export const ROUTES_LIST = [
  {
    key: ROUTES.CONTACT,
    name: "Contacto",
    href: ROUTES.CONTACT,
    Icon: IconWeb,
  },
  {
    key: ROUTES.EXPERIENCE,
    name: "Experiencia",
    href: ROUTES.EXPERIENCE,
    Icon: IconExperience,
  },
  {
    key: ROUTES.PROJECTS,
    name: "Proyectos",
    href: ROUTES.PROJECTS,
    Icon: IconProject,
  },
  {
    key: ROUTES.ABOUT_ME,
    name: "Sobre mí",
    href: ROUTES.ABOUT_ME,
    Icon: IconPerson,
  },
];

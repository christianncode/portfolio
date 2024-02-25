import {
  IconBootstrap,
  IconMaterialUI,
  IconReact,
  IconReactRouter,
  IconRedux,
  IconSass,
  IconTypeScript,
} from "@/components/icons";

const projects = [
  {
    id: 1,
    title: "Entel Perú: Siente el verdadero Power",
    description:
      "Plataforma e-commerce, de venta de equipos móviles, accesorios, tarjeta sim y planes. Creada con React, Sass y Bootstrap",
    technologies: [
      {
        name: "React",
        Icon: IconReact,
      },
      {
        name: "Sass",
        Icon: IconSass,
      },
      {
        name: "Bootstrap",
        Icon: IconBootstrap,
      },
    ],
    imageUrl: "/assets/images/projects/entel.png",
    webUrl: "https://miportal.entel.pe",
  },
  {
    id: 2,
    title: "GEF® Colombia - Tienda de Ropa y Accesorios Online",
    description:
      "Plataforma e-commerce, dedicada a la venta de accesorios y prendas de vestir. Creada con React, TypeScript, Sass, Material UI, React Router y Redux",
    technologies: [
      {
        name: "React",
        Icon: IconReact,
      },
      {
        name: "TypeScript",
        Icon: IconTypeScript,
      },
      {
        name: "Sass",
        Icon: IconSass,
      },
      {
        name: "Material UI",
        Icon: IconMaterialUI,
      },
      {
        name: "React Router",
        Icon: IconReactRouter,
      },
      {
        name: "Redux",
        Icon: IconRedux,
      },
    ],
    imageUrl: "/assets/images/projects/gef.png",
    webUrl: "https://www.gef.co",
  },
];

export default projects;

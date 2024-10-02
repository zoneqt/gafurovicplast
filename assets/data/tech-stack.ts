import HtmlIcon from "/public/icons/html.svg";
import CssIcon from "/public/icons/css.svg";
import TailwindIcon from "/public/icons/tailwind.svg";
import ReactIcon from "/public/icons/react.svg";
import JsIcon from "/public/icons/js.svg";
import CsharpIcon from "/public/icons/csharp.svg";
import SqlIcon from "/public/icons/sql.svg";
import MongoIcon from "/public/icons/mongo.svg";
import FigmaIcon from "/public/icons/figma.svg";
import AdobeIcon from "/public/icons/adobe.svg";

export interface IstackData {
  name: string;
  icon: any;
}

export const stackData: IstackData[] = [
  {
    name: "HTML5",
    icon: HtmlIcon,
  },
  {
    name: "CSS",
    icon: CssIcon,
  },
  {
    icon: TailwindIcon,
    name: "Tailwind",
  },
  {
    icon: ReactIcon,
    name: "React",
  },
  {
    icon: JsIcon,
    name: "Javascript",
  },
  {
    icon: CsharpIcon,
    name: "C#",
  },
  {
    icon: SqlIcon,
    name: "SQL",
  },

  {
    icon: MongoIcon,
    name: "MongoDB",
  },
  {
    icon: FigmaIcon,
    name: "Figma",
  },
  {
    icon: AdobeIcon,
    name: "Adobe Ilustrator",
  },
];

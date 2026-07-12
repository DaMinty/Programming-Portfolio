import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Da_Minty's Portfolio" },
    { name: "description", content: "Programming portfolio for Da_Minty" },
  ];
}

export default function Home() {
  return <Welcome />;
}

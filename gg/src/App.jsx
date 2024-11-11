import { Typography, Card } from "@material-tailwind/react";
import { NavbarDefault } from "./compontes/navabr";
import { Card1 } from "./compontes/card";
import { Card2 } from "./compontes/card2";
import { Card3 } from "./compontes/card3";

export default function App() {
  return (
    <div>
     <div className="mb-10">
     <NavbarDefault/>
     </div>
      <div className="flex justify-around ">
      <Card1/>
      <Card2/>
      <Card3/>
      </div>

    </div>
  );
}

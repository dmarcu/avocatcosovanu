import { Inter } from "next/font/google";
import { Hero } from "@/components/hero";
import { HomeAbout } from "@/components/home-about";
import { HomePortfolio } from "@/components/home-portfolio";
import { HomeTeam } from "@/components/home-team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomePortfolio />
      <HomeTeam />
    </div>
  );
}

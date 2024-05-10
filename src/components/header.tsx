import * as React from "react";
import { MapPin, Menu, Phone, Scale } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center text-white py-4">
          Menu
          <Menu />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/">Acasa</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/despre">Despre</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/echipa">Echipa</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/portofoliu">Portofoliu</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/contact">Contact</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopMenu() {
  return (
    <nav>
      <ul className="flex space-x-4 p-4 text-primary-foreground">
        <li>
          <Link href="/">Acasa</Link>
        </li>
        <li>
          <Link href="/despre">Despre</Link>
        </li>
        <li>
          <Link href="/echipa">Echipa</Link>
        </li>
        <li>
          <Link href="/portofoliu">Portofoliu</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

type Props = {};

export function Header(props: Props) {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="border-b border-slate-600">
          <ul className="flex gap-6 text-sm">
            <li className="hidden md:inline-flex">
              <a
                href="https://maps.app.goo.gl/mr6czLP8HFkjzecF7"
                className="flex items-center gap-2 text-primary-foreground py-2 text-sm"
              >
                <MapPin className="text-secondary" size={20} />
                Sfanta Vineri nr. 32, Bucuresti
              </a>
            </li>
            <li className="">
              <a
                href="tel:+400744371625"
                className="flex items-center gap-2 text-primary-foreground py-2 text-nowrap text-sm"
              >
                <Phone className="text-secondary" size={20} />
                0744 371 625
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-secondary">
            <Scale size={36} strokeWidth={1} />
            <div className="text-primary-foreground text-lg ">
              Cosovanu & Asociații
            </div>
          </div>

          <div className="hidden md:inline-flex">
            <DesktopMenu />
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

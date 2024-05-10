import * as React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const items = [
  "Hexi Pharma",
  "Colectiv",
  "Rompetrol 1 si 2",
  "ANPR 1 si 2",
  "Rafo-Carom",
  "Case pentru generali",
  "Spitalul de arsi",
  "Rapirea juralistilor din Irak",
  "ROMSILVA (retrocedare paduri)",
  "Rambursare TVA Dolj",
  "CNA",
  "Loteria natioanala",
  "Cocaina recuperata de pe plaja",
  "Reciclare deseuri ecologizare",
];

type Props = {};

export default function Contact(props: Props) {
  return (
    <div className="container max-w-screen-lg py-24">
      <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-24 items-center">
        <div className="w-1/1 md:w-1/2">
          <Image
            src="/img/map.jpg"
            width={720}
            height={626}
            alt="Harta locatie"
          ></Image>
        </div>
        <div className="w-1/1 md:w-1/2">
          <div className="flex flex-col gap-8">
            <h1 className="font-serif text-3xl font-normal text-secondary">
              Contact
            </h1>
            <ul className="flex flex-col gap-8">
              <li>
                <a href="tel:+400744371625" className="flex gap-4">
                  <Phone className="text-secondary" />
                  0744 371 625
                </a>
              </li>
              <li>
                <a
                  href="mailto:cornelcosovanu@yahoo.com"
                  className="flex gap-4"
                >
                  <Mail className="text-secondary" />
                  cornelcosovanu@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/mr6czLP8HFkjzecF7"
                  className="flex gap-4"
                >
                  <MapPin className="text-secondary" />
                  <p>
                    Sfanta Vineri nr. 32
                    <br />
                    bl. A5, sc. A, et. 4, ap. 19
                    <br />
                    sector 3, Bucuresti
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

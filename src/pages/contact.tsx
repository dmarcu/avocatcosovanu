import * as React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

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
                <div className="flex gap-4">
                  <Phone className="text-secondary" />
                  <div className="flex flex-col gap-2">
                    <a href="tel:+40744371625">0744 371 625</a>
                    <a href="tel:+40720070158">0720 070 158</a>
                    <a href="tel:+40722372894">0722 372 894</a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="mailto:avocatcosovanu@gmail.com"
                  className="flex gap-4"
                >
                  <Mail className="text-secondary" />
                  avocatcosovanu@gmail.com
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
                    bl. A5, sc. A, et. 4, ap. 19, int. 19
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

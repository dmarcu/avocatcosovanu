import * as React from "react";
import { MapPin, Phone } from "lucide-react";

type Props = {};

export function Footer(props: Props) {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 justify-between py-4">
          <div className="text-primary-foreground text-lg">
            Cosovanu & Asociații
          </div>
          <ul className="flex flex-col gap-6 text-sm">
            <li className="">
              <a
                href="https://maps.app.goo.gl/mr6czLP8HFkjzecF7"
                className="flex items-center gap-2 text-primary-foreground"
              >
                <MapPin className="text-secondary" size={20} />
                Sfanta Vineri nr. 32, Bucuresti
              </a>
            </li>
            <li className="">
              <a
                href="tel:+400744371625"
                className="flex items-center gap-2 text-primary-foreground text-nowrap"
              >
                <Phone className="text-secondary" size={20} />
                0744 371 625
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t border-slate-600 py-2 text-center text-slate-500 text-sm">
          © Copyright {new Date().getFullYear()} Cosovanu & Asociații
        </div>
      </div>
    </div>
  );
}

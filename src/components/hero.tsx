import * as React from "react";
import { buttonVariants } from "@/components/ui/button";

type Props = {};

export function Hero(props: Props) {
  return (
    <div className="w-full bg-cover bg-center flex items-center justify-center bg-[url('/img/hero-min.jpg')]">
      <div className="bg-gradient-to-r from-primary to-blue-950/50 w-full h-[60vh]">
        <div className="container flex flex-col h-full justify-center">
          <h1 className="text-4xl font-serif font-normal text-white mb-8 text-balance max-w-[600px] leading-tight">
            Societate civilă de avocaţi specializată in drept penal.
          </h1>
          <div className="mb-8">
            <h2 className="text-slate-500 font-serif">
              <i>Cessante causa, effectus cessat</i>
            </h2>
          </div>
          <div>
            <a
              href="tel:+40744371625"
              className={buttonVariants({ variant: "outlineSecondary" })}
            >
              Contacteaza-ne
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

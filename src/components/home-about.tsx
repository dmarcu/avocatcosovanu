import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

type Props = {};

export function HomeAbout(props: Props) {
  return (
    <div className="container py-24">
      <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-24 items-center">
        <div className="w-1/1 md:w-1/2">
          <Image
            src="/img/about-min.jpg"
            width={1260}
            height={1260}
            alt="Despre Cosovanu & Asociatii"
            className="object-cover"
          ></Image>
        </div>
        <div className="w-1/1 md:w-1/2">
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-3xl font-normal text-secondary">
              Despre noi
            </h2>
            <div className="prose lg:prose-xl">
              <p>
                S.C.A. COSOVANU ȘI ASOCIAȚII a fost înființată în 1999 de doi
                foști magistrați, fiind încă de la început specializată pe
                problematica dreptului penal.
              </p>
              <p>
                Societatea a fost gândită să funcționeze într-o structură suplă,
                sudată în timp, care permite valorificarea avantajelor muncii în
                echipă, cu consecința adoptării celor mai eficiente soluții
                favorabile clientului, atât pe latura penală, cât și pe latura
                civilă a cauzei.
              </p>
              <p>
                Membrii societății au o arie de competentă care cuprinde
                întreaga problematică a dreptului penal, acordându-se prioritate
                principiului strictei specializări.
              </p>
            </div>

            <Link
              href="/despre"
              className="flex items-center gap-2 no-underline text-secondary hover:underline hover:underline-offset-4"
            >
              Vezi mai mult <MoveRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

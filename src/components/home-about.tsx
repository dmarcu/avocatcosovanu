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
                S.C.A. COSOVANU SI ASOCIATIl a fost infiintata ni 1999 de doi
                fosti magistrati, find inca de la inceput specializata pe
                problematica dreptului penal.
              </p>
              <p>
                Societatea a fost gandita sa functioneze intr-o structura supla,
                sudata in timp, care permite valorificarea avantajelor muncii in
                echipa, cu consecinta adoptarii celor mai eficiente solutii
                favorabile clientului, atat pe latura penala, dar si pe latura
                civila a cauzei.
              </p>
              <p>
                Membrii societatii au o arie de expertiza care cuprinde intreaga
                problematica a dreptului penal, acordandu-se prioritate
                principiului strictei specializari.
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

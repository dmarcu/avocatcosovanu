import * as React from "react";
import Image from "next/image";

type Props = {};

export default function Despre(props: Props) {
  return (
    <div className="container py-24">
      <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-24">
        <div className="w-1/1 md:w-1/3">
          <Image
            src="/img/about-min.jpg"
            width={1260}
            height={1260}
            alt="Despre Cosovanu & Asociatii"
            className="object-cover"
          ></Image>
        </div>
        <div className="w-1/1 md:w-2/3">
          <div className="flex flex-col gap-8">
            <h1 className="font-serif text-3xl font-normal text-secondary">
              Despre noi
            </h1>
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
                favorabile clientului, atât pe latura penală, dar și pe latura
                civilă a cauzei.
              </p>

              <p>
                Membrii societății au o arie de expertiză care cuprinde întreaga
                problematică a dreptului penal, acordându-se prioritate
                principiului strictei specializări.
              </p>

              <p>
                Sunt vizate aici atât infracțiunile reglementate de Codul Penal,
                cât și cele din legi speciale, inclusiv: criminalitate
                economico-financiară, legislația achizițiilor publice,
                infracțiuni la regimul siguranței circulației, trafic și consum
                de droguri, infracțiuni de corupție și cele asimilate acestora,
                spălare de bani, infracțiuni la regimul societăților comerciale,
                infracțiuni împotriva intereselor financiare ale Comunității
                Europene, infracțiuni de serviciu sau în legătură cu serviciul,
                infracțiuni de evaziune fiscală, fraude comise prin sisteme
                informatice și mijloace de plată electronice.
              </p>

              <p>
                Societatea acordă atât servicii de asistență juridică și
                reprezentare a clienților în toate fazele procesului penal, cât
                și servicii de consultanță pentru prevenirea riscurilor în
                materie penală, la cerere sau pe bază de abonament.
              </p>

              <p>
                Ca o expresie a profesionalismului și grijii față de interesele
                clienților, membrii societății asigură și participarea la
                efectuarea activităților care nu implică prezența clientului în
                procesul penal, dobândind astfel o percepție în timp real a
                evoluției cazului, cu consecința adoptării comportamentului
                procesual optim pentru client.
              </p>

              <p>
                Societatea asigură și deplasarea membrilor pentru efectuarea
                activităților de asistență juridică și reprezentare în cauzele
                aflate pe rolul altor organe judiciare decât cele aflate în
                București.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

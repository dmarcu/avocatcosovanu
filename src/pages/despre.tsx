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
                S.C.A. COSOVANU SI ASOCIATII a fost infiintata in 1999 de doi
                fosti magistrati, find inca de la inceput specializata pe
                problematica dreptului penal.
              </p>
              <p>
                Societatea a fost gandita sa functioneze intr-o structura supla,
                sudata in timp, care permite valorificarea avantajelor muncii in
                echipa, cu consecinta adoptarii celor mai eficiente solutii
                favorabile clientului, atat pe latura penala, dar si pe latura
                civil a acauzei.
              </p>
              <p>
                Membrii societatii au o arie de expertiza care cuprinde intreaga
                problematica a dreptului penal, acordandu-se prioritate
                principiului strictei specializari.
              </p>
              <p>
                Sunt vizate aici atat infractiunile reglementate de Codul Penal,
                cat si cele din legi speciale, inclusiv: criminalitate
                economico-finaciara, legislatia achizitillor publice,
                infractiuni la regimul sigurantei circulatiei, trafic si consum
                de droguri, infractiuni de coruptie si cele asimilate acestora,
                spalare de bani, infractiuni la regimul societatilor comerciale,
                infractiuni impotriva intereselor financiare ale Comunitatii
                Europene, infractiuni de serviciu sau in legatura cu serviciul,
                infractiuni de evaziune fiscala, fraude comise prin sisteme
                informatice si mijloace de plata electronice.
              </p>
              <p>
                Societatea acorda atat servicii de asistenta juridica si
                reprezentare a clientilor in toate fazele procesului penal, cat
                si servicii de consultanta pentru prevenirea riscurilor in
                materie penala, la cerere sau pe baza de abonament.
              </p>
              <p>
                Ca o expresie a profesionalismului si grijii fata de interesele
                clientilor, membri societatii asigura si participarea la
                efectuarea activitatilor care nu implica prezenta clientului in
                procesul penal, dobandind astfel o perceptie in timp real a
                evolutiei cazului, cu consecinta adoptarii comportamentului
                procesual optim pentru client.
              </p>
              <p>
                Societatea asigura si deplasarea membrilor pentru efectuarea
                activitatilor de asistenta juridica si reprezentare in cauzele
                aflate pe rolul altor organe judiciare decat cele aflate in
                Bucuresti.
              </p>

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
          </div>
        </div>
      </div>
    </div>
  );
}

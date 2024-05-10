import * as React from "react";

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

export default function Portofoliu(props: Props) {
  return (
    <div className="container max-w-screen-lg py-24">
      <div className="flex flex-col gap-16">
        <h1 className="font-serif text-3xl font-normal text-secondary text-center">
          Portofoliu
        </h1>
        <div className="flex flex-col gap-8">
          <div className="prose mx-auto">
            <p>
              Natura penala a cauzelor si obligatia legala de confidentialitate
              nu premit nominalizarea persoanelor fizice sau juridice pentru
              care societatea a acordat si/sau acorda servicii de asistenta
              juridica, reprezentare sau consultanta, cu atat mai mult cat
              printre clienti se numara persoane publice (fosti sau actuali
              ministri, parlamentari, presedinti de consilii judetene, primari,
              politisti, militari, jandarmi, procurori, judecatori, conducatori
              de institutii publice precum si alti functionari publici).
            </p>
            <p>
              Natura penala a cauzelor si obligatia legala de confidentialitate
              nu premit nominalizarea persoanelor fizice sau juridice pentru
              care societatea a acordat si/sau acorda servicii de asistenta
              juridica, reprezentare sau consultanta, cu atat mai mult cat
              printre clienti se numara persoane publice (fosti sau actuali
              ministri, parlamentari, presedinti de consilii judetene, primari,
              politisti, militari, jandarmi, procurori, judecatori, conducatori
              de institutii publice precum si alti functionari publici). Printre
              cele mai cunoscute cazue mentionam pe cele denumite generic:
            </p>
          </div>
          <div className="max-w-prose mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-balance bg-slate-200 h-24 flex items-center justify-center text-center p-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

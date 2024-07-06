import * as React from "react";

import { Mail, Phone } from "lucide-react";

const members = [
  {
    name: "Cornel Cosovanu",
    img: "https://placehold.co/300x400",
    phone: "+40 744 371 625",
    email: "cornelcosovanu@yahoo.com",
    text: `Este avocat din anul 1996, după ce a activat ca procuror și apoi judecător.\n
Datorită acestei experiențe, are o perspectivă completă și complexă asupra fiecărui caz, în care se regăsește atât elementul acuzator (procurorul), cât și factorul decident (judecătorul), dar și „aliatul" clientului (avocatul).\n
Cunoașterea elementelor de psihologie, din proprie experiență, a celor trei profesii practicate, ajută în stabilirea celui mai bun comportament procesual în cauzele angajate, maximizând șansele de reușită, în sensul atingerii rezultatului propus.\n`,
  },
  {
    name: "Mihaela-Catalina Bobe",
    img: "https://placehold.co/300x400",
    phone: "+40 720 070 158",
    email: "catalina.bobe@yahoo.ro",
    text: `Este avocat din anul 2004 și titulara unei diplome de masterat în domeniul criminalității organizate. Provine dintr-o familie care a activat în domeniul juridic, fiind familiarizată cu acest mediu (judecător, grefier).\n
Totodată, este licențiată și a Universității Politehnica București, ceea ce îi potențează caracterul pragmatic și organizat al activităților.\n
Asigură atât servicii de asistență juridică și reprezentare, cât și consultanță în materie penală.\n`,
  },
  {
    name: "Raoul Ioan Iancovici",
    img: "https://placehold.co/300x400",
    phone: "+40 722 372 894",
    email: "raoul_iancovici@yahoo.com",
    text: `Este avocat din anul 2004 și titularul unei diplome de masterat în domeniul științelor penale, absolvind și cursuri post-universitare în domeniul penal la Universitatea București.\n
Caracterul său analitic și meticulos, cât și formarea sa într-o familie de juriști, îi permit o analiză aprofundată a cauzelor și a specificului clientelei. Oferă atât servicii de asistență juridică și reprezentare, cât și consultanță în materie penală, obținând rezultate semnificative în dosarele privind măsuri preventive.\n`,
  },
  {
    name: "Razvan Teodor Samson",
    img: "https://placehold.co/300x400",
    phone: "+40 726 178 597",
    email: "samsonrazvan@yahoo.com",
    text: `Este avocat din anul 2007, dată de la care colaborează cu Societatea noastră și provine dintr-o familie cu tradiție în magistratură, în domeniul dreptului penal. Are dreptul de a acorda servicii de asistență juridică și reprezentare în toate fazele procesuale și la toate instanțele.\n
Abordează cauzele și clienții cu seriozitate și respect, având o bună pregătire profesională dobândită în urma numărului de cauze la a căror soluționare a participat. A repurtat numeroase succese profesionale în cauzele penale privind obținerea de despăgubiri civile și daune morale pentru victimele accidentelor de circulație.\n`,
  },
  {
    name: "Octavian Alexandru Cosovanu",
    img: "https://placehold.co/300x400",
    phone: "+40 740 098 070",
    email: "acosovanu@gmail.com",
    text: `Este avocat din anul 2022 și cel mai tânăr colaborator al societății.\n
Este în curs de formare profesională, participând atât la activitatea de asistență juridică și reprezentare, ca apărător desemnat din oficiu, cât și la soluționarea cauzelor proprii ale societății. Aduce un suflu nou în abordarea problematicii judiciare în continuă schimbare, cu referire specială la infracțiunile din mediul online.\n
`,
  },
];

function Member(member: {
  name: string;
  img: string;
  phone: string;
  email: string;
  text: string;
}) {
  const paragraphs = member.text ? member.text.split("\n") : [];

  return (
    <div className="flex flex-col sm:flex-row items-start gap-8">
      {/*<img src={member.img} className="w-1/2 sm:w-1/4" />*/}
      <div className="w-full sm:w-3/4">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-normal text-secondary">
            {member.name}
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href={`tel:${member.phone.trim()}`} className="flex gap-2">
                <Phone className="text-secondary" />
                {member.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${member.email}`} className="flex gap-2">
                <Mail className="text-secondary" />
                {member.email}
              </a>
            </li>
          </ul>
          <div className="prose">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type Props = {};

export default function Echipa(props: Props) {
  return (
    <div className="container max-w-screen-lg py-24">
      <div className="flex flex-col gap-16">
        <h1 className="font-serif text-3xl font-normal text-secondary text-center">
          Echipa
        </h1>
        <div className="flex flex-col gap-16">
          {members.map((member) => (
            <Member key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

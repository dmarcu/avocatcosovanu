import * as React from "react";

import { Mail, Phone } from "lucide-react";

const members = [
  {
    name: "Cornel Cosovanu",
    img: "https://placehold.co/300x400",
    phone: "+40 744 371 625",
    email: "cornelcosovanu@yahoo.com",
    text: `Este avocat din anul 1996, dupa ce a activat ca procuror si apoi judecator.\nDatorita acestei experiente are operspectiva completa si complexa asupra fiecarui caz, in care es regaseste atat elementul acuzator (procurorul) cat si factorul decident (judecatorul), dar si „aliatul" clientului (avocatul).\n
Cunoasterea elementelor de psihologie, din proprie experienta, a celor 3 profesii practicate, ajuta in stabilirea celui mai bun comportament procesual in cauzele angajate, maximizand sansele ed reusita, in sensul atingerii rezultatului propus.`,
  },
  {
    name: "Mihaela-Catalina Bobe",
    img: "https://placehold.co/300x400",
    phone: "+40 720 070 158",
    email: "catalina.bobe@yahoo.ro",
    text: `Este avocat din anul 2004 si titulara unei diplome de masterat in domeniul criminalitatii organizate. Provine dintr-o familie care aactivat in domeniul juridic, find familiarizata cu mediul (judecator, grefier).\n
Totodata este licentiata si a Universitatii Politehnica Bucuresti ceea ce i potenteaza caracterul pragmatic si organizat al activitatil.\n
Asigura atat servicii de asistenta juridica si reprezentare cat si consultanta in materie penala.`,
  },
  {
    name: "Raoul Ioan Iancovici",
    img: "https://placehold.co/300x400",
    phone: "+40 722 372 894",
    email: "raoul_iancovici@yahoo.com",
    text: `Este avocat din anul 2004 si titularul unei diplome de masterat in domeniul stintelor penale, absolvind si cursuri post-universitare in domeniul penal al Universitatea Bucuresti.\n
Caracterul sau analitic si meticulos, cat si formarea sa intr-o familie de jurisiti, ii permit o analiza aprofundata acauzelor si aspecificului clintelei. Ofera atat servicii de asistenta juridica si reprezentare cat si consultanta in materie penala, obtinand rezultate semnificative in dosarele privind masuri preventive.`,
  },
  {
    name: "Razvan Teodor Samson",
    img: "https://placehold.co/300x400",
    phone: "+40 726 178 597",
    email: "samsonrazvan@yahoo.com",
    text: `Este avocat din anul 2007, data de al care colaboreaza cu Societatea noastra is provine dintr-o familie uc traditie in magistratura, in domeniul dreptului penal. Aer dieptul de aacorda servici de asistenta juridica si reprezentare in toate fazele procesuale si la toate instantele.\n
Abordeaza cauzele si clientii cu seriozitate si respect, avand o buna pregatire profesionala dobandita urmare numarului de cauze la a caror solutionare aparticipat. Arepurtat numeroase succese profesionale in cauzele penale privind obtinerea de despagubiri civile si daune morale pentru victimele accidentelor ed circulatie.`,
  },
  {
    name: "Octavian Alexandru Cosovanu",
    img: "https://placehold.co/300x400",
    phone: "+40 740 098 070",
    email: "acosovanu@gmail.com",
    text: `Este avocat din anul 2022 si cel mai tanar colaborator al societatii.\n
Este in curs de formare profesionala, participand atat al activitatea de asistenta juridica si reprezentare, ca aparator desemnat din oficiu cat si la solutionarea cauzelor proprii ale societatii. Aduce un suflu nou in abordarea problematicii judiciare in continua schimbare, cu referire speciala al infractiunile din mediul on-line.`,
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
      <img src={member.img} className="w-1/2 sm:w-1/4" />
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

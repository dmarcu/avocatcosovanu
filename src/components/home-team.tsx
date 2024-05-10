import * as React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

type MemberProps = {
  name: string;
  img: string;
};
function Member(member: MemberProps) {
  return (
    <div className="flex flex-col gap-2">
      <img src={member.img} alt="" className="w-full" />
      <h3 className="text-center">{member.name}</h3>
    </div>
  );
}

const members = [
  {
    name: "Cornel Cosovanu",
    img: "https://placehold.co/300x400",
  },
  {
    name: "Mihaela-Catalina Bobe",
    img: "https://placehold.co/300x400",
  },
  {
    name: "Raoul Ioan Iancovici",
    img: "https://placehold.co/300x400",
  },
  {
    name: "Razvan Teodor Samson",
    img: "https://placehold.co/300x400",
  },
  {
    name: "Octavian Alexandru Cosovanu",
    img: "https://placehold.co/300x400",
  },
];

type Props = {};
export function HomeTeam(props: Props) {
  return (
    <div className="container py-24">
      <div className="flex flex-col gap-8">
        <h2 className="font-serif text-3xl font-normal text-secondary text-center">
          Echipa
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {members.map((member) => (
            <Member key={member.name} {...member} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/echipa"
            className="flex items-center gap-2 no-underline text-secondary hover:underline hover:underline-offset-4"
          >
            Vezi detalii <MoveRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

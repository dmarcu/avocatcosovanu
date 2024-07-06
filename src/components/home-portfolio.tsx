import * as React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import styles from "./home-portfolio.module.css";

type Props = {};

const items = [
  "Hexi Pharma",
  "Colectiv",
  "Rompetrol 1 si 2",
  "ANRP 1 si 2",
  "Rafo-Carom",
  "Case pentru generali",
  "Spitalul de arsi",
  "Rapirea jurnalistilor din Irak",
  "ROMSILVA (retrocedare paduri)",
  "Rambursare TVA Dolj",
  "CNA",
  "Loteria nationala",
  "Cocaina recuperata de pe plaja",
  "Reciclare deseuri ecologizare",
];

export function HomePortfolio(props: Props) {
  return (
    <div className="py-24 bg-secondary">
      <div className="container test">
        <div className="flex flex-col gap-8 text-center">
          <h2 className="font-serif text-3xl font-normal text-white">
            Portofoliu
          </h2>
          <div className={styles.flow}>
            <div className={styles.carousel}>
              {/*Only works with even number of images!*/}
              {items.map((item) => (
                <div className={styles.carouselItem} key={item}>
                  {item}
                </div>
              ))}
              {items.map((item) => (
                <div className={styles.carouselItem} key={item + 2}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/portofoliu"
              className="flex items-center gap-2 no-underline text-white hover:underline hover:underline-offset-4"
            >
              Vezi detalii <MoveRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

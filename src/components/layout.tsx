import * as React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

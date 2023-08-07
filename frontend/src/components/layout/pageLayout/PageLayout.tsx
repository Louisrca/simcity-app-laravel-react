import { PropsWithChildren } from "react";
import { Navbar } from "../../Navbar/Navbar";
import s from "./PageLayout.module.css";

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="PagesContainer">
      <header className={s.headerNavbar}>
        <Navbar />
      </header>

      {children}
    </section>
  );
};

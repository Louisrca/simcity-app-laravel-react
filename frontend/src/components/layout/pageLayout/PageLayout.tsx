import { PropsWithChildren } from "react";
import { Navbar } from "../../Navbar/Navbar";

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="PagesContainer">
      <header>
        <Navbar />
      </header>

      {children}
    </section>
  );
};

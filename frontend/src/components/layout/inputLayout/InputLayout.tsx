import { PropsWithChildren } from "react";

export const InputLayout = ({ children }: PropsWithChildren) => {
    return (
        <section className="PagesContainer">
        {children}
        </section>
    );
};

import { ReactNode } from "react";
import { Header, HeadWrapper } from "./header";
import { Footer } from "./footer";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <HeadWrapper />
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
};

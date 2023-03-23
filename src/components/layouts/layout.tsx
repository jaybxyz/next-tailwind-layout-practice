import { ReactNode } from "react";
import { Header, HeadWrapper } from "./header";
import { Footer } from "./footer";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <div className="container mx-auto 2xl:px-64 xl:px-64 lg:px-64 md:px-24 bg-gray-300">
      <HeadWrapper />
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </div>
  );
};

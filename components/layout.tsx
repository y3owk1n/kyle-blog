import { ReactNode } from "react";
import Meta from "./meta";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  type?: string;
};

const Layout = ({ children, title, description, image, date, type }: Props) => {
  return (
    <>
      <Meta
        title={title}
        description={description}
        image={image}
        date={date}
        type={type}
      />
      <div className="">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

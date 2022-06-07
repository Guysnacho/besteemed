import { IconButton } from "@mui/material";
import { ReactNode } from "react";

type IconLinkProps = {
  href: string;
  child: ReactNode;
};

const IconLink = (props: IconLinkProps) => {
  return (
    <IconButton
      href={props.href}
      color="primary"
      target={props.href.includes("614") ? "_parent" : "_blank"}
      rel="noopener"
    >
      {props.child}
    </IconButton>
  );
};
export default IconLink;

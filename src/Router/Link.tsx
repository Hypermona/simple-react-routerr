import { ReactNode, useContext } from "react";
import { RouterContext } from ".";

type Props = {
  href: string;
  state?: unknown;
  children: ReactNode;
};

function Link({ children, href, state = {} }: Props) {
  const router = useContext(RouterContext);
  const onClick = () => {
    window.history.pushState(state, "", href);
    router?.setLocalPath(href);
  };
  return <div onClick={onClick}>{children}</div>;
}

export default Link;

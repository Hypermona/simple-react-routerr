import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface Router {
  localPath: string;
  setLocalPath: Dispatch<SetStateAction<string>>;
}

export const RouterContext = createContext<Router | undefined>(undefined);

interface IRoute {
  path: string;
  Element: ReactNode;
}

interface Props {
  routes: IRoute[];
}

function isMatch(pathName: string, localPath: string) {
  return pathName === window.location.pathname || pathName === localPath;
}

function Router({ routes }: Props) {
  const [localPath, setLocalPath] = useState("/");

  return (
    <RouterContext.Provider value={{ localPath, setLocalPath }}>
      {routes.map((route) => {
        if (isMatch(route.path, localPath)) {
          return route.Element;
        }
      })}
    </RouterContext.Provider>
  );
}

export default Router;

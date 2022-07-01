import { Fragment } from "react";
import MainHeader from "./MainHeader";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

//USE FRAGMENT TO IMPORT REACT COMPONENTS INTO NEXTJS//

export default Layout;

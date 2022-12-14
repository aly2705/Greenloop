import "./Layout.css";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;

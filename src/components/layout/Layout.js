import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;

//adding props.children will enable other comp

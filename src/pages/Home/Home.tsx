import { PagesTable } from "../../components/PagesTable/PagesTable";
import { PageForm } from "../../components/PageForm/PageForm";
import { Header } from "../../components/Header/Header";
import style from "./home.module.scss";

export const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div>
        <Header />
        <PageForm />
      </div>
      <PagesTable />
    </div>
  );
};

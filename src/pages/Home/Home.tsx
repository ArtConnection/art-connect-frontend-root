import { GeneralHeader } from "components/GeneralHeader";
import { SideBar } from "src/components/SideBar";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <GeneralHeader />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.content}>
          <h1 className={styles.title}>Home</h1>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./page.module.css";

const getData = (data: any) => {
  return data;
};

const Category = ({ params }: any) => {
  const data = getData(params.category);

  return (
    <div>
      {data.map((item: any) => {
        <div className={styles.item}>
          <div className={styles.content}>
            <h1>{data.title}</h1>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Category;

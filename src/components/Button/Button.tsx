import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

interface Props {
  text: string;
  url: string;
}

const Button = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;

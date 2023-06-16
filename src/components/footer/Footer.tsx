import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const media = [
  {
    src: "/github.png",
    href: "https://github.com/daganlarson",
  },
  {
    src: "/linkedin.png",
    href: "https://linkedin.com/in/daganlarson",
  },
];

function Footer() {
  return (
    <div className={styles.container}>
      <div>2023 Dagan Larson. All rights reserved.</div>
      <div className={styles.social}>
        {media.map((account) => (
          <a href={account.href} key={account.href}>
            <Image
              className={styles.icon}
              src={account.src}
              alt={account.href}
              key={account.href}
              height={20}
              width={20}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;

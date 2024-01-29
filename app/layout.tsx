import type { Metadata } from "next";
import "@/styles/globals.scss";
import styles from "@/styles/Layout.module.scss";
import {ILayout} from "@/Logic/interfaces";


export const metadata: Metadata = {
  title: "App",
  description: "Year project App",
};

export default function RootLayout({children}:ILayout) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div>

          </div>
          <div>

          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

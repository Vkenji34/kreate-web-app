import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";
import { Rubik } from "next/font/google";

import "~/styles/globals.css";

const rubik = Rubik({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <div className={rubik.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;

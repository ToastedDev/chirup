import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

import type { Metadata } from "next";
import Header from "@/components/header";
import { Alexandria } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const alexandria = Alexandria({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Velic",
  description:
    "Benjamin Velic is a software developer focused on creating accessible and inclusive digital products and web experiences",
  openGraph: {
    title: "Benjamin Velic",
    type: "website",
    url: "https://benjaminvelic.dev/",
    siteName: "Benjamin Velic",
    description:
      "Benjamin Velic is a software developer focused on creating accessible and inclusive digital products and web experiences",
    images: "/images/benjaminvelic.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexandria.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}

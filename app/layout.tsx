import type { Metadata } from "next";
import Header from "@/components/header";
import { Roboto, Audiowide } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactLenis } from "@/utils/lenis";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--audiowide",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gafurović Plast d.o.o",
  description: "",
  openGraph: {
    title: "Gafurović Plast d.o.o",
    type: "website",
    url: "https://gafurovicplast.com",
    siteName: "Gafurović Plast d.o.o",
    description: "",
    images: "https://gafurovicplast.com/images/metaimage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${roboto.className} ${audiowide.variable} antialiased`}
        >
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
      </ReactLenis>
    </html>
  );
}

import type { Metadata } from "next";
import Header from "@/components/header";
import { Roboto, Audiowide } from "next/font/google";
import "../styles/globals.css";
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
  description:
    "Gafurović Plast je specijaliziran za visokokvalitetne PVC i aluminijske prozore, vrata i garažna vrata. Nudimo moderna, energetski efikasna rješenja dizajnirana za trajnost, sigurnost i estetski izgled. Naši proizvodi zadovoljavaju najviše standarde, pružajući udobnost i pouzdanost za vaš dom ili poslovni prostor. Otkrijte naše vrhunske dizajne i usluge za sve vaše građevinske potrebe.",
  openGraph: {
    title: "Gafurović Plast d.o.o",
    type: "website",
    url: "https://gafurovicplast.com",
    siteName: "Gafurović Plast d.o.o",
    description:
      "Gafurović Plast je specijaliziran za visokokvalitetne PVC i aluminijske prozore, vrata i garažna vrata. Nudimo moderna, energetski efikasna rješenja dizajnirana za trajnost, sigurnost i estetski izgled. Naši proizvodi zadovoljavaju najviše standarde, pružajući udobnost i pouzdanost za vaš dom ili poslovni prostor. Otkrijte naše vrhunske dizajne i usluge za sve vaše građevinske potrebe.",
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
          {/*  <Footer /> */}
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

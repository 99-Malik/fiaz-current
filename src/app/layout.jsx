import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import FixedCallButtons from "@/components/FixedCallButtons";
import Script from "next/script";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Repair Home UAE",
  description:
    "Repair Home UAE is a site for repairing appliances.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16717259338" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','AW-16717259338');
        ` }} />

{/*         <Script dangerouslySetInnerHTML={{
          __html: `
        function gtagSendEvent(url) {
    var callback = function () {
      if (typeof url === 'string') {
        window.location = url;
      }
    };
    gtag('event', 'conversion_event_contact', {
      'event_callback': callback,
      'event_timeout': 2000,
      // <event_parameters>
    });
    return false;
  }
        ` }} /> */}
      </head>
      <body className={`${font.className} flex flex-col`}>
        {children}
        <FixedCallButtons />
      </body>
    </html>
  );
}

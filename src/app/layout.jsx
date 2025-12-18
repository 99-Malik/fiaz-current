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
        {/* Google tag (gtag.js) */}
        <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GT-KFTQ5FS" 
        />

        {/* Google tag initialization */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GT-KFTQ5FS');
            `,
          }}
        />

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

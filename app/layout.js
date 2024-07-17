import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient";
import "./globals.css";
import NavbarComponent from "@/components/navbars/NavbarComponent";
import FooterComponent from "@/components/footers/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TUDev",
  description: "Temple University's student-run coding organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        <FooterComponent />
        <BootstrapClient />
      </body>
    </html>
  );
}

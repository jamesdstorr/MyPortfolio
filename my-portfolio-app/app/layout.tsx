import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { DisplayProvider } from "./utility/displayContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Storr",
  description: "Portfolio and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <DisplayProvider>
          <div>
            <Nav /> 
            <main>{children}</main> 
          </div>
        </DisplayProvider>
      </body>
    </html>
  );
}

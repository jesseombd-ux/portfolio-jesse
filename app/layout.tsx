import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfólio – Jessé Oliveira",
  description: "Portfólio profissional",
};

export default function RootLayout(props) {
  const { children } = props;

  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

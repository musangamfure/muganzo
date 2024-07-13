import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import Head from "next/head";
import { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muganzo Interior Design and Woodworking in Rwanda",
  description:
    "Best woodworking and interior design services in Rwanda, specializing in custom wood furniture and home decor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Muganzo Interior Design Ltd",
    url: "https://muganzo.vercel.app",
    description:
      "Best woodworking and interior design services in Rwanda, specializing in custom wood furnitures and home interiors.",
    address: {
      streetAddress: "GM47+M2Q, Nyakinama",
      addressLocality: "Kigali, Musanze",
      addressRegion: "Musanze",
      postalCode: "250",
      addressCountry: "Rwanda",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+250-782893504",
      contactType: "Business Service",
    },
  };

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Interior Design, Woodworking, Rwanda, Custom wood Furnitures, Home Decor, Muganzo Interior Design, Custom Furniture Rwanda, Home Decor Rwanda, Interior Decorator Rwanda, Residential Interior Design Rwanda, Commercial Interior Design Rwanda, Bespoke Furniture Rwanda, Custom Cabinets Rwanda, Luxury Interior Design Rwanda, Modern Interior Design Rwanda, Traditional Interior Design Rwanda, Kitchen Renovation Rwanda, Bathroom Design Rwanda, Office Interior Design Rwanda, Living Room Design Rwanda, Bedroom Interior Design Rwanda, Interior Design Consultation Rwanda, Sustainable Woodworking Rwanda, Artisanal Furniture Rwanda, Interior Design Kigali, Woodworking Kigali, Custom Furniture Kigali, Home Decor Kigali, Interior Decorator Kigali, Residential Interior Design Kigali, Commercial Interior Design Kigali, Bespoke Furniture Kigali, Custom Cabinets Kigali, Luxury Interior Design Kigali, Modern Interior Design Kigali, Traditional Interior Design Kigali, Kitchen Renovation Kigali, Bathroom Design Kigali, Office Interior Design Kigali, Living Room Design Kigali, Bedroom Interior Design Kigali, Interior Design Consultation Kigali, Sustainable Woodworking Kigali, Artisanal Furniture Kigali, Interior Design Musanze, Woodworking Musanze, Custom Furniture Musanze, Home Decor Musanze, Interior Decorator Musanze, Residential Interior Design Musanze, Commercial Interior Design Musanze, Bespoke Furniture Musanze, Custom Cabinets Musanze, Luxury Interior Design Musanze, Modern Interior Design Musanze, Traditional Interior Design Musanze, Kitchen Renovation Musanze, Bathroom Design Musanze, Office Interior Design Musanze, Living Room Design Musanze, Bedroom Interior Design Musanze, Interior Design Consultation Musanze, Sustainable Woodworking Musanze, Artisanal Furniture Musanze"
        />
        <meta name="author" content="Muganzo Interior Design" />
        <link rel="canonical" href="https://muganzo.vercel.app" />
        <meta
          property="og:title"
          content="Muganzo Interior Design. Best Woodworking Services in Rwanda"
        />
        <meta
          property="og:description"
          content="Best woodworking and interior design services in Rwanda, specializing in custom furniture and home decor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muganzo.vercel.app" />
        <meta
          property="og:image"
          content="https://muganzo.vercel.app/path/to/image.jpg"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <body data-barba="wrapper">
        <div className="content_container">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}

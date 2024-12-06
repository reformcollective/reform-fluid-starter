import getCompany from "@/api/getCompany";
import Footer from "@/components/PageElements/Footer";
import Navbar from "@/components/PageElements/Navbar";
import config from "@/config/env_config";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "../globals.css";

faConfig.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    fcs: any;
    fluidChatSettings: any;
    fluidSettings: any;
    Spreedly: any;
    showCartCount: Function;
  }
}

type PageProps = Readonly<{
  children: React.ReactNode;
  params: Record<string, string>;
}>;

export default async function RootLayout({ children, params }: PageProps) {
  const { affiliateSlug } = params;
  const company = await getCompany();

  return (
    <html lang="en">
      <head>
        <Script id="fluid-widget-boot" strategy="beforeInteractive">
          {`
          window.fcs = {api_url_host: '${config.apiHost}', affiliate: { credit: '${affiliateSlug}' }};
          (function(){ var f_ws = document.createElement('script'); f_ws.async = true; f_ws.src = '${config.widgetHost}'; x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(f_ws,x); })();
        `}
        </Script>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="icon"
          href={company.logo_url || "https://cdn.fluid.app/favicon-16x16.png"}
        />
      </head>
      <body className={`${inter.className} h-screen`}>
        <Navbar params={params} company={company} />
        {children}
        <Footer params={params} company={company} />
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const company = await getCompany();
  const headersList = headers();

  return {
    title: company.name,
    openGraph: {
      title: company.name,
      url: `${headersList.get("x-url")}`,
      images: [
        {
          url: company.logo_url,
          width: 800,
          height: 600,
          alt: `${company.name} logo`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      images: [
        {
          url: company.logo_url,
          width: 800,
          height: 600,
          alt: `${company.name} logo`,
        },
      ],
    },
  };
}

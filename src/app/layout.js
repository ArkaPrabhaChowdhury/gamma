import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Gamma Innovations - Empowering Businesses with Transformative Technology Solutions",
  description:
    "Gamma Innovations is dedicated to empowering businesses with innovative app and website development solutions that drive growth and propel businesses forward in the digital landscape. Discover our tailored services today!",
  keywords: [
    "Gamma Innovations",
    "web development",
    "app development",
    "software development",
    "digital marketing",
    "tech consultancy",
  ],
  metadataBase: new URL("https://www.gammainnovations.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gamma Innovations - Software Development Solutions",
    description:
      "Gamma Innovations is dedicated to empowering businesses with innovative app and website development solutions that drive growth and propel businesses forward in the digital landscape. Discover our tailored services today!",
    url: "https://www.gammainnovations.com",
    type: "website",
    siteName: "Gamma Innovations",
    images: "/gamma.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-94NQDHPXMC" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-94NQDHPXMC');
        `}
        </Script>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11280671175"></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11280671175');
          `}
        </Script>

        <Script>{`
  window.addEventListener('load', function() {
    if (document.location.pathname.includes('/digital-marketing')) {
      document.addEventListener('click', function(e) {
        if (e.target.closest('button') && e.target.innerText.toLowerCase().includes('send message')) {
          var timer = setInterval(function() {
            if (document.querySelector('.Toastify__toast--success') && document.querySelector('.Toastify__toast--success').innerText.includes('Thanks for reaching out!')) {
              gtag('event', 'conversion', {
                'send_to': 'AW-11280671175/ejnJCJnZ6-sYEMfDhYMq'
              });
            }
          }, 1000)
        }
      })
    }
    if (document.location.pathname.includes('/web-development')) {
      document.addEventListener('click', function(e) {
        if (e.target.closest('button') && e.target.innerText.toLowerCase().includes('send message')) {
          var timer = setInterval(function() {
            if (document.querySelector('.Toastify__toast--success') && document.querySelector('.Toastify__toast--success').innerText.includes('Thanks for reaching out!')) {
              gtag('event', 'conversion', {
                'send_to': 'AW-11280671175/1KK4CJOE4OsYEMfDhYMq'
              });
            }
          }, 1000)
        }
      })
    }
    if (document.location.pathname.includes('/app-development')) {
      document.addEventListener('click', function(e) {
        if (e.target.closest('button') && e.target.innerText.toLowerCase().includes('send message')) {
          var timer = setInterval(function() {
            if (document.querySelector('.Toastify__toast--success') && document.querySelector('.Toastify__toast--success').innerText.includes('Thanks for reaching out!')) {
              gtag('event', 'conversion', {
                'send_to': 'AW-11280671175/0bpXCMCb3-sYEMfDhYMq'
              });
            }
          }, 1000)
        }
      })
    }
  });

`}</Script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>    
    <a href="https://wa.me/916378211571?text=Hi,%20I%20am%20interested%20in%20services%20provided%20by%20GammaInnovations.com%20and%20want%20to%20discuss%20more." class="floatXY" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>
        {children}
      </body>
    </html>
  );
}

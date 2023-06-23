'use client';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import {
  Footer,
  Header,
  HeaderMobile,
  Locations,
  ModalForm
} from './components/Foundation';
import { client } from './graphql/config';
import { ApolloProvider } from '@apollo/client';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './globals.css';

export default function RootLayout({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Sempre Tecnologia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <Script />
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "58acgh3ffd");`}
        </script>
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N8Z66M2');`}
        </script>
      </head>
      <body>
        <ApolloProvider client={client}>
          <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
          <HeaderMobile />
          <Header />
          {children}
          <Locations />
          <Footer>
            <div
              className="cursor-pointer flex flex-col lg:flex-row items-center"
              onClick={() => setOpenModal(true)}
            >
              <Image
                alt="Sempre Tecnologia"
                height={26}
                quality={100}
                src="/icon-clock.svg"
                width={26}
              />
              <span className="font-serif font-semibold ml-3 mt-2 text-dark-blue text-center lg:text-left">
                Podemos ir até você, agende um horário.
              </span>
            </div>
          </Footer>
          <Link
            href="https://api.whatsapp.com/send?phone=556130839390"
            target="_blank"
            className="fixed bg-[#25D366] bottom-4 drop-shadow-xl h-16 right-4 rounded-full w-16"
          >
            <FontAwesomeIcon
              className="text-white h-10 w-10 mt-3 ml-3"
              icon={faWhatsapp}
            />
          </Link>
        </ApolloProvider>
      </body>
    </html>
  );
}

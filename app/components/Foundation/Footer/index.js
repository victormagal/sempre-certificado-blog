/* eslint-disable no-undef */
import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';
import { neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import SocialIcon from '@/app/base/SocialIcon';
import { Text, Title } from '@/app/base/Typography';

export default function Footer() {
  return (
    <footer className="lg:bottom-0 lg:fixed lg:w-full">
      <Container bgColor={neutralLight[200]} newClasses="py-8">
        <div className="col-span-4 lg:col-span-2 flex flex-col items-center lg:items-start">
          <Title appearance="h7" color={neutralDark[500]}>
            Siga nossas redes sociais
          </Title>
          <ul className="flex mt-4 space-x-3">
            <li>
              <Link
                href="https://www.facebook.com/sempretecnologia/"
                target="_blank"
              >
                <SocialIcon
                  icon="faSquareFacebook"
                  iconColor={neutralLight[600]}
                  newClasses="h-6"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/sempre-tecnologia/"
                target="_blank"
              >
                <SocialIcon
                  icon="faLinkedinIn"
                  iconColor={neutralLight[600]}
                  newClasses="h-6"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/sempretecnologia/"
                target="_blank"
              >
                <SocialIcon
                  icon="faInstagram"
                  iconColor={neutralLight[600]}
                  newClasses="h-6"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-8 flex items-center justify-center">
          <Text
            appearance="p3"
            className="text-center lg:text-left"
            color={neutralMid[500]}
          >
            © 2023 Sempre Tecnologia. Todos os direitos reservados.
          </Text>
        </div>
        <div className="col-span-4 lg:col-span-2 lg:col-end-13 flex justify-center lg:justify-end">
          <Link href="/">
            <Image
              alt="Sempre Tecnologia"
              height={46}
              src="/logo-positiva.svg"
              width={172}
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

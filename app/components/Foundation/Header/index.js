/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import SolidIcon from '@/app/base/SolidIcon';
import { Text, Title } from '@/app/base/Typography';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.addEventListener('click', closeDropdownItens);
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();

    const nextElement = e.currentTarget.nextSibling;
    const allElements = [...document.getElementsByClassName('dropDown')];

    allElements.map((element) => {
      if (element === nextElement && element.classList.contains('hidden')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  };

  const closeDropdownItens = () => {
    const elements = [...document.getElementsByClassName('dropDown')];

    elements.map((element) => {
      if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
      }
    });
  };

  return (
    <header className="lg:block lg:border-b fixed hidden w-full z-60">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Container bgColor={neutralLight[100]} newClasses="py-7">
        <div className="col-span-2 flex justify-center items-center">
          <Link href="/">
            <Image
              alt="Sempre Tecnologia"
              height={46}
              src="/logo-positiva.svg"
              width={172}
            />
          </Link>
        </div>
        <nav className="col-end-13 col-span-10">
          <ul className="flex items-center justify-end space-x-3 xl:space-x-12">
            <li>
              <button
                className="flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <Text appearance="p4" color={neutralMid[600]}>
                  Seja um parceiro
                </Text>
                <SolidIcon
                  icon="faChevronDown"
                  iconColor={neutralMid[600]}
                  newClasses="h-3"
                />
              </button>
              <ul
                className="absolute dropDown drop-shadow hidden mt-4 p-6 w-[360px]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ backgroundColor: neutralLight[100] }}
              >
                <Link
                  onClick={closeDropdownItens}
                  href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/parceria`}
                  target="_blank"
                >
                  <li className="flex items-start space-x-4">
                    <div>
                      <SolidIcon
                        icon="faFileLines"
                        iconColor={red[600]}
                        newClasses="h-6"
                      />
                    </div>
                    <div>
                      <Title appearance="h7" color={neutralDark[500]}>
                        Parceria em Certificado Digital
                      </Title>
                      <Text appearance="p4" color={neutralMid[500]}>
                        Programa de parceria para venda de Certificado Digital
                      </Text>
                    </div>
                  </li>
                </Link>
              </ul>
            </li>
            <li>
              <button
                className="px-8 py-3 rounded"
                onClick={() => setOpenModal(true)}
                style={{
                  background: red[1000]
                }}
                type="button"
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Fale agora
                </Text>
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

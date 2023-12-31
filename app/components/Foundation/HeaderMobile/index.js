/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { neutralDark, neutralMid, neutralLight, red } from '@/app/base/Colors';
import SolidIcon from '@/app/base/SolidIcon';
import { Text, Title } from '@/app/base/Typography';

export default function HeaderMobile() {
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const burgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block lg:hidden">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <section
        className="fixed top-0 w-full z-50"
        style={{ backgroundColor: neutralLight[100] }}
      >
        <div
          className="border-b py-6"
          style={{ borderColor: neutralLight[400] }}
        >
          <Container>
            <div className="col-span-4 flex justify-between items-center">
              <Link href="/">
                <Image
                  alt="Sempre Tecnologia"
                  height={46}
                  src="/logo-positiva.svg"
                  width={172}
                />
              </Link>
              <button
                className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none col-span-1 order-last"
                onClick={burgerMenu}
              >
                {!isOpen ? (
                  <SolidIcon
                    icon="faBars"
                    iconColor={neutralMid[400]}
                    newClasses="h-8"
                  />
                ) : (
                  <SolidIcon
                    icon="faXmark"
                    iconColor={neutralMid[400]}
                    newClasses="h-8"
                  />
                )}
              </button>
            </div>
          </Container>
        </div>
        {isOpen && (
          <>
            <Container newClasses="py-6">
              <div
                className="col-span-4"
                style={{ backgroundColor: neutralLight[100] }}
              >
                <ul className="flex flex-col space-y-6">
                  <li>
                    <details className="flex flex-col space-y-6">
                      <summary className="flex items-center justify-between">
                        <Title appearance="h6" color={neutralDark[500]}>
                          Seja um parceiro
                        </Title>
                        <SolidIcon
                          icon="faChevronDown"
                          iconColor={neutralMid[500]}
                          newClasses="h-4"
                        />
                      </summary>
                      <article>
                        <ul className="flex flex-col space-y-6">
                          <Link onClick={burgerMenu} href="/parceria">
                            <li className="flex space-x-4">
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
                                  Programa de parceria para venda de Certificado
                                  Digital
                                </Text>
                              </div>
                            </li>
                          </Link>
                        </ul>
                      </article>
                    </details>
                  </li>
                </ul>
              </div>
            </Container>
            <div
              className="border-t"
              style={{ borderColor: neutralLight[400] }}
            >
              <Container>
                <div className="col-span-4 p-4">
                  <button
                    className="py-3 rounded-md w-full"
                    onClick={() => setOpenModal(true)}
                    style={{
                      background: red[1000]
                    }}
                    type="button"
                  >
                    <Title appearance="h6" color={neutralLight[100]}>
                      Fale agora
                    </Title>
                  </button>
                </div>
              </Container>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

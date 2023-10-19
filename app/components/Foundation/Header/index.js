/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import RegularIcon from '@/app/base/RegularIcon';
import SolidIcon from '@/app/base/SolidIcon';
import { Overline, Text, Title } from '@/app/base/Typography';

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
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Home
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <Text appearance="p4" color={neutralMid[600]}>
                  Quem somos
                </Text>
              </Link>
            </li>
            <li>
              <button
                className="flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <Text appearance="p4" color={neutralMid[600]}>
                  Segmentos
                </Text>
                <SolidIcon
                  icon="faChevronDown"
                  iconColor={neutralMid[600]}
                  newClasses="h-3"
                />
              </button>
              <nav
                className="absolute dropDown drop-shadow hidden mt-4 p-8 translate-x-[-33%] xl:translate-x-[-40%]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ backgroundColor: neutralLight[100] }}
              >
                <div className="flex space-x-12">
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[250px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Distribuidores
                      </Overline>
                    </li>
                    <Link
                      onClick={closeDropdownItens}
                      href="/pescados-suinos-e-bovinos"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faCow"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Pescados, bovinos e suínos
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/hortifruti">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faSeedling"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Hortifruti
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/cosmeticos">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faEye"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Cosméticos
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/picoles-e-sorvetes"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faIceCream"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Picolés e sorvetes
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/paes-e-salgados">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBreadSlice"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Pães e Salgados
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/distribuidores">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[250px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Pequenos varejos
                      </Overline>
                    </li>
                    <Link
                      onClick={closeDropdownItens}
                      href="/vestuarios-e-calcados"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faShirt"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Vestuários e calçados
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/barbearias-e-saloes-de-beleza"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faScissors"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Barbearias e salões de beleza
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/petshops">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faDog"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Petshops
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/lanchonetes-e-quiosques"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBurger"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Lanchonetes e quiosques
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/moveis-e-colchoes"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faChair"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Móveis e colchões
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/pequenos-varejos">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[250px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Prestadores de serviço
                      </Overline>
                    </li>
                    <Link onClick={closeDropdownItens} href="/contabilidade">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faCalculator"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Contabilidade
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/bpo">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faCalculator"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          BPO
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/construtoras-e-engenharias"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faTractor"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Construtoras e Engenharias
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/consultorios">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faStethoscope"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Consultórios
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/seguranca-limpeza-e-conservacao"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBuildingShield"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Segurança, limpeza e conservação
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/manutencao-e-Instalacoes"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faHelmetSafety"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Manutenção e instalações
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/prestadores-de-servico"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[250px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Recorrentes
                      </Overline>
                    </li>
                    <Link
                      onClick={closeDropdownItens}
                      href="/associacoes-e-sindicatos"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faHandshake"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Associações e sindicatos
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/clubes">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faWaterLadder"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Clubes
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/cursos">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBook"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Cursos
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/condominios">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faBuilding"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Condomínios
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/locacoes-e-servicos"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBellConcierge"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Locações e serviços
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/recorrentes">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[250px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Documentos fiscais
                      </Overline>
                    </li>
                    <Link
                      onClick={closeDropdownItens}
                      href="/emissao-de-notas-fiscais-de-produtos-nf-e"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faFileLines"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          NF-e Nota Fiscal Produtos
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/nota-fiscal-de-servico-eletronica-nfs-e"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faFileLines"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          NF-e Nota Fiscal Serviços
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/conhecimento-de-transporte-eletronico-ct-e"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faCarSide"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          CT-e Conhecimento de transporte
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/manifesto-do-destinatario-mdf-e"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faArrowsUpDownLeftRight"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          MDF-e Manifesto destinatário
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/nota-fiscal-ao-consumidor-eletronica-nfc-e"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faUser"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          NFC-e Nota Fiscal Consumidor
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/documentos-fiscais"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                </div>
              </nav>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralMid[600]}>
                  Certificado Digital
                </Text>
              </Link>
            </li>
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
                <Link onClick={closeDropdownItens} href="/contador">
                  <li className="flex items-start mb-4 space-x-4">
                    <div>
                      <SolidIcon
                        icon="faFileLines"
                        iconColor={red[600]}
                        newClasses="h-6"
                      />
                    </div>
                    <div>
                      <Title appearance="h7" color={neutralDark[500]}>
                        Parceria para Contadores
                      </Title>
                      <Text appearance="p4" color={neutralMid[500]}>
                        Conheça e aproveite benefícios exclusivos
                      </Text>
                    </div>
                  </li>
                </Link>
                <Link onClick={closeDropdownItens} href="/parceria">
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
              <Link href="/noticias">
                <Text appearance="p4" color={neutralMid[600]}>
                  Blog
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/contato">
                <Text appearance="p4" color={neutralMid[600]}>
                  Contato
                </Text>
              </Link>
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

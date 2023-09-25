'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <header className="bg-white fixed w-full z-60 border-b">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Container newClasses="py-6">
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
        <nav className="col-end-13 col-span-9 flex space-x-4 justify-between items-center">
          <ul className="flex items-center justify-between w-full ">
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
            <li className="relative">
              <button className="flex" onClick={toggleMenu}>
                <Text appearance="p4" color={neutralMid[600]}>
                  Segmentos
                </Text>
                <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
              </button>
              <ul
                className="fixed left-52 dropDown drop-shadow rounded w-auto h-auto pt-6 bg-white px-4 flex gap-6"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <li className="flex-1">
                  <ul>
                    <Title
                      className="mb-1"
                      appearance="h7"
                      color={neutralMid[600]}
                      extra
                    >
                      Distribuidores
                    </Title>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/pescados.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Pescados, bovinos e suínos
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/paes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Pães e salgados
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/hortifruti.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Hortifruti
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/cosmeticos.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Comésticos
                      </Text>
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/picoles.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Picolés e sorvetes
                      </Text>
                    </li>
                  </ul>
                </li>

                <li className="flex-1">
                  <ul>
                    <Title
                      className="mb-1"
                      appearance="h7"
                      color={neutralMid[600]}
                      extra
                    >
                      Pequenos varejos
                    </Title>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/vestuarios.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Vestuários e calçados
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/barbearias.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Barbearias e salões de beleza
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/petshops.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Petshops
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/lanchonetes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Lanchonetes e quiosques
                      </Text>
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/moveis.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Móveis e colchões
                      </Text>
                    </li>
                  </ul>
                </li>

                <li className="flex-1">
                  <ul>
                    <Title
                      className="mb-1"
                      appearance="h7"
                      color={neutralMid[600]}
                      extra
                    >
                      Prestadores de serviço
                    </Title>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/contabilidades.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Contabilidades e BPO
                    </li>
                    <li className="flex text-sm py-3 mb-2 w-full">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/construtoras.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Construtoras e Engenharias
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/consultorios.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Consultórios
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/seguranca.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Segurança, limpeza e conservação
                      </Text>
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/manutencao.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Manutenção e instalações
                      </Text>
                    </li>
                  </ul>
                </li>

                <li className="flex-1">
                  <ul>
                    <Title
                      className="mb-1"
                      appearance="h7"
                      color={neutralMid[600]}
                      extra
                    >
                      Recorrentes
                    </Title>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/associacoes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Associações e sindicatos
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/clubes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Clubes
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/cursos.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Cursos
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/condominios.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Condomínios
                      </Text>
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/locacoes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        Locações e serviços
                      </Text>
                    </li>
                  </ul>
                </li>

                <li className="flex-1">
                  <ul>
                    <Title
                      className="mb-1"
                      appearance="h7"
                      color={neutralMid[600]}
                      extra
                    >
                      Documentos fiscais
                    </Title>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/nfprodutos.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        NF-e Nota Fiscal Produtos
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/nfservicos.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        NF-e Nota Fiscal Serviços
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/conhecimento.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        CT-e Conhecimento de transporte
                      </Text>
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/manifesto.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        MDF-e Manifesto destinatário
                      </Text>
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/nfconsumidor.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <Text appearance="p4" color={neutralDark[500]}>
                        NFC-e Nota Fiscal Consumidor
                      </Text>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/parceria">
                <Text appearance="p4" color={neutralMid[600]}>
                  Certificado Digital
                </Text>
              </Link>
            </li>
            <li className="relative">
              <button className="flex" onClick={toggleMenu}>
                <Text appearance="p4" color={neutralMid[600]}>
                  Seja um parceiro
                </Text>
                <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
              </button>
              <ul
                className="absolute dropDown drop-shadow rounded w-96 h-48 hidden pt-6 bg-white px-4 "
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <li className="flex">
                  <ul>
                    <li className="flex items-start text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/parceiro.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <div>
                        <Title
                          className="mb-1"
                          appearance="h7"
                          color={neutralDark[500]}
                          extra
                        >
                          Programa de parceria para Contadores
                        </Title>
                        <Text appearance="p4" color={neutralMid[500]}>
                          Conheça e aproveite benefícios exclusivos.
                        </Text>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="flex">
                  <ul>
                    <li className="flex items-start text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/parceiro.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      <div>
                        <Title
                          className="mb-1"
                          appearance="h7"
                          color={neutralDark[500]}
                          extra
                        >
                          Seja um parceiro certificador
                        </Title>
                        <Text appearance="p4" color={neutralMid[500]}>
                          Programa de parceria para venda de Certificado Digital
                          e Sistemas Web de Gestão.
                        </Text>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Blog
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Suporte
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

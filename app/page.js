'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  creamAssistant,
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from './base/Colors';
import SolidIcon from './base/SolidIcon';
import { Overline, Text, Title } from './base/Typography';
import { LastPosts, ModalVimeo, Tabs } from './components/Elements';
import { Container, ModalForm, Testimonies } from './components/Foundation';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalVimeo, setOpenModalVimeo] = useState(false);

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <ModalVimeo
        open={openModalVimeo}
        onClose={() => setOpenModalVimeo(false)}
        link="https://player.vimeo.com/video/554410663?h=75a44195db&title=0&byline=0&portrait=0"
      />
      <Container newClasses="py-14">
        <div className="col-span-4 lg:col-span-6 flex flex-col justify-center space-y-10">
          <Title appearance="h1" color={neutralDark[500]} extra>
            Seja bem-vindo a Sempre Tecnologia
          </Title>
          <Text appearance="p3" color={neutralMid[500]}>
            Atuamos no desenvolvimento de Sistemas Web de Gestão com tecnologia
            própria para diversos segmentos e contamos com o credenciamento na
            emissão de Certificado Digital em todo o Brasil.{' '}
            <strong>Conheça os segmentos em que atuamos.</strong>
          </Text>
          <button
            className="w-full xl:w-1/3 py-4 px-8 rounded"
            onClick={() => setOpenModal(true)}
            style={{ background: red[1000] }}
            type="button"
          >
            <Text appearance="p4" color={neutralLight[100]}>
              Fale com um consultor
            </Text>
          </button>
        </div>
        <div className="col-span-4 lg:col-span-6 flex items-center justify-end">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={539}
            src="/hero-home.png"
            width={560}
          />
        </div>
      </Container>
      <Container bgContainer={neutralDark[500]} newClasses="rounded-2xl">
        <div className="col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col lg:flex-row lg:justify-between py-12 space-y-12 lg:space-y-0">
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              97%
            </Title>
            <Title appearance="h6" color={neutralMid[100]} extra>
              Atendimento Pós-Venda
            </Title>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              98%
            </Title>
            <Title appearance="h6" color={neutralMid[100]} extra>
              Atendimento Suporte Técnico a Sistemas
            </Title>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              85%
            </Title>
            <Title appearance="h6" color={neutralMid[100]} extra>
              Atendimento Certificado Digital
            </Title>
          </div>
        </div>
      </Container>
      <Container newClasses="py-16">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col space-y-4">
          <Overline appearance="o1" className="text-center" color={red[700]}>
            Segmentos
          </Overline>
          <Title
            appearance="h2"
            className="text-center"
            color={neutralDark[500]}
            extra
          >
            Qual é a sua necessidade?
          </Title>
          <Text appearance="p1" className="text-center" color={neutralMid[500]}>
            Temos um sistema de gestão perfeito para você. Confira as nossas
            soluções:
          </Text>
        </div>
      </Container>
      <Tabs />
      <Container bgColor={creamAssistant[100]} newClasses="mt-12 py-20">
        <div className="col-span-4 lg:col-span-6 flex flex-col justify-center space-y-6">
          <Overline appearance="o1" color={red[700]}>
            Quem somos
          </Overline>
          <Title appearance="h1" color={neutralDark[500]} extra>
            Você conhece a Sempre Tecnologia?
          </Title>
        </div>
        <div className="col-span-4 lg:col-span-6 flex items-center">
          <Text appearance="p3" color={neutralMid[500]}>
            Somos uma empresa especializada em desenvolver sistemas com
            tecnologia própria em plataforma web para nossos clientes. Já
            estamos há mais de 12 anos no mercado. Possuímos uma estrutura ampla
            e atendimento diferenciado para atender e dar suporte para micro,
            pequenas e médias empresas.
          </Text>
        </div>
        <div className="col-span-4 lg:col-span-12 flex justify-center mt-8">
          <Image
            className="cursor-pointer"
            height={388}
            onClick={() => setOpenModalVimeo(true)}
            src="/bg-play-home-quem-somos.png"
            width={1151}
          />
        </div>
      </Container>
      <Testimonies />
      <Container newClasses="py-16">
        <ul className="col-span-4 lg:col-span-12 flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
          <li>
            <Image
              alt="Litoral"
              height={35}
              src="/parceiros/litoral.png"
              width={88}
            />
          </li>
          <li>
            <Image
              alt="SmartFit"
              height={35}
              src="/parceiros/smart-fit.png"
              width={98}
            />
          </li>
          <li>
            <Image
              alt="Coco Bambu"
              height={28}
              src="/parceiros/coco-bambu.png"
              width={134}
            />
          </li>
          <li>
            <Image
              alt="Sebrae"
              height={30}
              src="/parceiros/sebrae.png"
              width={56}
            />
          </li>
          <li>
            <Image
              alt="Magic Color"
              height={35}
              src="/parceiros/magic-color.png"
              width={56}
            />
          </li>
          <li>
            <Image
              alt="Valor Ambiental"
              height={38}
              src="/parceiros/valor-ambiental.png"
              width={37}
            />
          </li>
        </ul>
      </Container>
      <Container bgColor={creamAssistant[100]} newClasses="py-16">
        <div className="col-span-4 lg:col-span-6">
          <Overline appearance="o1" color={red[700]}>
            Blog
          </Overline>
          <Title appearance="h2" color={neutralDark[500]}>
            Quer dicas, conteúdos e tirar dúvidas? Acesse o nosso Blog
          </Title>
        </div>
        <div className="col-span-4 lg:col-span-6 flex items-center justify-center lg:justify-end">
          <button
            className="flex justify-center p-4 rounded-md w-full lg:w-auto"
            style={{ backgroundColor: red[1000] }}
          >
            <Link className="flex items-center space-x-3" href="/noticias">
              <Text appearance="p4" color={neutralLight[100]}>
                Veja todos os artigos
              </Text>
              <SolidIcon
                icon="faChevronRight"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
            </Link>
          </button>
        </div>
        <LastPosts />
      </Container>
      <Container
        bgContainer={neutralDark[500]}
        newClasses="mt-16 py-16 rounded-2xl"
      >
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-12">
          <Title appearance="h2" color={neutralLight[100]} extra>
            Seja Sempre!
          </Title>
          <Text appearance="p1" className="text-center" color={neutralMid[100]}>
            Venha conversar conosco. Temos a solução perfeita em sistemas web
            para alavancar a gestão do seu negócio.
          </Text>
          <button
            className="flex items-center p-4 rounded-md space-x-3"
            onClick={() => setOpenModal(true)}
            style={{ backgroundColor: red[1000] }}
          >
            <Text appearance="p4" color={neutralLight[100]}>
              Converse com um especialista
            </Text>
            <SolidIcon
              icon="faChevronRight"
              iconColor={neutralLight[100]}
              newClasses="h-3"
            />
          </button>
        </div>
      </Container>
    </main>
  );
}

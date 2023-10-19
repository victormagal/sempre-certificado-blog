'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  creamAssistant,
  emissor,
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from '../base/Colors';
import SolidIcon from '../base/SolidIcon';
import { Overline, Text, Title } from '../base/Typography';
import { CardFeature, ContactForm } from '../components/Elements';
import { Container, HeroPage, ModalForm } from '../components/Foundation';

export default function Contador() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <HeroPage bgColor={red[1100]} gradient={false}>
        <div className="col-span-4 lg:col-span-5 flex flex-col justify-center space-y-6">
          <Title appearance="h1" color={neutralLight[100]} extra>
            Programa de parceria com contadores
          </Title>
          <Text appearance="p3" color={neutralLight[100]}>
            Conheça nosso programa de parceria para Contadores e tenha vantagens
            exclusivas com a Sempre Tecnologia!
          </Text>
          <button
            className="w-full xl:w-1/3 py-4 lg:px-8 rounded"
            onClick={() => setOpenModal(true)}
            style={{ background: neutralLight[100] }}
            type="button"
          >
            <Text appearance="p4" color={neutralDark[500]}>
              Quero ser um parceiro
            </Text>
          </button>
        </div>
        <div className="col-span-4 lg:col-end-13 lg:col-span-6 flex justify-center lg:justify-end md:py-16">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={352}
            src="/hero-contadores.png"
            width={560}
          />
        </div>
      </HeroPage>
      <Container bgColor={neutralLight[200]} newClasses="py-16">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-6">
          <Overline appearance="o1" className="text-center" color={red[700]}>
            Parceria para contadores
          </Overline>
          <Title
            appearance="h2"
            className="text-center"
            color={neutralDark[500]}
            extra
          >
            Simplifique sua rotina e ganhe tempo e produtividade
          </Title>
          <Text appearance="p3" className="text-center" color={neutralMid[500]}>
            Nosso programa de parceria para contadores oferece recursos que vão
            otimizar a rotina do seu escritório. Assim, você terá mais tempo
            para se dedicar aos seus clientes.
          </Text>
        </div>
      </Container>
      <Container bgColor={neutralLight[200]} newClasses="pb-16">
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Você recebe todas as informações fiscais do seu cliente por meio de nossas soluções."
          icon="faBuilding"
          iconColor={red[600]}
          iconSize="h-10"
          title="Integração contábil"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Conte com nosso apoio tanto para seu escritório quanto para seus clientes. Estamos #SemprePresente"
          icon="faComments"
          iconColor={red[600]}
          iconSize="h-10"
          title="Atendimento diferenciado"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Plataforma para administrar as indicações de certificados digitais."
          icon="faGem"
          iconColor={red[600]}
          iconSize="h-10"
          title="Portal Sempre Contador"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Emita notas fiscais eletrônicas para seus clientes e gere renda adicional para seu escritório."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Solução Multiempresas"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Gerencie a validade dos certificados digitais de seus clientes por meio do Portal Sempre Contador."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Certificados digitais em dia"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Conte com nossas soluções web e facilite a vida do seu cliente e também da sua contabilidade."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Soluções web"
        />
        <div className="col-span-4 lg:col-span-12 flex justify-center">
          <button
            className="px-8 py-4 rounded-md w-full lg:w-auto"
            onClick={() => setOpenModal(true)}
            style={{ background: red[1000] }}
            type="button"
          >
            <Text appearance="p4" color={neutralLight[100]}>
              Quero ser um parceiro
            </Text>
          </button>
        </div>
      </Container>
      <section
        style={{
          background:
            'linear-gradient(0deg, transparent 0, transparent 165px, #F9FAFB 0, #F9FAFB 100%)'
        }}
      >
        <Container
          bgContainer={creamAssistant[200]}
          newClasses="pt-16 lg:pt-0 rounded-2xl"
        >
          <div className="col-span-4 lg:col-span-6 lg:col-start-2 flex flex-col justify-center space-y-4 xl:space-y-6">
            <div>
              <Image
                alt="Portal Sempre Contador"
                height={85}
                width={288}
                src="/logo-portal-sempre-contador.png"
              />
            </div>
            <Text appearance="p2" color={neutralDark[100]}>
              Você já é um parceiro? Acesse o Portal Sempre Contador e
              cadastre-se par receber vantagens exclusivas.
            </Text>
            <Link
              href="https://scd.semprecertificadora.com.br/app_login/"
              target="_blank"
            >
              <button
                className="flex items-center justify-center p-4 rounded-md space-x-3 w-full lg:w-auto"
                style={{ background: emissor[500] }}
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Acessar plataforma
                </Text>
                <SolidIcon
                  icon="faChevronRight"
                  iconColor={neutralLight[100]}
                  newClasses="h-3"
                />
              </button>
            </Link>
          </div>
          <div className="col-span-4">
            <Image
              alt="Portal Sempre Contador"
              className="mx-auto"
              height={373}
              width={470}
              quality={100}
              src="/avatar-portal-sempre-contador.png"
            />
          </div>
        </Container>
      </section>
      <Container newClasses="lg:pb-16 pt-16">
        <div className="col-span-4 lg:col-span-5 lg:col-start-2 flex items-stretch justify-center">
          <div className="self-center">
            <Image
              alt="Portal Sempre Contador"
              height={674}
              width={466}
              src="/img-ficou-interessado-esq.png"
            />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-5">
          <div className="flex flex-col mb-12 space-y-4">
            <Title appearance="h2" color={neutralDark[600]} extra>
              Ficou interessado?
            </Title>
            <Text appearance="p4" color={neutralDark[100]}>
              Temos vários benefícios exclusivos especialmente para a sua
              necessidade. Venha ser um parceiro!
            </Text>
          </div>
          <ContactForm
            companyForm={true}
            messageForm={false}
            placesForm={true}
          />
        </div>
      </Container>
    </main>
  );
}

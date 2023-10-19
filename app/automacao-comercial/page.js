'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, ColoredCard, Doubts, Testimony } from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  HeroPage,
  ModalForm
} from '../components/Foundation';
import { doubts } from './data';

export default function AutomacaoComercial() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <HeroPage
        arrow={false}
        cta={true}
        description="Para ajudar a organizar sua empresa."
        iconSource="/icon-automacao-comercial.svg"
        title="Soluções práticas"
        uri="/bg-automacao-comercial.png"
      />
      <Container newClasses="py-12 lg:py-24">
        <div className="col-span-4 lg:col-span-6">
          <Image
            alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
            height={562}
            quality={100}
            src="/ilustracao-automacao-comercial.svg"
            width={758}
          />
        </div>
        <div className="col-span-4 lg:col-span-6 flex flex-col justify-center items-center lg:items-start">
          <Image
            alt="Sempre emissor de notas"
            height={20}
            quality={100}
            src="/title-automacao-comercial.svg"
            width={159}
          />
          <h1 className="font-serif font-bold mt-6 text-dark-blue text-2xl lg:text-4xl text-center lg:text-left">
            A automação pode ser o diferencial que sua empresa precisa
          </h1>
          <p className="mt-6 text-soft-gray text-center lg:text-left">
            Um sistema para o seu pequeno varejo para cadastrar clientes,
            fornecedores e produtos, além de conseguir emitir cupons
            eletrônicos, notas fiscais, controlar estoque, fluxo de caixa e
            muito mais, tudo de maneira simples para facilitar o funcionamento e
            gestão de sua empresa.
          </p>
        </div>
      </Container>
      <Container newClasses="pb-24">
        <h1 className="col-span-4 lg:col-span-12 font-sans my-6 text-dark-blue text-3xl text-center">
          <span className="font-bold">Funcionalidades exclusivas</span> que são
          ideais para o seu negócio:
        </h1>
        <Card
          description="O consumo de internet é mínimo pois só faz uso de internet no momento de emitir o NFC-e, dessa forma é uma boa solução para quiosques que usam internet móvel."
          imageSource="/icon-automacao-1.svg"
          title="Independência"
        />
        <Card
          description="Solução web para empresas prestadoras de serviços que precisam emitir notas eletrônicas com Imposto Sobre Serviço (ISS)."
          imageSource="/icon-automacao-2.svg"
          title="Baixo consumo de dados"
        />
        <Card
          description="Transmissão integrada com o sistema web, possibilitando acompanhar as vendas de qualquer lugar, sem a necessidade de configurações adicionais."
          imageSource="/icon-automacao-3.svg"
          title="Integração"
        />
        <Card
          description="Com o controle de caixa da nossa solução de automação comercial, é possível fazer o controle de caixa para conferência de dinheiro e tickets de cartão."
          imageSource="/icon-automacao-4.svg"
          title="Controle de caixa"
        />
        <Card
          description="Permite que lojas em localidades distintas compartilhem o mesmo 'banco de dados', facilitando a gestão do estoque e financeiro."
          imageSource="/icon-automacao-5.svg"
          title="Conexão"
        />
        <ColoredCard
          description="Automatize tarefas e garanta vantagens para seu negócio."
          firstColor="#1C6B8F"
          secondColor="#1B9096"
          title="Praticidade que agiliza processos"
        >
          <button
            className="bg-white font-bold mt-6 py-3 text-sm text-dark-blue rounded w-2/3"
            onClick={() => setOpenModal(true)}
            type="button"
          >
            Contrate Agora
          </button>
        </ColoredCard>
      </Container>
      <BackgroundContainer uri="/bg-automacao.svg">
        <div className="hidden lg:col-span-6 lg:flex justify-center items-center">
          <Image
            alt="Sempre PDV"
            height={480}
            quality={100}
            src="/ilustracao-automacao-comercial-2.svg"
            width={693}
          />
        </div>
        <div className="col-span-4 lg:col-span-6 flex flex-col space-y-4 items-center lg:items-start justify-center">
          <Image
            alt="Sempre PDV"
            height={20}
            quality={100}
            src="/logo-pdv.svg"
            width={111}
          />
          <h1 className="font-serif font-semibold text-white text-4xl text-center lg:text-left">
            Sistema para Pequenos Varejos
          </h1>
          <p className="text-white text-center lg:text-left">
            Adeque sua empresa às exigências da legislação vigente. O SemprePDV
            é de fácil utilização, cadastra clientes e produtos, emite cupons
            eletrônicos, gera relatórios de faturamento, vendas diárias e
            totais.
          </p>
          <button
            className="font-bold py-3 text-sm text-white rounded w-3/5"
            style={{
              background: 'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
            }}
            onClick={() => setOpenModal(true)}
            type="button"
          >
            Contrate Agora
          </button>
        </div>
      </BackgroundContainer>
      <Testimony />
      <BackgroundContainer uri="/bg-automacao-comercial-2.jpg">
        <div className="col-span-4 lg:col-span-5 lg:col-end-13 flex flex-col space-y-6">
          <header className="flex space-x-4 justify-center lg:justify-start items-center">
            <Image
              alt="App sempre mensalidade"
              height={52}
              quality={100}
              src="/icon-app-automacao.svg"
              width={54}
            />
            <span className="font-serif font-bold text-white text-lg">
              APP Sempre Comanda Eletrônica
            </span>
          </header>
          <h1 className="font-serif font-semibold text-white text-4xl text-center lg:text-left">
            Simples, prático e moderno.
          </h1>
          <p className="text-white  text-center lg:text-left">
            Anote o pedido, faça o controle de consumo e, ao final, a conta
            estará toda lançada no caixa.
          </p>
          <footer className="flex space-x-4 justify-center lg:justify-start">
            <Link
              href="https://play.google.com/store/apps/details?id=br.com.semprecomanda"
              target="_blank"
            >
              <Image
                alt="Google play"
                height={59}
                quality={100}
                src="/google-play.svg"
                width={203}
              />
            </Link>
            <Link
              href="https://apps.apple.com/br/app/sempre-comanda/id1514410814"
              target="_blank"
            >
              <Image
                alt="Apple story"
                height={59}
                quality={100}
                src="/apple-store.svg"
                width={203}
              />
            </Link>
          </footer>
        </div>
      </BackgroundContainer>
      <Doubts
        doubts={doubts}
        image="/cellphone-green.svg"
        theme="#35B6B4"
        title="Tire suas dúvidas sobre Sistemas para Pequeno Varejo"
      />
    </main>
  );
}

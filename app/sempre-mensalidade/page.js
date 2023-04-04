import Image from 'next/image';
import styles from './page.module.css';
import { Card, Testimony } from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  Footer,
  Header,
  HeroPage,
  Locations
} from '../components/Foundation';

export default function SempreMensalidade() {
  return (
    <>
      <Header />
      <main>
        <HeroPage
          description="Empresário e gestor que tem recebíveis recorrentes, nós temos funcionalidades que agilizarão seu dia a dia."
          iconSource="/icon-sempre-mensalidade.svg"
          title="Gestão de mensalidades"
          uri="/bg-sempre-mensalidade.jpg"
        />
        <Container newClasses="py-24">
          <div className="col-span-5">
            <Image
              alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
              height={382}
              quality={100}
              src="/bg-play-sempre-mensalidade.svg"
              width={570}
            />
          </div>
          <div className="col-span-4 flex flex-col justify-center">
            <Image
              alt="Sempre mensalidade"
              height={24}
              quality={100}
              src="/title-sempre-mensalidade.svg"
              width={205}
            />
            <h1 className="font-serif font-bold mt-6 text-dark-blue text-4xl">
              Gestão de faturamento e financeiro
            </h1>
            <p className="mt-6 text-soft-gray">
              Emissão de boletos em lote, envio automático por e-mail e cobrança
              automatizada, otimizam o fluxo de trabalho de empresas com
              recebíveis recorrentes.
            </p>
            <button
              className={`${styles.orange} font-sans font-bold mt-6 py-2 rounded text-sm w-1/2`}
            >
              Fale agora
            </button>
          </div>
        </Container>
        <Container newClasses="pb-24">
          <Card
            description="Tenha relatórios de faturamento e inadimplência com fácil acesso, também via app mobile e garanta para sua empresa mais organização e praticidade."
            imageSource="/icon-otimize-2.svg"
            title="Relatórios Gerenciais"
          />
          <Card
            description="Alertas de cobrança enviados automaticamente, controle de entrega e leitura de e-mail e régua de cobrança personalizada."
            imageSource="/icon-otimize-3.svg"
            title="Alertas automáticos"
          />
          <Card
            description="Atende às mais complexas regras tributárias de forma simplificada e automatizada para o usuário."
            imageSource="/icon-otimize-4.svg"
            title="Simplificado e automático"
          />
          <Card
            description="Tenha tabelas de organização que separam e ordenam as mensalidades por cliente."
            imageSource="/icon-otimize-5.svg"
            title="Organização por cliente"
          />
          <Card
            description="Exportação de arquivos para integração com a contabilidade na área fiscal e contábil."
            imageSource="/icon-otimize-6.svg"
            title="Integrado com a contabilidade"
          />
          <Card
            description="Treinamentos e implantação assistidos por profissionais qualificados para que haja o melhor uso das funcionalidades disponíveis."
            imageSource="/icon-otimize-7.svg"
            title="Suporte na implantação"
          />
          <Card
            description="Analista de conta responsável pelo seu projeto, que acompanha e sugere os recursos de acordo com a necessidade da empresa."
            imageSource="/icon-otimize-8.svg"
            title="Analista responsável"
          />
        </Container>
        <BackgroundContainer uri="/bg-sempre-mensalidade-box1.jpg">
          <div className="col-span-5 col-end-13">
            <h1 className="font-serif font-semibold text-white text-4xl mb-6">
              Soluções específicas para agilizar o seu dia a dia
            </h1>
            <p className="text-white mb-6">
              Empresas com recebimentos recorrentes merecem soluções que tornem
              o processo de emissão e envio de boletos um processo mais prático.
            </p>
            <p className="text-white mb-6">
              Ao automatizar processos recorrentes, seu empreendimento ganha
              tempo para pensar em estratégias de mercado que fazem toda a
              diferença.
            </p>
            <button type="button">Fale agora</button>
          </div>
        </BackgroundContainer>
        <Container newClasses="py-24">
          <h1 className="col-span-12 font-serif font-semibold mb-6 text-4xl text-dark-blue">
            Quem usa aprova
          </h1>
          <Testimony
            company="Proprietário da Finoplast"
            description="A Sempre Tecnologia conseguiu solucionar problemas que tínhamos a bastante tempo. Além da interação entre as empresas do grupo, personalizaram o sistema conforme desejávamos. Hoje temos um sistema completo com toda as áreas da empresa interligadas (dep. Comercial, produção, financeiro, etc)."
            name="Pedro Henrique"
          />
          <Testimony
            company="Gigante dos filtros"
            description="Estamos muito satisfeitos com a parceria da Sempre Tecnologia na nossa empresa. A gestão empresarial ficou muito mais simples e eficiente. Tivemos todo o suporte necessário dos funcionários, o treinamento foi totalmente presencial desde a alimentação do estoque até a emissão de notas e cupons fiscais."
            name="Dayane e Sérgio"
          />
          <Testimony
            company="Proprietária Comercial Xavier"
            description="A Sempre Tecnologia tem um sistema moderno e eficaz! Os técnicos estão sempre a nossa disposição. Estamos bem cuidados com a Sempre Tecnologia, só tenho a agradecer!"
            name="Flávia Xavier"
          />
        </Container>
        <BackgroundContainer uri="/bg-sempre-mensalidade-box2.jpg">
          <div className="col-span-5 col-end-13">
            <header className="flex items-center mb-6">
              <Image
                alt="App sempre mensalidade"
                height={52}
                quality={100}
                src="/icon-app-sempre.svg"
                width={54}
              />
              <span className="font-serif font-bold ml-4 text-white text-lg">
                APP Sempre Mensalidade
              </span>
            </header>
            <h1 className="font-serif font-semibold text-white text-4xl mb-6">
              O seu negócio, de onde você estiver, na palma da sua mão.
            </h1>
            <p className="text-white mb-6">
              Acesse o valor de vendas, saiba qual vendedor está vendendo mais,
              qual cliente está comprando mais e qual serviço é o mais
              realizado.
            </p>
            <footer className="flex">
              <Image
                alt="Google play"
                height={59}
                quality={100}
                src="/google-play.svg"
                width={203}
              />
              <Image
                alt="Apple story"
                className="ml-4"
                height={59}
                quality={100}
                src="/apple-store.svg"
                width={203}
              />
            </footer>
          </div>
        </BackgroundContainer>
        <Locations />
      </main>
      <Footer />
    </>
  );
}
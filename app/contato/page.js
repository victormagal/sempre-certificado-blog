'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import SocialIcon from '../base/SocialIcon';
import SolidIcon from '../base/SolidIcon';
import { Overline, Text, Title } from '../base/Typography';
import { ContactForm } from '../components/Elements';
import { Container, ModalForm } from '../components/Foundation';

export default function Contato() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-6">
          <Overline appearance="o1" color={red[700]}>
            FALE CONOSCO
          </Overline>
          <Title
            appearance="h2"
            className="text-center"
            color={neutralDark[500]}
            extra
          >
            Nós adoraríamos ouvir de você
          </Title>
          <Text appearance="p1" className="text-center" color={neutralMid[500]}>
            A nossa equipe está sempre à disposição para conversar com você!
          </Text>
        </div>
      </Container>
      <Container newClasses="border-b pb-16">
        <div className="col-span-4 lg:col-span-3 flex flex-col items-center space-y-2">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon
              icon="faLocationDot"
              iconColor={red[700]}
              newClasses="h-5"
            />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Email
          </Title>
          <Text appearance="p4" className="text-center" color={neutralMid[500]}>
            Estamos aqui para atender você e tirar suas dúvidas.
          </Text>
          <Link href="mailto:contato@sempretecnologia.com.br">
            <Title appearance="h7" color={red[1000]}>
              contato@sempretecnologia.com.br
            </Title>
          </Link>
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col items-center space-y-2">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon icon="faHeadset" iconColor={red[700]} newClasses="h-5" />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Central de atendimento
          </Title>
          <Text appearance="p4" className="text-center" color={neutralMid[500]}>
            De segunda a sexta (8h às 18h)
          </Text>
          <Link href="tel:08008416260">
            <Title appearance="h7" color={red[1000]}>
              0800 841 6260
            </Title>
          </Link>
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col items-center space-y-2">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SocialIcon
              icon="faWhatsapp"
              iconColor={red[700]}
              newClasses="h-5"
            />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            WhatsApp
          </Title>
          <Text appearance="p4" className="text-center" color={neutralMid[500]}>
            De segunda a sexta (8h às 18h)
          </Text>
          <Link href="https://api.whatsapp.com/send?phone=556130839390">
            <Title appearance="h7" color={red[1000]}>
              Mandar mensagem
            </Title>
          </Link>
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col items-center space-y-2">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon icon="faPhone" iconColor={red[700]} newClasses="h-5" />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Ligamos para você
          </Title>
          <Text appearance="p4" className="text-center" color={neutralMid[500]}>
            De segunda a sexta (8h às 18h)
          </Text>
          <button onClick={() => setOpenModal(true)} type="button">
            <Title appearance="h7" color={red[1000]}>
              Agendar ligação
            </Title>
          </button>
        </div>
      </Container>
      <Container newClasses="lg:pb-16 pt-16">
        <div className="col-span-4 lg:col-span-5 lg:col-start-2">
          <div className="flex flex-col mb-12 space-y-4">
            <Overline appearance="o1" color={red[700]}>
              Fale conosco
            </Overline>
            <Title appearance="h2" color={neutralDark[600]} extra>
              Entrar em contato
            </Title>
            <Text appearance="p3" color={neutralMid[500]}>
              Por favor, preencha o formulário e entraremos em contato.
            </Text>
          </div>
          <ContactForm
            companyForm={false}
            messageForm={true}
            placesForm={false}
          />
        </div>
        <div className="col-span-4 lg:col-span-5 flex items-stretch justify-center lg:justify-end">
          <div className="self-center">
            <Image
              alt="Portal Sempre Contador"
              height={773}
              width={536}
              src="/img-contato.png"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

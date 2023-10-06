/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  creamAssistant,
  neutralDark,
  neutralMid,
  neutralLight,
  red
} from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import {
  Container,
  HeroPage,
  ModalForm,
  Testimonies
} from '../components/Foundation';
import { getQuestions, getSegment } from '../graphql/queries';
import { CardFeature, Doubts, ModalVimeo } from '@/app/components/Elements';
import { useQuery } from '@apollo/client';

export default function Segment() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalVimeo, setOpenModalVimeo] = useState(false);
  const [data, setData] = useState({});
  const [faq, setFaq] = useState({});
  const path = usePathname().slice(1);

  useQuery(getSegment, {
    variables: { slug: path },
    onCompleted: (data) => {
      setData(data?.segmentos?.data[0]);
    }
  });

  useQuery(getQuestions, {
    onCompleted: (data) => {
      setFaq(data?.faq?.data);
    }
  });

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <ModalVimeo
        open={openModalVimeo}
        onClose={() => setOpenModalVimeo(false)}
        link="https://player.vimeo.com/video/377878667?h=0e8c653561&title=0&byline=0&portrait=0"
      />
      <HeroPage
        firstColor={data?.attributes?.theme?.first_color}
        fourthColor={data?.attributes?.theme?.fourth_color}
        gradient={true}
        secondColor={data?.attributes?.theme?.second_color}
        thirdColor={data?.attributes?.theme?.third_color}
      >
        <div className="col-span-4 lg:col-span-5 flex flex-col space-y-6">
          <Overline appearance="o1" color={neutralLight[100]}>
            {data?.attributes?.hero?.slug}
          </Overline>
          <Title appearance="h1" color={neutralLight[100]} extra>
            {data?.attributes?.hero?.title}
          </Title>
          <Text appearance="p1" color={neutralLight[200]}>
            {data?.attributes?.hero?.description}
          </Text>
          <Link href="/">
            <button
              className="w-full lg:w-auto py-4 lg:px-8 rounded"
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Contrate agora
              </Text>
            </button>
          </Link>
        </div>
        <div className="col-span-4 lg:col-end-13 lg:col-span-6 flex justify-center lg:justify-end md:pt-8">
          <Image
            height={data?.attributes?.hero?.image?.data?.attributes?.height}
            src={data?.attributes?.hero?.image?.data?.attributes?.url}
            width={data?.attributes?.hero?.image?.data?.attributes?.width}
          />
        </div>
      </HeroPage>
      <Container bgColor={creamAssistant[100]} newClasses="py-16">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-6">
          <Overline appearance="o1" className="text-center" color={red[700]}>
            {data?.attributes?.vantagem?.title}
          </Overline>
          <Title
            appearance="h2"
            className="text-center"
            color={neutralDark[500]}
            extra
          >
            {data?.attributes?.vantagem?.subtitle}
          </Title>
          <Text appearance="p3" className="text-center" color={neutralMid[500]}>
            {data?.attributes?.vantagem?.description}
          </Text>
        </div>
      </Container>
      <Container bgColor={creamAssistant[100]} newClasses="pb-16">
        {data?.attributes?.card.map(
          ({ description, icon, id, third, title }) => (
            <CardFeature
              key={id}
              third={third}
              bgColor={neutralLight[100]}
              description={description}
              icon={icon ? icon : 'faPenToSquare'}
              iconColor={red[600]}
              iconSize="h-10"
              title={title}
            />
          )
        )}
        <div className="col-span-4 lg:col-span-12 flex justify-center mt-8">
          <button
            className="px-8 py-4 rounded-md w-full lg:w-auto"
            onClick={() => setOpenModal(true)}
            style={{ background: red[1000] }}
            type="button"
          >
            <Link href="/">
              <Text appearance="p4" color={neutralLight[100]}>
                Quero ser um parceiro
              </Text>
            </Link>
          </button>
        </div>
      </Container>
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-4 lg:col-span-6 flex justify-center">
          <div
            className="cursor-pointer"
            onClick={() => setOpenModalVimeo(true)}
          >
            <Image
              src="/bg-play-certificado-digital.png"
              height={324}
              width={564}
            />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-6 flex flex-col justify-center space-y-6">
          {data?.attributes?.produto.map(
            ({
              description,
              image: {
                data: {
                  attributes: { height, url, width }
                }
              },
              title
            }) => (
              <>
                <div className="flex flex-col space-y-2">
                  <Image height={height} src={url} width={width} />
                  <Title appearance="h3" color={neutralDark[500]} extra>
                    {title}
                  </Title>
                  <Text appearance="p2" color={neutralMid[600]}>
                    {description}
                  </Text>
                </div>
              </>
            )
          )}
        </div>
      </Container>
      <Container
        firstColor={data?.attributes?.theme?.first_color}
        fourthColor={data?.attributes?.theme?.fourth_color}
        gradient={true}
        newClasses="rounded-xl"
        secondColor={data?.attributes?.theme?.second_color}
        thirdColor={data?.attributes?.theme?.third_color}
      >
        <div className="col-span-4 lg:col-span-6 lg:col-start-2 flex flex-col justify-center pb-6 lg:pb-0 pt-12 lg:pt-0 space-y-6">
          <Overline appearance="o1" color={neutralLight[200]}>
            {data?.attributes?.loja?.name}
          </Overline>
          <Title appearance="h2" color={neutralLight[200]} extra>
            {data?.attributes?.loja?.title}
          </Title>
          <Text appearance="p3" color={neutralLight[600]}>
            {data?.attributes?.loja?.description}
          </Text>
          <ul className="flex space-x-4">
            <li>
              <Link
                href={data?.attributes?.loja?.link_google || '/'}
                target="_blank"
              >
                <Image
                  alt="Google Play"
                  height={44}
                  src="/btn-google.png"
                  width={148}
                />
              </Link>
            </li>
            <li>
              <Link
                href={data?.attributes?.loja?.link_apple || '/'}
                target="_blank"
              >
                <Image
                  alt="Apple Store"
                  height={44}
                  src="/btn-apple.png"
                  width={132}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 lg:col-end-12 lg:col-span-3 flex justify-center lg:justify-end md:pt-8">
          <Image
            height={data?.attributes?.loja?.image?.data?.attributes?.height}
            src={data?.attributes?.loja?.image?.data?.attributes?.url}
            width={data?.attributes?.loja?.image?.data?.attributes?.width}
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
      <Doubts doubts={faq?.attributes?.itens} />
    </main>
  );
}

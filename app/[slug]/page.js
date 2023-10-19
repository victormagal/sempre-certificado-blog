/* eslint-disable no-undef */
'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.css';
import { neutralDark, neutralMid, neutralLight, red } from '../base/Colors';
import SolidIcon from '../base/SolidIcon';
import { Overline, Text, Title } from '../base/Typography';
import { Container, ModalForm } from '../components/Foundation';
import { getPost } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import MarkdownIt from 'markdown-it';

export default function Post() {
  const md = new MarkdownIt();
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState();
  const [data, setData] = useState({});
  const path = usePathname().slice(1);
  useQuery(getPost, {
    variables: { slug: path },
    onCompleted: (data) => {
      setContent(
        md.render(data?.certificadoPosts?.data[0]?.attributes?.content)
      );
      setData(data?.certificadoPosts?.data[0]?.attributes);
    }
  });

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Container newClasses="py-16">
        <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col items-center space-y-6">
          <Overline appearance="o1" className="text-center" color={red[700]}>
            Blog
          </Overline>
          <Title
            appearance="h2"
            className="text-center"
            color={neutralDark[500]}
            extra
          >
            {data?.title}
          </Title>
          <Text appearance="p1" className="text-center" color={neutralMid[500]}>
            {data?.description}
          </Text>
          <Text appearance="p4" className="text-center" color={neutralMid[500]}>
            {new Date(data?.publishedAt).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </Text>
        </div>
      </Container>
      <Container>
        <div className="col-span-4 lg:col-span-12 flex justify-center mb-12">
          <img
            alt={data?.title}
            src={`${data?.image?.data?.attributes?.url}`}
          />
        </div>
        <div
          className={`${styles.content} col-span-4 lg:col-span-8 lg:col-start-3`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
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

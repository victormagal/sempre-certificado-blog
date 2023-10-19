/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SideBar } from '../../components/Elements';
import { Container } from '../../components/Foundation';
import { getPostsByCategory } from '../../graphql/queries';
import { neutralDark, neutralMid, red } from '@/app/base/Colors';
import SolidIcon from '@/app/base/SolidIcon';
import { Overline, Text, Title } from '@/app/base/Typography';
import { useLazyQuery } from '@apollo/client';

export default function Category() {
  const path = usePathname().slice(10);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const listPages = [];

  const [getPosts, { data }] = useLazyQuery(getPostsByCategory);

  useEffect(() => {
    getPosts({
      variables: {
        category: path,
        page: currentPage,
        pageSize: pageSize
      }
    });
  }, []);

  const previousPosts = () => {
    const newValue = currentPage - 1;

    if (newValue <= 0) {
      setCurrentPage(1);
    } else {
      getPosts({
        variables: {
          category: path,
          page: newValue,
          pageSize: pageSize
        }
      });
      setCurrentPage(newValue);
    }
  };

  const nextPosts = () => {
    const newValue = currentPage + 1;

    if (newValue > data?.blogPosts?.meta?.pagination?.pageCount) {
      setCurrentPage(data?.blogPosts?.meta?.pagination?.pageCount);
    } else {
      getPosts({
        variables: {
          category: path,
          page: newValue,
          pageSize: pageSize
        }
      });
      setCurrentPage(newValue);
    }
  };

  const goToPage = (e) => {
    const value = Number(e.target.innerHTML);

    if (currentPage !== value) {
      getPosts({
        variables: {
          category: path,
          page: value,
          pageSize: pageSize
        }
      });
      setCurrentPage(value);
    }
  };

  for (let i = 1; i <= data?.blogPosts?.meta?.pagination?.pageCount; i++) {
    listPages.push(i);
  }

  return (
    <main className="pt-24">
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
            Quer dicas, conteúdos e tirar dúvidas?
          </Title>
          <Text appearance="p1" className="text-center" color={neutralMid[500]}>
            Aqui você encontrará artigos, dicas, conteúdos e tirar dúvidas sobre
            o mundo da tecnologia. Descubra tudo o que a Sempre Tecnologia pode
            oferecer para você e sua empresa!
          </Text>
        </div>
      </Container>
      <Container>
        <SideBar path={path} />
      </Container>
      <Container newClasses="border-b py-12">
        {data?.blogPosts?.data?.map((post, i) => (
          <Link
            className="col-span-4 flex flex-col space-y-6"
            key={i}
            href={`/noticias/${post.attributes.slug}`}
          >
            {post?.attributes?.image?.data?.attributes?.url && (
              <div className="h-60 overflow-hidden rounded-lg">
                <img
                  alt={post.attributes.title}
                  src={`${post?.attributes?.image?.data?.attributes?.url}`}
                />
              </div>
            )}
            <div className="flex flex-col space-y-2">
              <Overline appearance="o2" color={red[1000]}>
                {post?.attributes?.category?.data?.attributes?.name}
              </Overline>
              <Title appearance="h4" color={neutralDark[500]}>
                {post.attributes.title}
              </Title>
              <Text appearance="p3" color={neutralMid[500]}>
                {post?.attributes?.description}
              </Text>
            </div>
          </Link>
        ))}
      </Container>
      <Container newClasses="pt-8">
        {data?.blogPosts?.meta?.pagination?.pageCount > 1 && (
          <div className="col-span-4 lg:col-span-12">
            <ul className="flex items-center justify-center space-x-2">
              <li
                className="cursor-pointer flex items-center px-3 py-2"
                onClick={previousPosts}
              >
                <SolidIcon
                  icon="faArrowLeft"
                  iconColor={neutralMid[500]}
                  newClasses="w-4"
                />
              </li>
              {listPages.map((page) => (
                <li
                  className={`hidden lg:block cursor-pointer px-3 py-2 ${
                    currentPage === page && 'rounded'
                  }`}
                  key={page}
                  onClick={goToPage}
                  style={{
                    backgroundColor:
                      currentPage === page ? red[100] : 'transparent'
                  }}
                >
                  <Text
                    appearance="p4"
                    color={currentPage === page ? red[1000] : neutralMid[500]}
                  >
                    {page}
                  </Text>
                </li>
              ))}
              <li
                className="cursor-pointer flex items-center px-3 py-2"
                onClick={nextPosts}
              >
                <SolidIcon
                  icon="faArrowRight"
                  iconColor={neutralMid[500]}
                  newClasses="w-4"
                />
              </li>
            </ul>
          </div>
        )}
      </Container>
    </main>
  );
}

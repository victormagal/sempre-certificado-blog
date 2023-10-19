/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { neutralDark, neutralMid, red } from '@/app/base/Colors';
import { Overline, Text, Title } from '@/app/base/Typography';
import { getAllPosts } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function LastPosts() {
  const { data } = useQuery(getAllPosts, {
    variables: {
      page: 1,
      pageSize: 3
    }
  });

  return (
    <>
      {data?.blogPosts?.data.map((post, i) => (
        <Link
          className="col-span-4 flex flex-col space-y-6"
          key={i}
          href={`/noticias/${post.attributes.slug}`}
        >
          {post?.attributes?.image?.data?.attributes?.url && (
            <div className="overflow-hidden rounded-xl">
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
              {post?.attributes?.title}
            </Title>
            <Text appearance="p3" color={neutralMid[500]}>
              {post?.attributes?.description}
            </Text>
          </div>
        </Link>
      ))}
    </>
  );
}

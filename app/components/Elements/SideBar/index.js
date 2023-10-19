'use client';
import Link from 'next/link';
import { neutralLight, neutralMid, red } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';
import { getAllCategories } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function SideBar({ path }) {
  const { data } = useQuery(getAllCategories);

  return (
    <>
      <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col items-center space-y-6">
        <Title appearance="h6" color={neutralMid[400]}>
          Filtre por categoria
        </Title>
        <ul className="flex flex-wrap justify-center space-x-4">
          {data?.categories?.data?.map((category) => (
            <Link
              key={category.attributes.slug}
              href={`category/${category.attributes.slug}`}
            >
              <li
                className={`${
                  category.attributes.slug !== path && 'border'
                } mb-4 px-6 py-3 rounded`}
                style={{
                  backgroundColor:
                    category.attributes.slug === path && red[100],
                  borderColor:
                    category.attributes.slug !== path && neutralLight[300]
                }}
              >
                <Text
                  appearance="p4"
                  color={
                    category.attributes.slug === path
                      ? red[800]
                      : neutralMid[400]
                  }
                >
                  {category.attributes.name}
                </Text>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

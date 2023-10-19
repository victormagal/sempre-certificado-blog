import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function VarejosMobile() {
  return (
    <>
      <div className="col-span-4 flex flex-col justify-center space-y-8">
        <ul className="flex space-x-4">
          <li>
            <Image
              alt="Sempre Vest"
              height={20}
              quality={100}
              src="/logos/tab-sempre-vest.svg"
              width={123}
            />
          </li>
          <li>
            <Image
              alt="Sempre PDV Lite"
              height={20}
              quality={100}
              src="/logos/tab-sempre-pdv-lite.svg"
              width={129}
            />
          </li>
          <li>
            <Image
              alt="Sempre PDV Lite"
              height={20}
              quality={100}
              src="/logos/tab-sempre-pdv.svg"
              width={106}
            />
          </li>
        </ul>
        <Title appearance="h4" color={neutralDark[500]} extra>
          Pequenos Varejos
        </Title>
        <ul className="flex flex-col space-y-2">
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Vestuários e calçados
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Barbearias e salões de beleza
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Petshops
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Lanchonetes e quiosques
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Móveis e colchões
            </Text>
          </li>
        </ul>
      </div>
      <div className="col-span-4 flex justify-center">
        <Image
          alt="Sempre mensalidade"
          className="mt-16"
          height={410}
          width={486}
          quality={100}
          src="/home/pequenos-varejos-mobile.png"
        />
      </div>
    </>
  );
}

import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function DistribuidoresMobile() {
  return (
    <>
      <div className="col-span-4 flex flex-col justify-center space-y-8">
        <ul className="flex items-center space-x-4">
          <li>
            <Image
              alt="Sempre Distribuidor"
              height={20}
              quality={100}
              src="/logos/tab-sempre-distribuidor.svg"
              width={171}
            />
          </li>
          <li>
            <Image
              alt="Sempre Distribuidor Lite"
              height={20}
              quality={100}
              src="/logos/tab-sempre-distribuidor-lite.svg"
              width={187}
            />
          </li>
        </ul>
        <Title appearance="h4" color={neutralDark[500]} extra>
          Distribuidores
        </Title>
        <ul className="flex flex-col space-y-2">
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Pescados, bovinos e suínos
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Pães e salgados
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Hortifruti
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Comésticos
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Picolés e sorvetes
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
          src="/home/distribuidor-mobile.png"
        />
      </div>
    </>
  );
}

import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function Recorrentes() {
  return (
    <>
      <div className="col-span-5 col-start-2 flex flex-col justify-center space-y-8">
        <ul className="flex items-center space-x-4">
          <li>
            <Image
              alt="Sempre Mensalidade"
              height={20}
              quality={100}
              src="/logos/tab-sempre-mensalidade.svg"
              width={163}
            />
          </li>
          <li>
            <Image
              alt="Sempre Condomínio"
              height={20}
              quality={100}
              src="/logos/tab-sempre-condominio.svg"
              width={156}
            />
          </li>
          <li>
            <Image
              alt="Sempre BPO"
              height={20}
              quality={100}
              src="/logos/tab-sempre-bpo.svg"
              width={104}
            />
          </li>
        </ul>
        <Title appearance="h2" color={neutralDark[500]} extra>
          Recorrentes
        </Title>
        <ul className="flex flex-col space-y-2">
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Associações e sindicatos
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Clubes
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Cursos
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Condomínios
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Locações e serviços
            </Text>
          </li>
        </ul>
      </div>
      <div className="col-span-5 flex justify-end">
        <Image
          alt="Sempre mensalidade"
          className="mt-16"
          height={410}
          width={486}
          quality={100}
          src="/home/recorrente-desktop.png"
        />
      </div>
    </>
  );
}

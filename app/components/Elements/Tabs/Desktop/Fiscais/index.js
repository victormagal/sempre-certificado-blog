import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function Fiscais() {
  return (
    <>
      <div className="col-span-5 col-start-2 flex flex-col justify-center space-y-8">
        <ul className="flex items-center space-x-4">
          <li>
            <Image
              alt="Sempre Emissor"
              height={20}
              quality={100}
              src="/logos/tab-sempre-emissor.svg"
              width={140}
            />
          </li>
          <li>
            <Image
              alt="Sempre Emissor Contador"
              height={20}
              quality={100}
              src="/logos/tab-sempre-emissor-contador.svg"
              width={178}
            />
          </li>
          <li>
            <Image
              alt="Sempre Free"
              height={20}
              quality={100}
              src="/logos/tab-sempre-free.svg"
              width={116}
            />
          </li>
        </ul>
        <Title appearance="h2" color={neutralDark[500]} extra>
          Documentos Fiscais
        </Title>
        <ul className="flex flex-col space-y-2">
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              NF-e Nota Fiscal Produtos
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              NF-e Nota Fiscal Serviços
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              CT-e Conhecimento de transporte
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              MDF-e Manifesto destinatário
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              NFC-e Nota Fiscal Consumidor
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
          src="/home/emissor-desktop.png"
        />
      </div>
    </>
  );
}

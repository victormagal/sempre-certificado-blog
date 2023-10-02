import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function FiscaisMobile() {
  return (
    <>
      <div className="col-span-4 flex flex-col justify-center space-y-8">
        <ul className="flex space-x-4">
          <li>
            <Image
              alt="Sempre Gestor"
              height={16}
              quality={100}
              src="/logos/tab-sempre-gestor.png"
              width={104}
            />
          </li>
          <li>
            <Image
              alt="Sempre Lite"
              height={16}
              quality={100}
              src="/logos/tab-sempre-lite.png"
              width={93}
            />
          </li>
        </ul>
        <Title appearance="h4" color={neutralDark[500]} extra>
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
      <div className="col-span-4 flex justify-end">
        <Image
          alt="Sempre mensalidade"
          className="mt-16"
          height={410}
          width={486}
          quality={100}
          src="/distriibuidores-tab.png"
        />
      </div>
    </>
  );
}

'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import { Pagination } from 'swiper/modules';
import { Container } from '../../Foundation';
import {
  Distribuidores,
  Fiscais,
  Prestadores,
  Recorrentes,
  Varejos
} from './Desktop';
import {
  DistribuidoresMobile,
  FiscaisMobile,
  PrestadoresMobile,
  RecorrentesMobile,
  VarejosMobile
} from './Mobile';
import { neutralLight, neutralMid, red } from '@/app/base/Colors';
import { Title } from '@/app/base/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Tabs() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <>
      <div className="hidden lg:block">
        <Container>
          <ul className="col-span-12 flex flex-grow space-x-1">
            <li
              className="cursor-pointer flex flex-1 justify-center p-3"
              onClick={() => toggleTab(1)}
              style={{
                backgroundColor: toggle === 1 ? red[1100] : neutralLight[200]
              }}
            >
              <button type="button">
                <Title
                  appearance="h7"
                  color={toggle === 1 ? neutralLight[100] : neutralMid[400]}
                >
                  Distribuidores
                </Title>
              </button>
            </li>
            <li
              className="cursor-pointer flex flex-1 justify-center p-3"
              onClick={() => toggleTab(2)}
              style={{
                backgroundColor: toggle === 2 ? red[1100] : neutralLight[200]
              }}
            >
              <button type="button">
                <Title
                  appearance="h7"
                  color={toggle === 2 ? neutralLight[100] : neutralMid[400]}
                >
                  Pequenos varejos
                </Title>
              </button>
            </li>
            <li
              className="cursor-pointer flex flex-1 justify-center p-3"
              onClick={() => toggleTab(3)}
              style={{
                backgroundColor: toggle === 3 ? red[1100] : neutralLight[200]
              }}
            >
              <button type="button">
                <Title
                  appearance="h7"
                  color={toggle === 3 ? neutralLight[100] : neutralMid[400]}
                >
                  Prestadores de serviços
                </Title>
              </button>
            </li>
            <li
              className="cursor-pointer flex flex-1 justify-center p-3"
              onClick={() => toggleTab(4)}
              style={{
                backgroundColor: toggle === 4 ? red[1100] : neutralLight[200]
              }}
            >
              <button type="button">
                <Title
                  appearance="h7"
                  color={toggle === 4 ? neutralLight[100] : neutralMid[400]}
                >
                  Recorrentes
                </Title>
              </button>
            </li>
            <li
              className="cursor-pointer flex flex-1 justify-center p-3"
              onClick={() => toggleTab(5)}
              style={{
                backgroundColor: toggle === 5 ? red[1100] : neutralLight[200]
              }}
            >
              <button type="button">
                <Title
                  appearance="h7"
                  color={toggle === 5 ? neutralLight[100] : neutralMid[400]}
                >
                  Documentos fiscais
                </Title>
              </button>
            </li>
          </ul>
        </Container>
        <Container bgContainer={neutralLight[300]} newClasses="mb-16">
          {toggle === 1 && <Distribuidores />}
          {toggle === 2 && <Varejos />}
          {toggle === 3 && <Prestadores />}
          {toggle === 4 && <Recorrentes />}
          {toggle === 5 && <Fiscais />}
        </Container>
      </div>
      <div className="lg:hidden">
        <div className={`${styles.swiperContainer}`}>
          <Swiper
            modules={[Pagination]}
            pagination={true}
            style={{ paddingBottom: '3rem' }}
          >
            <SwiperSlide
              className="pt-8 px-8 rounded-3xl w-full"
              style={{ backgroundColor: neutralLight[300] }}
            >
              <DistribuidoresMobile />
            </SwiperSlide>
            <SwiperSlide
              className="pt-8 px-8 rounded-3xl w-full"
              style={{ backgroundColor: neutralLight[300] }}
            >
              <VarejosMobile />
            </SwiperSlide>
            <SwiperSlide
              className="pt-8 px-8 rounded-3xl w-full"
              style={{ backgroundColor: neutralLight[300] }}
            >
              <PrestadoresMobile />
            </SwiperSlide>
            <SwiperSlide
              className="pt-8 px-8 rounded-3xl w-full"
              style={{ backgroundColor: neutralLight[300] }}
            >
              <RecorrentesMobile />
            </SwiperSlide>
            <SwiperSlide
              className="pt-8 px-8 rounded-3xl w-full"
              style={{ backgroundColor: neutralLight[300] }}
            >
              <FiscaisMobile />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

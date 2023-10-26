'use client';
import Image from 'next/image';
import { useState } from 'react';
import Container from '../Container';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [messageMail, setMessageMail] = useState('');

  return (
    <Formik
      initialValues={{
        mail: '',
        name: ''
      }}
      onSubmit={async (values) => {
        setLoading(true);

        const response = await fetch('../../../api/newsletter', {
          method: 'POST',
          body: JSON.stringify({
            mail: values.mail,
            name: values.name
          })
        });

        setLoading(false);

        if (response.ok) {
          setMessageMail(
            'Email cadastrado em nossa newsletter com sucesso. Aguarde e você receberá nossas novidades.'
          );
        } else {
          setMessageMail(
            'Não foi possível efetuar o cadastro no momento. Tente novamente mais tarde.'
          );
        }
      }}
      validationSchema={Yup.object({
        mail: Yup.string().email('E-mail inválido').required('Obrigatório'),
        name: Yup.string().required('Obrigatório').min(3, 'Nome inválido')
      })}
    >
      {({ errors, values }) => (
        <Container bgColor={neutralLight[200]} newClasses="py-8">
          <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col items-center mb-4 space-y-6">
            <Title appearance="h2" color={neutralDark[500]} extra>
              Receba novidades e conteúdos!
            </Title>
            <Text
              appearance="p1"
              className="text-center"
              color={neutralMid[500]}
            >
              Assine e fique por dentro de tudo.
            </Text>
          </div>
          <Form className="col-span-4 lg:col-span-12 flex flex-col space-y-4">
            <ul className="flex flex-grow flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <li className="flex flex-1 flex-col space-y-2">
                <Text appearance="p4" color={neutralDark[500]}>
                  Nome completo
                </Text>
                <Field
                  className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                  name="name"
                  maxLength={150}
                  style={{
                    background: neutralLight[200],
                    borderColor: errors.name ? red[900] : neutralLight[400],
                    color: neutralMid[500]
                  }}
                  type="text"
                  value={values.name}
                />
                {errors.name && (
                  <Text appearance="p4" color={red[900]}>
                    {errors.name}
                  </Text>
                )}
              </li>
              <li className="flex flex-1 flex-col space-y-2">
                <Text appearance="p4" color={neutralDark[500]}>
                  E-mail
                </Text>
                <Field
                  className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                  name="mail"
                  maxLength={100}
                  style={{
                    background: neutralLight[200],
                    borderColor: errors.mail ? red[900] : neutralLight[400],
                    color: neutralMid[500]
                  }}
                  type="email"
                  value={values.mail}
                />
                {errors.mail && (
                  <Text appearance="p4" color={red[900]}>
                    {errors.mail}
                  </Text>
                )}
              </li>
              <li className="flex flex-1 flex-col space-y-2">
                <Text
                  appearance="p4"
                  className="hidden lg:block lg:invisible"
                  color={neutralDark[500]}
                >
                  Enviar
                </Text>
                <button
                  className="h-12 rounded w-full"
                  type="submit"
                  style={{ background: red[1000] }}
                >
                  <Text appearance="p4" color={neutralLight[100]}>
                    Enviar
                  </Text>
                </button>
                <Text
                  appearance="p4"
                  className="hidden lg:block lg:invisible"
                  color={red[900]}
                >
                  Errou
                </Text>
              </li>
            </ul>
            <ul className="flex flex-col space-y-2">
              {loading && (
                <li>
                  <Image
                    alt="Sempre Tecnologia"
                    height={50}
                    quality={100}
                    src="/loading.svg"
                    width={50}
                  />
                </li>
              )}
              {messageMail && (
                <li>
                  <Title appearance="h5" color={neutralDark[500]}>
                    {messageMail}
                  </Title>
                </li>
              )}
            </ul>
          </Form>
        </Container>
      )}
    </Formik>
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { maskPhoneNumber } from '@/app/utils/masks';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import SolidIcon from '@/app/base/SolidIcon';
import { Text, Title } from '@/app/base/Typography';
import { cidades, estados } from '@/app/base/Utils';
import { sendMail } from '@/app/graphql/mutations';
import { useMutation } from '@apollo/client';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function ContactForm({ companyForm, messageForm, placesForm }) {
  const [messageMail, setMessageMail] = useState('');

  const [sendMailContact, { loading }] = useMutation(sendMail, {
    onCompleted: () => setMessageMail('Mensagem enviada com sucesso!'),
    onError: () =>
      setMessageMail(
        'Sua mensagem não pode ser enviada, tente novamente mais tarde'
      )
  });

  return (
    <>
      <Formik
        initialValues={{
          city: '',
          company: '',
          has_company: companyForm,
          has_message: messageForm,
          has_places: placesForm,
          mail: '',
          message: '',
          name: '',
          phone: '',
          resume: null,
          state: ''
        }}
        onSubmit={(values) =>
          sendMailContact({
            variables: {
              mail: values.mail,
              message: values.message,
              name: values.name,
              phone: values.phone,
              resume: values.resume
            }
          })
        }
        validationSchema={Yup.object({
          city: Yup.string().when('has_places', {
            is: true,
            then: () => Yup.string().required('Obrigatório')
          }),
          company: Yup.string().when('has_company', {
            is: true,
            then: () =>
              Yup.string().required('Obrigatório').min(3, 'Nome inválido')
          }),
          mail: Yup.string().email('E-mail inválido').required('Obrigatório'),
          message: Yup.string().when('has_message', {
            is: true,
            then: () =>
              Yup.string().required('Obrigatório').min(10, 'Mensagem inválida')
          }),
          name: Yup.string().required('Obrigatório').min(3, 'Nome inválido'),
          phone: Yup.string()
            .required('Obrigatório')
            .min(14, 'Telefone inválido'),
          state: Yup.string().when('has_places', {
            is: true,
            then: () => Yup.string().required('Obrigatório')
          })
        })}
      >
        {({ errors, setFieldValue, values }) => (
          <Form className="flex flex-col space-y-6">
            <ul className="flex flex-col space-y-6">
              <li className="flex flex-col space-y-2">
                <Field
                  className="hidden"
                  name="has_company"
                  type="hidden"
                  value={values.has_company}
                />
                <Field
                  className="hidden"
                  name="has_message"
                  type="hidden"
                  value={values.has_message}
                />
                <Field
                  className="hidden"
                  name="has_places"
                  type="hidden"
                  value={values.has_places}
                />
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
              <li className="flex flex-col space-y-2">
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
              <li className="flex flex-col space-y-2">
                <Text appearance="p4" color={neutralDark[500]}>
                  Telefone (com DDD)
                </Text>
                <Field
                  className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                  name="phone"
                  maxLength={15}
                  style={{
                    background: neutralLight[200],
                    borderColor: errors.phone ? red[900] : neutralLight[400],
                    color: neutralMid[500]
                  }}
                  type="text"
                  value={maskPhoneNumber(values.phone)}
                />
                {errors.phone && (
                  <Text appearance="p4" color={red[900]}>
                    {errors.phone}
                  </Text>
                )}
              </li>
              {companyForm && (
                <li className="flex flex-col space-y-2">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Nome da empresa
                  </Text>
                  <Field
                    className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                    name="company"
                    maxLength={100}
                    style={{
                      background: neutralLight[200],
                      borderColor: errors.company
                        ? red[900]
                        : neutralLight[400],
                      color: neutralMid[500]
                    }}
                    type="text"
                    value={values.company}
                  />
                  {errors.company && (
                    <Text appearance="p4" color={red[900]}>
                      {errors.company}
                    </Text>
                  )}
                </li>
              )}
              {messageForm && (
                <li className="flex flex-col space-y-2">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Mensagem
                  </Text>
                  <Field
                    as="textarea"
                    className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                    name="message"
                    maxLength={400}
                    rows="4"
                    style={{
                      background: neutralLight[200],
                      borderColor: errors.message
                        ? red[900]
                        : neutralLight[400],
                      color: neutralMid[500]
                    }}
                    type="text"
                    value={values.message}
                  />
                  {errors.message && (
                    <Text appearance="p4" color={red[900]}>
                      {errors.message}
                    </Text>
                  )}
                </li>
              )}
            </ul>
            {placesForm && (
              <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
                <li className="flex flex-col flex-1 space-y-2">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Estado
                  </Text>
                  <div className="flex items-center">
                    <Field
                      as="select"
                      className="appearance-none border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                      name="state"
                      onChange={(e) => {
                        setFieldValue('state', e.target.value);

                        const selectedCities = [];
                        cidades.map((cidade) => {
                          if (cidade.estado === e.target.value) {
                            selectedCities.push(cidade);
                          }
                        });
                        setFieldValue('cities', selectedCities);
                      }}
                      style={{
                        background: neutralLight[200],
                        borderColor: errors.state
                          ? red[900]
                          : neutralLight[400],
                        color: neutralMid[500]
                      }}
                      value={values.state}
                    >
                      <option value="">Selecione</option>
                      {estados?.map((estado) => (
                        <option key={estado?.sigla} value={estado?.sigla}>
                          {estado?.nome}
                        </option>
                      ))}
                    </Field>
                    <SolidIcon
                      icon="faChevronDown"
                      iconColor={neutralMid[500]}
                      newClasses="h-4 -ml-10"
                    />
                  </div>
                  {errors.state && (
                    <Text appearance="p4" color={red[900]}>
                      {errors.state}
                    </Text>
                  )}
                </li>
                <li className="flex flex-col flex-1 space-y-2">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Cidade
                  </Text>
                  <div className="flex items-center">
                    <Field
                      as="select"
                      className="appearance-none border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                      name="city"
                      onChange={(e) => {
                        setFieldValue('city', e.target.value);
                      }}
                      style={{
                        background: neutralLight[200],
                        borderColor: errors.city ? red[900] : neutralLight[400],
                        color: neutralMid[500]
                      }}
                      value={values.city}
                    >
                      <option value="">Selecione</option>
                      {values?.cities?.map((city) => (
                        <option key={city?.name} value={city?.name}>
                          {city?.name}
                        </option>
                      ))}
                    </Field>
                    <SolidIcon
                      icon="faChevronDown"
                      iconColor={neutralMid[500]}
                      newClasses="h-4 -ml-10"
                    />
                  </div>
                  {errors.city && (
                    <Text appearance="p4" color={red[900]}>
                      {errors.city}
                    </Text>
                  )}
                </li>
              </ul>
            )}
            <ul className="flex flex-col space-y-6">
              <li>
                <Link href="/privacidade" target="_blank">
                  <Text appearance="p4" color={neutralMid[500]}>
                    Você concorda com nossa{' '}
                    <span className="font-bold underline">
                      política de privacidade
                    </span>
                  </Text>
                </Link>
              </li>
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
              <li>
                <button
                  className="py-4 rounded w-full"
                  type="submit"
                  style={{ background: red[1000] }}
                >
                  <Text appearance="p4" color={neutralLight[100]}>
                    Enviar
                  </Text>
                </button>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </>
  );
}

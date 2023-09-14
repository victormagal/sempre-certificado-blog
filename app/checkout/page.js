'use client';
import { useState } from 'react';
import { neutralDark, neutralLight, neutralMid } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import { Container } from '../components/Foundation';
import validationSchema from './FormModel/validationSchema';
import ContactData from './Forms/contactData';
import ServiceData from './Forms/serviceData';
import { Form, Formik } from 'formik';

export default function Checkout() {
  const steps = ['Dados de contato', 'Forma de atendimento'];

  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ContactData />;
      case 1:
        return <ServiceData />;
      default:
        return <div>Not found</div>;
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitForm = (actions, values) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (actions, values) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <main className="pt-24">
      <Container>
        <ul className="border col-span-10 col-start-2 flex justify-between my-6 py-8 px-12 rounded">
          <li>
            <Title appearance="h4" color={neutralDark[500]} extra>
              Certificado
              <br />
              selecionado
            </Title>
          </li>
          <li className="flex flex-col space-y-1">
            <div
              className="py-2 rounded text-center"
              style={{ background: '#E6F8F2' }}
            >
              <Overline appearance="o1" color="#076E4F">
                25% off
              </Overline>
            </div>
            <div>
              <Title appearance="h4" color={neutralDark[400]} extra>
                e-CPF A1
              </Title>
            </div>
          </li>
          <li className="flex flex-col space-y-1">
            <Text
              appearance="p3"
              color={neutralMid[600]}
              className="line-through"
            >
              De R$169 por
            </Text>
            <Title appearance="h2" color={neutralDark[500]} extra>
              R$ 126,75
            </Title>
            <Text appearance="p3" color={neutralMid[600]}>
              3x de R$42,25 no crédito
            </Text>
            <Text appearance="p4" color={neutralDark[500]}>
              Validade de 12 meses
            </Text>
          </li>
          <li className="flex items-center">
            <button
              className="border flex items-center justify-center py-4 px-8 rounded-md space-x-3"
              style={{
                background: neutralLight[100],
                borderColor: neutralLight[500]
              }}
            >
              <Title appearance="h7" color={neutralDark[500]}>
                Trocar certificado
              </Title>
            </button>
          </li>
        </ul>
      </Container>
      <Formik
        initialValues={{
          document: '',
          mail: '',
          name: '',
          phone: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={currentValidationSchema}
      >
        <Form>
          {renderStepContent(activeStep)}

          <div>
            {activeStep !== 0 && <button onClick={handleBack}>Back</button>}
            <div>
              <button type="submit" color="primary">
                {isLastStep ? 'Place order' : 'Next'}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </main>
  );
}

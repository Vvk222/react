import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const stepSchemas = [
  yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
  }),
  yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone is required'),
  }),
  yup.object({}),
];

const StepOne = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <>
      <div>
        <label>First Name</label>
        <input {...register('firstName')} />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <label>Last Name</label>
        <input {...register('lastName')} />
        <p>{errors.lastName?.message}</p>
      </div>
    </>
  );
};

const StepTwo = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Phone</label>
        <input {...register('phone')} />
        <p>{errors.phone?.message}</p>
      </div>
    </>
  );
};

const StepThree = ({ data }) => (
  <>
    <h3>Review</h3>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const methods = useForm({
    resolver: yupResolver(stepSchemas[step]),
    mode: 'onTouched',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  });

  const onSubmit = async (data) => {
    if (step < stepSchemas.length - 1) {
      const valid = await methods.trigger();
      if (valid) setStep(prev => prev + 1);
    } else {
      alert('Form submitted: ' + JSON.stringify(data, null, 2));
    }
  };

  const handleBack = () => setStep(prev => Math.max(prev - 1, 0));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 0 && <StepOne />}
        {step === 1 && <StepTwo />}
        {step === 2 && <StepThree data={methods.getValues()} />}
        
        <div style={{ marginTop: 20 }}>
          {step > 0 && <button type="button" onClick={handleBack}>Back</button>}
          <button type="submit">{step === stepSchemas.length - 1 ? 'Submit' : 'Next'}</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;

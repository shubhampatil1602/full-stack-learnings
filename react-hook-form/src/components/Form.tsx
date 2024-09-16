import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const Form = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      channel: '',
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900 p-6'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md'
      >
        <h2 className='text-2xl font-bold text-white mb-6 text-center'>
          React Hook Form
        </h2>

        <div className='mb-4'>
          <label
            htmlFor='username'
            className='block text-gray-300 font-semibold mb-2'
          >
            Username
          </label>
          <input
            type='text'
            id='username'
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required',
              },
            })}
            placeholder='Username'
            className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <p className='text-red-500 text-sm font-bold mt-2'>
            {errors.username?.message}
          </p>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-300 font-semibold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
              required: {
                value: true,
                message: 'Email is required',
              },
              validate: {
                notAdmin: (value) => {
                  return (
                    value !== 's@g.com' || 'ENter a different email address'
                  );
                },
                notBlackListed: (value) => {
                  return (
                    !value.endsWith('baddomain.com') ||
                    'This domain is not supported'
                  );
                },
              },
            })}
            placeholder='Email'
            className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <p className='text-red-500 text-sm font-bold mt-2'>
            {errors.email?.message}
          </p>
        </div>

        <div className='mb-6'>
          <label
            htmlFor='channel'
            className='block text-gray-300 font-semibold mb-2'
          >
            Channel
          </label>
          <input
            type='text'
            id='channel'
            {...register('channel', {
              required: {
                value: true,
                message: 'Channel is required',
              },
            })}
            placeholder='Channel'
            className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <p className='text-red-500 text-sm font-bold mt-2'>
            {errors.channel?.message}
          </p>
        </div>

        <button
          type='submit'
          className='w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Form;

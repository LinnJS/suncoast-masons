import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SubmitButton } from 'primitives';

const ContactForm = ({ ...rest }) => {
  const [serverResponse, setServerResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const response = await fetch(`/api/contact-form`, {
      method: `POST`,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    try {
      const json = await response.json();
      console.log('json: ', json);
      setServerResponse(json);
      setIsLoading(false);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <section className="mt-8" {...rest}>
      {/* Contact form */}
      <div className="lg:col-span-2">
        <h2 className="text-lg font-medium text-stone-900">Send us a message</h2>

        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          noValidate
        >
          {/* first name */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-stone-900">
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full px-4 py-3 rounded-md shadow-sm text-stone-900 focus:ring-blue-500 focus:border-blue-500 border-stone-300"
                {...register('firstName', {
                  required: true,
                })}
              />

              {errors.firstName && <p className="mt-2 text-xs italic text-red-500">Please enter first name.</p>}
            </div>
          </div>

          {/* last name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-stone-900">
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full px-4 py-3 rounded-md shadow-sm text-stone-900 focus:ring-blue-500 focus:border-blue-500 border-stone-300"
                {...register('lastName', {
                  required: true,
                })}
              />

              {errors.lastName && <p className="mt-2 text-xs italic text-red-500">Please enter last name.</p>}
            </div>
          </div>

          {/* email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-900">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                {...register('email', {
                  required: true,
                  pattern:
                    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i,
                })}
                className="block w-full px-4 py-3 rounded-md shadow-sm text-stone-900 focus:ring-blue-500 focus:border-blue-500 border-stone-300"
              />

              {errors.email && <p className="mt-2 text-xs italic text-red-500">Please enter a valid email address.</p>}
            </div>
          </div>

          {/* phone number */}
          <div>
            <div className="flex justify-between">
              <label htmlFor="phone" className="block text-sm font-medium text-stone-900">
                Phone
              </label>
              <span id="phone-optional" className="text-sm text-stone-500">
                Optional
              </span>
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full px-4 py-3 rounded-md shadow-sm text-stone-900 focus:ring-blue-500 focus:border-blue-500 border-stone-300"
                aria-describedby="phone-optional"
                {...register('phone', {
                  required: false,
                  pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
                })}
              />
            </div>

            {errors.phone && <p className="mt-2 text-xs italic text-red-500">Please enter a valid phone number.</p>}
          </div>

          {/* subject */}
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-medium text-stone-900">
              Subject
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                className="block w-full px-4 py-3 rounded-md shadow-sm text-stone-900 focus:ring-blue-500 focus:border-blue-500 border-stone-300"
                {...register('subject', {
                  required: true,
                })}
              />

              {errors.subject && <p className="mt-2 text-xs italic text-red-500">Please enter message subject.</p>}
            </div>
          </div>

          {/* message */}
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label htmlFor="message" className="block text-sm font-medium text-stone-900">
                Message
              </label>
              <span id="message-max" className="text-sm text-stone-500">
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full px-4 py-3 border rounded-md shadow-sm text-stone-900 focus:ring-blue-500 focus:border-blue-500 border-stone-300"
                aria-describedby="message-max"
                defaultValue={''}
                placeholder="Enter your message here..."
                {...register('message', {
                  required: true,
                  maxLength: 500,
                  minLength: 40,
                })}
              />

              {errors.message && (
                <p className="mt-2 text-xs italic text-red-500">
                  Please enter message with at least 40 characters and no more than 500 characters.
                </p>
              )}
            </div>
          </div>

          {/* submit */}
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <SubmitButton isLoading={isLoading} success={serverResponse?.success} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

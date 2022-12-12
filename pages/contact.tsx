import React from 'react';

type Props = {};

const contact = (props: Props) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-dark dark:text-dark">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-dark dark:text-muted sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-dark dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-muted text-dark text-sm rounded-lg focus:ring-main focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-dark dark:placeholder-gray-400 dark:text-dark dark:focus:ring-main dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-dark dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-dark bg-gray-50 rounded-lg border border-muted shadow-sm focus:ring-main focus:border-primary-500 dark:bg-gray-700 dark:border-dark dark:placeholder-gray-400 dark:text-dark dark:focus:ring-main dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-dark dark:text-muted">
              Your message
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-dark bg-gray-50 rounded-lg shadow-sm border border-muted focus:ring-main focus:border-primary-500 dark:bg-gray-700 dark:border-dark dark:placeholder-gray-400 dark:text-dark dark:focus:ring-main dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 bg-palette-main text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default contact;

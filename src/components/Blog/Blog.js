import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
      <section className="bg-gray-100 text-gray-800 sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mt-10">
            <details className="w-full border rounded-lg">
              <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-emerald-600 text-sky-600">
                Difference between SQL and NoSQL?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                When it comes to choosing a database the biggest decisions is
                picking a relational (SQL) or non-relational (NoSQL) data
                structure. While both the databases are viable options still
                there are certain key differences between the two that users
                must keep in mind when making a decision.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-emerald-600 text-sky-600">
                What is JWT, and how does it work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                JSON Web Token is an open industry standard used to share
                information between two entities, usually a client (like your
                app’s frontend) and a server (your app’s backend). JWT differ
                from other web tokens in that they contain a set of claims.
                Claims are used to transmit information between two parties.
                What these claims are depends on the use case at hand. For
                example, a claim may assert who issued the token, how long it is
                valid for, or what permissions the client has been granted.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600 cursor-pointer text-sky-600">
                What is the difference between javascript and NodeJS?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Javascript is a programming language that is used for writing
                scripts on the website. Javascript can only be run in the
                browsers. It is basically used on the client-side. Javascript is
                capable enough to add HTML and play with the DOM. Javascript can
                run in any browser engine as like JS core in safari and
                Spidermonkey in Firefox. NodeJS is a Javascript runtime
                environment. We can run Javascript outside the browser with the
                help of NodeJS. It is mostly used on the server-side. Nodejs
                does not have capability to add HTML tags. V8 is the Javascript
                engine inside of node.js that parses and runs Javascript. Nodejs
                is used in server-side development.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600 cursor-pointer text-sky-600">
                How does NodeJS handle multiple requests at the same time?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. If NodeJS can process the request
                without I/O blocking then the event loop would itself process
                the request and sends the response back to the client by itself.
                But, it is possible to process multiple requests parallelly
                using the NodeJS cluster module or worker_threads module.
              </p>
            </details>
          </div>
        </div>
      </section>
    );
};

export default Blog;
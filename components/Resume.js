/** @format */

import React, { useState } from "react";

export default function Resume() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        onClick={() => setToggle(!toggle)}
        className='flex items-center justify-center mt-4'
      >
        <a className='cursor-pointer uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'>
          Resume
        </a>
      </div>

      {toggle && (
        <div className='dark:text-gray-100'>
          <p>
            {" "}
            <div className='relative flex-grow pt-3'>
              <div className='relative  '>
                <p className='text-center '>
                  <strong>QUANT CLUB INC </strong>&middot; San Clemente, CA
                  &middot; 8/2020 to Present
                </p>
                <p className='text-center'>
                  <strong>Chief Technology Officer</strong>
                </p>
                <p className='text-center pt-2 pb-1'>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li className='list-disc'>
                    Key member of startup team and responsible for all technical
                    direction of company.
                  </li>
                  <li className='list-disc'>
                    Initiated and executed re-design and re-build of company
                    website, resulting in acquisition of first customers and
                    implemented an affiliate program for outside marketers.
                  </li>
                  <li className='list-disc'>
                    Started email marketing campaign and set up text message
                    marketing aimed at increasing customer conversions.
                  </li>
                </ul>
                <hr className='mt-6' />

                <p className='pt-6 text-center'>
                  <strong>ZULU MARKETING </strong>&middot; Lehi, UT &middot;
                  10/2018 to 8/2020
                </p>
                <p className='text-center'>
                  <strong>Director of Information Technology </strong>
                </p>
                <p className='text-center pt-2 pb-1'>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li className='list-disc'>
                    Supervise all IT and software projects and building
                    management systems for private company specializing in the
                    development and marketing of investment education products
                    and resources.
                  </li>
                  <li className='list-disc'>
                    Provide technical expertise and employee training on
                    InfusionSoft, Zapier, Twilio, Mobit, WordPress, Plesk,
                    Joomla, SendGrid, WooCommerce, Stripe, EventBrite, Jive,
                    Microsoft Office 365, Calendly, CloudFlare, GoDaddy,
                    R-Server, GitHub, AWS, JavaScript, NodeJS and ExpressJS.
                  </li>
                  <li className='list-disc'>
                    Coordinated companywide transition and training for new,
                    cloud-based VoIP phone system.
                  </li>
                  <li className='list-disc'>
                    Utilized various collaborative platforms to spearhead
                    organization&rsquo;s switch from multiple services to
                    Microsoft Office 365.
                  </li>
                  <li className='list-disc'>
                    Built custom Twilio text messaging system (leveraging APIs
                    from Twilio, Google, USPS, and InfusionSoft) and engineered
                    company&rsquo;s transition to it from Mobit, resulting in
                    far greater customization capability and significant cost
                    savings.
                  </li>
                </ul>
                <hr className='mt-6' />

                <p className='pt-6 text-center'>
                  <strong>ARISTOTLE </strong>&middot; Provo, UT &middot; 5/2017
                  to 10/2018; 4/2015 to 3/2017
                </p>
                <p className='text-center'>
                  <strong>Director, Client Sales &amp; Services </strong>
                  (5/2017 &ndash; 10/2018)
                </p>
                <p className='text-center pt-2 pb-1'>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li className='list-disc'>
                    Collaborated with International Business Development Team
                    and senior management to support sales, product development,
                    onboarding and customer training for full-service, global
                    organization providing a vast spectrum of products, services
                    and solutions for political campaigns and organizations.
                  </li>
                  <li className='list-disc'>
                    Provided technical security assessments at request of
                    prospective clients.
                  </li>
                  <li className='list-disc'>
                    Managed and trained company&rsquo;s Identity Verification
                    Team; expanded identity verification service from five days
                    per week to six while remaining within budget; served as
                    direct and primary point of contact for all identity
                    verification customers.
                  </li>
                </ul>
                <p className='text-center pt-3'>
                  <strong>Web Developer</strong> (4/2015 &ndash; 3/2017)
                </p>
                <p className='text-center pt-2 pb-1'>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li className='list-disc'>
                    Provided technical expertise and support in C#, JavaScript,
                    jQuery, HTML, CSS and .NET.
                  </li>
                  <li className='list-disc'>
                    Worked hand-in-hand with Chief Operating Officer on design
                    aspects of PredictIt.org, market page redesign and
                    supplementing site&rsquo;s active markets with interactive
                    charts.
                  </li>
                  <li className='list-disc'>
                    Exemplary performance in this role resulted in being rehired
                    and promoted by company to a management position two months
                    after departure.
                  </li>
                </ul>
                <hr className='mt-6' />
                <p className='pt-6 text-center'>
                  <strong>ZULU MARKETING </strong>&middot; Lehi, Utah &middot;
                  10/2014 to 4/2015
                </p>
                <p className='text-center'>
                  <strong>Software Developer </strong>
                </p>
                <p className='text-center pt-2 pb-1'>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li className='list-disc'>
                    Provided technical expertise and support in Python, Django,
                    WordPress and Joomla.
                  </li>
                  <li className='list-disc'>
                    Researched and proposed new technology solution for
                    development to management and then personally prototyped,
                    developed and built new product management system in
                    FileMaker.
                  </li>
                </ul>

                <hr className='mt-6' />
                {/* <p className='pt-6 text-center'>
                  <strong>Previous Experience</strong>
                </p>
                <p className='text-center'>
                  <strong>Strategic Services Consultant </strong>&middot;{" "}
                  <strong>DEALERSOCKET </strong>&bull; San Clemente, California
                </p>
                <ul>
                  <li className='list-disc'>
                    Provided onsite training and ongoing business and technical
                    support on customized CRM software programs for automotive
                    dealerships throughout the US, including largest auto
                    dealership in the world.
                  </li>
                  <li className='list-disc'>
                    Recognized for fastest certification on company CRM among
                    all employees.
                  </li>
                </ul>
                <hr className='mt-6' />
 */}
                <p className='text-center pt-6'>
                  <strong>Education &amp; Professional Training</strong>
                </p>
                <p className='text-center'>
                  <strong>Bachelor of Science in Business Marketing</strong>
                </p>
                <p className='text-center'>
                  BRIGHAM YOUNG UNIVERSITY - IDAHO | Rexburg, ID
                </p>
                <p className='text-center pt-3'>
                  <strong>Scrum Alliance</strong>
                </p>
                <p className='text-center'>
                  Certified ScrumMaster (CSM) | Issued June 2021
                </p>
                <p className='text-center pt-3'>
                  <strong>
                    RocketU 10-week Full Stack Developer Bootcamp{" "}
                  </strong>
                  (2014)
                </p>
                <p className='text-center'>ROCKETSPACE | San Francisco, CA</p>
              </div>{" "}
            </div>
          </p>
        </div>
      )}
    </>
  );
}

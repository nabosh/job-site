import React, { useState } from 'react';
// import styles from 'Newresume.css';

export default function Newresume() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* <button onClick={() => setToggle(!toggle)}>Toggle Dropdown Markup</button> */}
      <div
        onClick={() => setToggle(!toggle)}
        class="flex items-center justify-center mt-4"
      >
        <a class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
          I have records
        </a>
      </div>

      {toggle && (
        <div className="">
          <p>
            {' '}
            <div className="relative p-6 flex-auto">
              <div className="relative p-6 flex-auto">
                <p class="pt-6 text-center">
                  <strong>QUANT CLUB INC </strong>&middot; San Clemente, CA
                  &middot; 8/2020 to Present
                </p>
                <p class="text-center">
                  <strong>Chief Technology Officer</strong>
                </p>
                <p>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li class="list-disc">
                    Key member of startup team and responsible for all technical
                    direction of company.
                  </li>
                  <li class="list-disc">
                    Initiated and executed re-design and re-build of company
                    website, resulting in acquisition of first customers and
                    implemented an affiliate program for outside marketers.
                  </li>
                  <li class="list-disc">
                    Started email marketing campaign and set up text message
                    marketing aimed at increasing customer conversions.
                  </li>
                </ul>
                <p class="pt-6 text-center">
                  <strong>ZULU MARKETING </strong>&middot; Lehi, UT &middot;
                  10/2018 to 8/2020
                </p>
                <p>
                  <strong>Director of Technology </strong>
                </p>
                <p>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li class="list-disc">
                    Supervise all IT and software projects and building
                    management systems for private company specializing in the
                    development and marketing of investment education products
                    and resources.
                  </li>
                  <li class="list-disc">
                    Provide technical expertise and employee training on
                    InfusionSoft, Zapier, Twilio, Mobit, WordPress, Plesk,
                    Joomla, SendGrid, WooCommerce, Stripe, EventBrite, Jive,
                    Microsoft Office 365, Calendly, CloudFlare, GoDaddy,
                    R-Server, GitHub, AWS, JavaScript, NodeJS and ExpressJS.
                  </li>
                  <li class="list-disc">
                    Coordinated companywide transition and training for new,
                    cloud-based VoIP phone system.
                  </li>
                  <li class="list-disc">
                    Utilized various collaborative platforms to spearhead
                    organization&rsquo;s switch from multiple services to
                    Microsoft Office 365.
                  </li>
                  <li class="list-disc">
                    Built custom Twilio text messaging system (leveraging APIs
                    from Twilio, Google, USPS, and InfusionSoft) and engineered
                    company&rsquo;s transition to it from Mobit, resulting in
                    far greater customization capability and significant cost
                    savings.
                  </li>
                </ul>
                <p class="pt-6 text-center">
                  <strong>ARISTOTLE </strong>&middot; Provo, UT &middot; 5/2017
                  to 10/2018; 4/2015 to 3/2017
                </p>
                <p>
                  <strong>Director, Client Sales &amp; Services </strong>
                  (5/2017 &ndash; 10/2018)
                </p>
                <p>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li class="list-disc">
                    Collaborated with International Business Development Team
                    and senior management to support sales, product development,
                    onboarding and customer training for full-service, global
                    organization providing a vast spectrum of products, services
                    and solutions for political campaigns and organizations.
                  </li>
                  <li class="list-disc">
                    Provided technical security assessments at request of
                    prospective clients.
                  </li>
                  <li class="list-disc">
                    Managed and trained company&rsquo;s Identity Verification
                    Team; expanded identity verification service from five days
                    per week to six while remaining within budget; served as
                    direct and primary point of contact for all identity
                    verification customers.
                  </li>
                </ul>
                <p class="pt-3">
                  <strong>Web Developer</strong> (4/2015 &ndash; 3/2017)
                </p>
                <p>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li class="list-disc">
                    Provided technical expertise and support in C#, JavaScript,
                    jQuery, HTML, CSS and .NET.
                  </li>
                  <li class="list-disc">
                    Worked hand-in-hand with Chief Operating Officer on design
                    aspects of PredictIt.org, market page redesign and
                    supplementing site&rsquo;s active markets with interactive
                    charts.
                  </li>
                  <li class="list-disc">
                    Exemplary performance in this role resulted in being rehired
                    and promoted by company to a management position two months
                    after departure.
                  </li>
                </ul>
                <p class="pt-6 text-center">
                  <strong>ZULU MARKETING </strong>&middot; Lehi, Utah &middot;
                  10/2014 to 4/2015
                </p>
                <p>
                  <strong>Software Developer </strong>
                </p>
                <p>
                  <strong>Key Accomplishments &amp; Responsibilities:</strong>
                </p>
                <ul>
                  <li class="list-disc">
                    Provided technical expertise and support in Python, Django,
                    WordPress and Joomla.
                  </li>
                  <li class="list-disc">
                    Researched and proposed new technology solution for
                    development to management and then personally prototyped,
                    developed and built new product management system in
                    FileMaker.
                  </li>
                </ul>

                <hr class="mt-6" />
                <p class="pt-6 text-center">
                  <strong>Previous Experience</strong>
                </p>
                <p class="text-center">
                  <strong>Strategic Services Consultant </strong>&middot;{' '}
                  <strong>DEALERSOCKET </strong>&bull; San Clemente, California
                </p>
                <ul>
                  <li class="list-disc">
                    Provided onsite training and ongoing business and technical
                    support on customized CRM software programs for automotive
                    dealerships throughout the US, including largest auto
                    dealership in the world.
                  </li>
                  <li class="list-disc">
                    Recognized for fastest certification on company CRM among
                    all employees.
                  </li>
                </ul>
                <hr class="mt-6" />

                <p class="text-center pt-6">
                  <strong>Education &amp; Professional Training</strong>
                </p>
                <p class="text-center">
                  <strong>Bachelor of Science in Business Marketing</strong>
                </p>
                <p class="text-center">
                  BRIGHAM YOUNG UNIVERSITY - IDAHO | Rexburg, ID
                </p>
                <p class="text-center pt-3">
                  <strong>Scrum Alliance</strong>
                </p>
                <p class="text-center">
                  Certified ScrumMaster (CSM) | Issued June 2021
                </p>
                <p class="text-center pt-3">
                  <strong>
                    RocketU 10-week Full Stack Developer Bootcamp{' '}
                  </strong>
                  (2014)
                </p>
                <p class="text-center">ROCKETSPACE | San Francisco, CA</p>
              </div>{' '}
            </div>
          </p>
        </div>
      )}
    </>
  );
}

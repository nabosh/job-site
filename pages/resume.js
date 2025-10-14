/** @format */

import Head from 'next/head';
import { ThemeProvider } from "../components/ThemeContext";
import Background from "../components/Background";
import ThemeToggle from "../components/ThemeToggle";
import { resumeData } from '../data/resumeData';

export default function ResumePage() {
  const { personalInfo, experience, education, certifications } = resumeData;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "email": personalInfo.email,
    "url": personalInfo.linkedin,
    "jobTitle": experience[0].title,
    "worksFor": {
      "@type": "Organization",
      "name": experience[0].company
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": education[0].institution
    }
  };

  return (
    <ThemeProvider>
      <Head>
        <title>Resume - Neil Aboshamaa | Senior Software Engineer</title>
        <meta name="description" content="Professional resume of Neil Aboshamaa - Senior Software Engineer with experience in full-stack development, software architecture, and technical leadership." />
        <meta name="keywords" content="Neil Aboshamaa, Software Engineer, Full Stack Developer, CTO, Resume" />
        <link rel="canonical" href="https://aboshamaa.com/resume" />

        {/* Open Graph */}
        <meta property="og:title" content="Resume - Neil Aboshamaa" />
        <meta property="og:description" content="Senior Software Engineer with experience in full-stack development and technical leadership" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://aboshamaa.com/resume" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Background>
        <div className="min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="py-4 flex justify-between items-center">
              <a
                href="/"
                className="text-gray-800 dark:text-white hover:underline"
              >
                ← Back to Home
              </a>
              <ThemeToggle />
            </header>

            <main className="dark:text-gray-100 text-gray-900 font-mono">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                  <span>•</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-800 dark:border-gray-200 pb-2">
                  Professional Experience
                </h2>

                {experience.map((job, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="text-center mb-3">
                      <p className="font-bold">
                        {job.company} · {job.location} · {job.period}
                      </p>
                      {job.title && (
                        <p className="font-bold">{job.title}</p>
                      )}
                    </div>

                    {job.roles ? (
                      // Multiple roles at same company
                      job.roles.map((role, roleIdx) => (
                        <div key={roleIdx} className="mb-4">
                          <p className="text-center font-bold">{role.title}</p>
                          <p className="text-center text-sm mb-2">{role.period}</p>
                          <p className="font-bold mb-2">Key Accomplishments & Responsibilities:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            {role.accomplishments.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      // Single role
                      <>
                        <p className="font-bold mb-2">Key Accomplishments & Responsibilities:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          {job.accomplishments.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {idx < experience.length - 1 && (
                      <hr className="mt-6 border-gray-800 dark:border-gray-200" />
                    )}
                  </div>
                ))}
              </section>

              {/* Education & Training */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-800 dark:border-gray-200 pb-2">
                  Education & Professional Training
                </h2>

                {education.map((edu, idx) => (
                  <div key={idx} className="text-center mb-4">
                    <p className="font-bold">{edu.degree}</p>
                    <p>{edu.institution} | {edu.location}</p>
                  </div>
                ))}

                {certifications.map((cert, idx) => (
                  <div key={idx} className="text-center mb-4">
                    <p className="font-bold">{cert.issuer}</p>
                    <p>
                      {cert.name}
                      {cert.issued && ` | Issued ${cert.issued}`}
                      {cert.year && ` (${cert.year})`}
                    </p>
                    {cert.location && <p>{cert.location}</p>}
                  </div>
                ))}
              </section>

              {/* Call to Action */}
              <div className="flex items-center justify-center mt-8 gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer uppercase py-2 px-4 bg-transparent dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 hover:bg-gray-800 hover:text-white text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="cursor-pointer uppercase py-2 px-4 bg-transparent dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 hover:bg-gray-800 hover:text-white text-sm"
                >
                  Email
                </a>
              </div>
            </main>
          </div>
        </div>
      </Background>
    </ThemeProvider>
  );
}

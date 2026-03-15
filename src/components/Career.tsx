import "./styles/Career.css";

type TimelineEntry = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  bulletPoints?: string[];
  metaLabel?: string;
};

const timelineSections: { key: string; title: string; items: TimelineEntry[] }[] = [
  {
    key: "experience",
    title: "Experience",
    items: [
      {
        title: "App Developer Intern",
        subtitle: "Bharat Intern (Virtual Internship)",
        year: "May 2024",
        description:
          "Developed foundational skills in mobile application development through hands-on tasks and projects. Applied theoretical programming knowledge to real-world development scenarios and gained experience with the software development lifecycle while strengthening problem-solving and time management skills.",
      },
    ],
  },
  {
    key: "training",
    title: "Training",
    items: [
      {
        title: "C++ Programming: OOPs and Data Structures & Algorithms",
        subtitle: "CSE Pathshala",
        year: "May 2025 - Jun 2025",
        metaLabel: "Duration",
        description:
          "Focused on applying OOP and DSA concepts through practical C++ implementations.",
        bulletPoints: [
          "Designed and built multiple C++ modules using Object-Oriented Programming (OOP), including classes, inheritance-based models, polymorphism, and abstraction to structure real-world applications.",
          "Implemented core Data Structures & Algorithms such as arrays, linked lists, stacks, queues, recursion, searching, sorting, and greedy approaches to improve program efficiency and problem-solving accuracy.",
          "Developed a Student Record Management System using modular design, file handling, and algorithm optimization, resulting in a 30% faster record search and improved data retrieval workflow.",
        ],
      },
    ],
  },
  {
    key: "education",
    title: "Education",
    items: [
      {
        title: "B.Tech - Computer Science and Engineering",
        subtitle: "Lovely Professional University - Punjab",
        year: "Aug 2023 - Present",
        description: "CGPA: 6.87",
      },
      {
        title: "Intermediate - PCM",
        subtitle: "Trident Public School - Muzaffarpur, Bihar",
        year: "Mar 2022 - May 2023",
        description: "Percentage: 65%",
      },
      {
        title: "Matriculation",
        subtitle: "St. Joseph School - Sonbhadra, Uttar Pradesh",
        year: "Mar 2020 - May 2021",
        description: "Percentage: 80.8%",
      },
    ],
  },
  {
    key: "certifications",
    title: "Certifications",
    items: [
      {
        title: "AWS Academy Graduate - Cloud Architecting",
        subtitle: "AWS Academy Training Badge",
        year: "2025",
        description: "Completed 60 hours of cloud architecting coursework.",
      },
      {
        title: "Privacy and Security in Online Social Media",
        subtitle: "NPTEL",
        year: "2025",
        description: "Successfully completed certification.",
      },
      {
        title: "The Bits and Bytes of Computer Networking",
        subtitle: "Google",
        year: "2024",
        description: "Successfully completed certification.",
      },
      {
        title: "Responsive Web Design",
        subtitle: "freeCodeCamp",
        year: "2023",
        description: "Successfully completed certification.",
      },
    ],
  },
  {
    key: "achievements",
    title: "Achievements",
    items: [
      {
        title: "Bharatiya Antariksh Hackathon 2025 - ISRO",
        subtitle: "Certificate of Acknowledgement",
        year: "2025",
        description:
          "Acknowledged by ISRO for submitting an innovative problem-solving idea during the Bharatiya Antariksh Hackathon 2025.",
      },
    ],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Credentials
        </h2>
        <div className="career-info">
          {timelineSections.map((section) => (
            <section
              key={section.key}
              className={`timeline-section ${section.key}`}
            >
              <h3 className="career-group-title">{section.title}</h3>
              <div
                className={`timeline ${
                  section.key === "certifications"
                    ? "certifications-timeline"
                    : section.key === "education"
                      ? "education-timeline"
                      : section.key === "training"
                        ? "training-timeline"
                      : ""
                }`}
              >
                {section.key === "certifications" && (
                  <>
                    <span className="certifications-main-line" aria-hidden="true"></span>
                    <span className="certifications-final-dot career-dot" aria-hidden="true"></span>
                  </>
                )}
                {section.key === "education" && (
                  <>
                    <span className="education-main-line" aria-hidden="true"></span>
                    <span className="education-final-dot career-dot" aria-hidden="true"></span>
                  </>
                )}
                {section.key === "training" && (
                  <>
                    <span className="training-main-line" aria-hidden="true"></span>
                    <span className="training-final-dot career-dot" aria-hidden="true"></span>
                  </>
                )}
                {section.items.map((item) => (
                  <article
                    className={`timeline-item career-info-box ${
                      section.key === "certifications" ? "timeline-item-certification" : ""
                    }`}
                    key={`${section.key}-${item.title}`}
                  >
                    <div className="timeline-left career-info-in">
                      <div className="career-role">
                        <h4>{item.title}</h4>
                        <h5>{item.subtitle}</h5>
                      </div>
                    </div>

                    <div className="timeline-middle">
                      {section.key !== "certifications" &&
                        section.key !== "education" &&
                        section.key !== "training" && (
                        <div className="timeline-line career-timeline">
                          <span className="timeline-end-dot career-dot"></span>
                        </div>
                      )}
                    </div>

                    <div className="timeline-right">
                      <p>{item.description}</p>
                      {item.bulletPoints && item.bulletPoints.length > 0 && (
                        <ul className="timeline-bullets">
                          {item.bulletPoints.map((point, index) => (
                            <li key={`${item.title}-point-${index}`}>{point}</li>
                          ))}
                        </ul>
                      )}
                      <p className="timeline-meta">{item.metaLabel ?? "Year"}: {item.year}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

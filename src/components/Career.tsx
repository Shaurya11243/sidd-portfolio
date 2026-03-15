import "./styles/Career.css";

type TimelineEntry = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
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
    key: "education",
    title: "Education",
    items: [
      {
        title: "B.Tech - Computer Science and Engineering",
        subtitle: "Lovely Professional University",
        year: "2023 - Present",
        description: "CGPA: 6.87",
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
                  section.key === "certifications" ? "certifications-timeline" : ""
                }`}
              >
                {section.key === "certifications" && (
                  <>
                    <span className="certifications-main-line" aria-hidden="true"></span>
                    <span className="certifications-final-dot career-dot" aria-hidden="true"></span>
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
                      {section.key !== "certifications" && (
                        <div className="timeline-line career-timeline">
                          <span className="timeline-end-dot career-dot"></span>
                        </div>
                      )}
                    </div>

                    <div className="timeline-right">
                      <p>{item.description}</p>
                      <p className="timeline-meta">Year: {item.year}</p>
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

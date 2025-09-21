import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const languages = ['HTML', "CSS", 'JavaScript', 'Python', 'C', 'C++', 'Java', 'SQL', 'R']
  const frameworks = ['Next', 'Express', 'React', 'Flask', 'Numpy', 'Pandas', 'Plotly', 'Matplotlib', 'Scipy', 'Tailwind', 'Pytorch', 'TypeScript']
  const tools = ['Revit', 'Fusion', 'Calculus', 'Linear Algebra', 'Differential Equations', 'Git', 'Figma', 'Bash', 'LaTeX', 'Probability', 'Time Series Analysis']
  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <div className={styles.mainLeft}>
          <div className={styles.hiContainer}>
              <Image src={`/pfp.jpeg`} alt="Me" className={styles.hiImage} width={100} height={100}></Image>

              <h1 className={styles.hiHeader}>Hi! 👋</h1>            

          </div>
          <div className={styles.briefDescription}>
            <h1 className={styles.name}>I&apos;m <span>Aayush Mitra!</span></h1>
            <div className={styles.role}><p><Image src={'/Princeton_seal.svg'} alt={'Princeton!'} height={18} width={18}></Image> Freshman @ Princeton University</p> </div>
            <p className={styles.locationBox}>
              🌎 From Edinburg, Texas
            </p>
            <p className={styles.shortDescription}>
              My studies are concentrated on <span>Mathematics & Computer Science</span>. I have many years of experience
              in full-stack web development, and I have done some work in Data Science, Machine Learning,
              and PDE Modeling.
            </p>
            <div className={styles.socials}>
              <div className={styles.social}>
                <a className={styles.resumeLink} target='_blank' href="/Aayush_Resume.pdf">Resume</a>
              </div>
              <div className={styles.social}>
                <a target="_blank" href="https://www.linkedin.com/in/aayushmitra121">
                  <Image src={'/icons8-linkedin.svg'} alt="Linkedin" height={30} width={30}></Image>
                </a>
              </div>

              <div className={styles.social}>
                <a target="_blank" href="https://github.com/aayush-mitra">
                  <Image src={'/icons8-github.svg'} alt="Github" height={30} width={30}></Image>
                </a>

              </div>

              <div className={styles.social}>
                <a target="_blank" href="mailto:aayush.mitra121@gmail.com">
                  <Image src={'/icons8-email-50.png'} alt="Email" height={30} width={30}></Image>
                </a>

              </div>

              <div className={styles.social}>
                <a target="_blank" href="tel:19569002051">
                  <Image src={'/icons8-phone-50.png'} alt="Phone" height={30} width={30}></Image>
                </a>

              </div>
            </div>

            <div className={styles.skills}>

              <h1>Skills</h1>
              <div className={styles.skill}>
                <h2>Languages</h2>
                <div className={styles.carousel}>
                  <div className={styles.track}>
                    {/* first copy */}
                    {languages.map((skill, idx) => (
                      <div key={`first-${idx}`} className={styles.item1}>
                        {skill}
                      </div>
                    ))}
                    {/* second copy (so as first scrolls off, next starts) */}
                    {languages.map((skill, idx) => (
                      <div key={`second-${idx}`} className={styles.item1}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.skill}>
                <h2>Libraries/Frameworks</h2>
                <div className={styles.carousel}>
                  <div className={styles.track}>
                    {/* first copy */}
                    {frameworks.map((skill, idx) => (
                      <div key={`first-${idx}`} className={styles.item2}>
                        {skill}
                      </div>
                    ))}
                    {/* second copy (so as first scrolls off, next starts) */}
                    {frameworks.map((skill, idx) => (
                      <div key={`second-${idx}`} className={styles.item2}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.skill}>
                <h2>Tools/Other</h2>
                <div className={styles.carousel}>
                  <div className={styles.track}>
                    {/* first copy */}
                    {tools.map((skill, idx) => (
                      <div key={`first-${idx}`} className={styles.item3}>
                        {skill}
                      </div>
                    ))}
                    {/* second copy (so as first scrolls off, next starts) */}
                    {tools.map((skill, idx) => (
                      <div key={`second-${idx}`} className={styles.item3}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainRight}>

        </div>
      </div>
    </div>
  );
}

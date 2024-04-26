import styles from "./style";
import { About, Skills, Experiences, Contact, Navbar, Projects, Hero , Docs } from "./components";

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Experiences />
          <Skills />
          <Projects />
          <Docs />
          <Contact />
        </div>
      </div>
    </div>
);

export default App;

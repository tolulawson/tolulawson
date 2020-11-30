import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Project = (
  {
    logo,
    description,
    pic,
    github,
    web,
    logoClass,
  },
) => (
  <motion.div className='single-project'>
    <motion.div className='details'>
      <motion.img src={logo} className={`${logoClass} logo`} />
      <motion.span className='description'>{description}</motion.span>
      <motion.div className='link-row'>
        <motion.a href={github} className='link-button' target='_blank' rel='noopener noreferrer'>
          <motion.img src='/github.svg' />
        </motion.a>
        <motion.a href={web} className='link-button' target='_blank' rel='noopener noreferrer'>
          <motion.img src='/web.svg' />
        </motion.a>
      </motion.div>
    </motion.div>
    <motion.img src={pic} className='picture' whileHover={{ scale: 1.1, rotate: -3 }} transition={{ duration: 0.5 }} />
  </motion.div>
);

const Tech = () => (
  <motion.section className='tech-section'>
    <motion.h3>Technologies I use</motion.h3>
    <motion.div className='tech-logos'>
      <motion.img src='/react.svg' alt='React logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
      <motion.img src='/nextjs.svg' alt='NextJS logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
      <motion.img src='/redux.svg' alt='Redux logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
      <motion.img src='/firebase.svg' alt='Firebase logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
    </motion.div>
  </motion.section>
);

const Contact = () => (
  <motion.section className='contact-section'>
    <motion.span>
      I’m currently open to opportunities
      with ambitious people and companies
    </motion.span>
    <motion.h3>
      Let’s work together
    </motion.h3>
    <motion.div className='contact-buttons'>
      <motion.a href='https://www.linkedin.com/in/tolulawson/' target='_blank' rel='noopener noreferrer' className='contact-button'>
        <img src='/linkedin.svg' alt='linkedIn logo' />
      </motion.a>
      <motion.a className='contact-button' href='mailto:mailme@tolulawson.com'>
        <img src='/email.svg' alt='Email icon' />
      </motion.a>
    </motion.div>
  </motion.section>
);

export default function Home() {
  return (
    <motion.div className='home-page'>
      <Head>
        <title>Software Engineer - Tolu Lawson</title>
      </Head>
      <motion.div className='hero'>
        <motion.h3>
          I design and build beautiful and reliable software
        </motion.h3>
        <motion.h5>Software Engineer based in Lagos, Nigeria</motion.h5>
      </motion.div>
      <motion.section className='projects-row'>
        <Project
          logo='/readastic_logo.svg'
          description='A suite of text-to-speech utilities'
          pic='/readastic_screen.png'
          github='https://github.com/tolulawson/bookerly'
          web='https://www.readastic.com/'
          logoClass='readastic'
        />
        <Project
          logo='/quizApp_logo.svg'
          description='An app for creating and running quizzes'
          pic='/readastic_screen.png'
          github='https://github.com/tolulawson/bookerly'
          web='https://www.readastic.com/'
          logoClass='quiz-app'
        />
      </motion.section>
      <Link href='/projects'>
        <a className='btn'>More projects</a>
      </Link>
      <motion.section className='about-section'>
        <motion.div className='details'>
          <motion.h3>About me</motion.h3>
          <motion.p>
            I'm a Frontend Software Engineer with more than 3 years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.
          </motion.p>
          <Link href='/about'>
            <a className='btn'>Find out more</a>
          </Link>
        </motion.div>
        <motion.div className='pic' />
      </motion.section>
      <Tech />
      <Contact />
    </motion.div>
  );
}

export { Tech, Contact };

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

export default function Home() {
  return (
    <div className='home-page'>
      <Head>
        <title>Software Engineer - Tolu Lawson</title>
      </Head>
      <motion.div className='hero'>
        <motion.h3>I design and build beautiful and reliable software</motion.h3>
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
          <motion.p>I'm a Frontend Software Engineer with more than 3 years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.</motion.p>
          <Link href='/about'>
            <a className='btn'>Find out more</a>
          </Link>
        </motion.div>
        <motion.div className='pic'>
        </motion.div>
      </motion.section>
      <motion.section className='tech-section'>
        <motion.h3>Technologies I use</motion.h3>
      </motion.section>
    </div>
  );
}

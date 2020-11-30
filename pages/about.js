import Head from 'next/head';
import { motion } from 'framer-motion';
import { Tech, Contact } from './index';

export default function About() {
  return (
    <motion.div className='about-page'>
      <Head>
        <title>About - Tolu Lawson</title>
      </Head>
      <motion.section className='hero'>
        <motion.img src='/tolulawson_about.jpg' />
        <motion.h3>About</motion.h3>
      </motion.section>
      <motion.section className='about-text'>
        <motion.h5>I’m Tolu Lawson, a software engineer based in Lagos, Nigeria</motion.h5>
        <motion.div className='bio-text'>
          <motion.span>
            <p>
              I’ve developed software for over 3 years,   defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.
            </p>
            <p>
              Over the past 5 years, I've built web apps and interactive experiences that enable a wide range of companies to achieve their objectives and deliver great experiences to their end customers.
            </p>
          </motion.span>
          <motion.span>
            <p>
              My core strengths lie in designing and implementing data-driven web applications, design systems, and interactive digital experiences using React, JavaScript, and CSS.
            </p>
            <p>
              With years of experience as a graphic designer prior to software development, I possess a keen eye for great design and love building software that's as beautiful as it is reliable.
            </p>
          </motion.span>
        </motion.div>
        <a href='https://drive.google.com/file/d/1yKxMf4ooRKBXNKeerL52vsX0ScHp55Uh/view' className='btn resume-btn' target='_blank' rel='noopener noreferrer'>
          <img src='/link.svg' alt='link icon' />
          Résumé
        </a>
      </motion.section>
      <Tech />
      <Contact />
    </motion.div>
  );
}

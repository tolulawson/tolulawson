/* eslint-disable max-len */
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Tech, Contact } from './index';

export default function About() {
  return (
    <motion.div className='about-page page'>
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
      <motion.section className='clients-section'>
        <motion.h3>Clients I’ve worked with</motion.h3>
        <motion.span>
          A small selection of clients I’ve collaborated with to date
        </motion.span>
        <motion.div className='clients-logos call-out'>
          <motion.img className='first-row' src='/merck.svg' alt='Merck logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.img className='first-row' src='/sanofi.svg' alt='Sanofi logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.img className='first-row' src='/novartis.svg' alt='Novartis logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.img className='second-row' src='/janssen.svg' alt='Janssen logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.img className='second-row' src='/servier.svg' alt='Servier logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.img className='second-row' src='/roche.svg' alt='Roche logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.img className='third-row' src='/danone.svg' alt='Danone logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.img className='third-row' src='/biomereux.svg' alt='Biomereux logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
        </motion.div>
      </motion.section>
      <Tech />
      <Contact />
    </motion.div>
  );
}

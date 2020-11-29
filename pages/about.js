import Head from 'next/head';
import { motion } from 'framer-motion';
import { Tech, Contact } from './index';

export default function About() {
  return (
    <motion.div className='about-page'>
      <Head>
        <title>About - Tolu Lawson</title>
      </Head>
      <motion.div className='hero'>
        <motion.img src='/tolulawson_about.jpg' />
        <motion.h3>About</motion.h3>
      </motion.div>
      <Tech />
      <Contact />
    </motion.div>
  );
}

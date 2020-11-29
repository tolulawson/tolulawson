import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tech, Contact } from './index';

export default function About() {
  return (
    <motion.div className='about-page'>
      <Head>
        <title>About - Tolu Lawson</title>
      </Head>
      <Tech />
      <Contact />
    </motion.div>
  );
}

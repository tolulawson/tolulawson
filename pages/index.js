/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import Head from 'next/head';
import Link from 'next/link';
import PersonalPortfolio from '../components/home/PersonalPortfolio';
// import { motion } from 'framer-motion';

// const Project = (
//   {
//     logo,
//     description,
//     pic,
//     github,
//     web,
//     logoClass,
//   },
// ) => (
//   <motion.div className='single-project'>
//     <motion.div className='details'>
//       <motion.img src={logo} className={`${logoClass} logo`} />
//       <motion.span className='description'>{description}</motion.span>
//       <motion.div className='link-row'>
//         <motion.a href={github} className='link-button' target='_blank' rel='noopener noreferrer'>
//           <motion.img src='/github.svg' />
//         </motion.a>
//         <motion.a href={web} className='link-button' target='_blank' rel='noopener noreferrer'>
//           <motion.img src='/web.svg' />
//         </motion.a>
//       </motion.div>
//     </motion.div>
//     <motion.img src={pic} className='picture' whileHover={{ scale: 1.1, rotate: -3 }} transition={{ duration: 0.5 }} />
//   </motion.div>
// );

// const Tech = () => (
//   <motion.section className='tech-section'>
//     <motion.h3>Technologies I use</motion.h3>
//     <motion.div className='tech-logos'>
//       <motion.img src='/react.svg' alt='React logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
//       <motion.img src='/nextjs.svg' alt='NextJS logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
//       <motion.img src='/redux.svg' alt='Redux logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
//       <motion.img src='/firebase.svg' alt='Firebase logo' whileHover={{ opacity: 1 }} whileTap={{ opacity: 1 }} transition={{ duration: 0.3 }} />
//     </motion.div>
//   </motion.section>
// );

// const Contact = () => (
//   <motion.section className='contact-section call-out'>
//     <motion.span>
//       I’m currently open to opportunities
//       with ambitious people and companies
//     </motion.span>
//     <motion.h3>
//       Let’s work together
//     </motion.h3>
//     <motion.div className='contact-buttons'>
//       <motion.a href='https://www.linkedin.com/in/tolulawson/' target='_blank' rel='noopener noreferrer' className='contact-button'>
//         <img src='/linkedin.svg' alt='linkedIn logo' />
//       </motion.a>
//       <motion.a className='contact-button' href='mailto:mailme@tolulawson.com'>
//         <img src='/email.svg' alt='Email icon' />
//       </motion.a>
//     </motion.div>
//   </motion.section>
// );

export default function Home() {
  return (
    <>
      <Head>
        <title>Software Engineer - Tolu Lawson</title>
        <link rel='prefetch' href='tolulawson_about.jpg' />
      </Head>
      <PersonalPortfolio />
    </>
  );
}

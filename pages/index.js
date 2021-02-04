/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import Head from 'next/head';
import Link from 'next/link';
import PersonalPortfolio from '../components/home/PersonalPortfolio';
import CreativeLanding from '../components/home/CreativeLanding';

export default function Home() {
  return (
    <>
      <Head>
        <title>Software Engineer - Tolu Lawson</title>
        <link rel='prefetch' href='tolulawson_about.jpg' />
      </Head>
      <CreativeLanding />
    </>
  );
}

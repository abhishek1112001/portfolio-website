import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek Gothankar — Jr. Software Developer</title>
        <meta name="description" content="Portfolio of Abhishek Gothankar — Jr. Software Developer specializing in React.js, Node.js, Flutter, and AWS cloud architecture." />
        <meta name="keywords" content="Abhishek Gothankar, Software Developer, React, Node.js, Flutter, AWS, Portfolio" />
        <meta name="author" content="Abhishek Gothankar" />
        <meta property="og:title" content="Abhishek Gothankar — Jr. Software Developer" />
        <meta property="og:description" content="Building scalable SaaS apps, cross-platform mobile apps, and serverless cloud architectures." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

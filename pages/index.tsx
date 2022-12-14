import type { GetStaticProps, NextPage } from 'next'
import { createClient } from 'next-sanity';
import Head from 'next/head'
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { fetchPageInfo} from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';

import { PageInfo, Skill, Project, Social } from './api/typings';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, skills, projects, socials}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#0FFF50]/80'>
      <Head>
        <title>SAMNAN</title>
      </Head>
      
      <Header socials={socials} />
      
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      
      {/* Experience */}

      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id="contact" className='snap-start'>
        <Contact />
      </section>

    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();

  return{
    props: {
      pageInfo,
      projects,
      socials,
      skills,
    },

    revalidate: 100,
  }
}
createClient({projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID})
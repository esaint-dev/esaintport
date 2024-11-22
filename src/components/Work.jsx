/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Full stack music app',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Free stock photo app',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/project-30.jpg',
      title: 'Travel App UI',
      tags: ['Development', 'API'],
      projectLink: 'https://putuk-camp-ly2p0n2pj-esaint-devs-projects.vercel.app/'
    },
    {
      imgSrc: '/images/project-10.jpg',
      title: 'Crypto Learning website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://ifreks.com/'
    },
    {
      imgSrc: '/images/project-60.jpg',
      title: 'Neuro AI Website',
      tags: ['AI', 'Website'],
      projectLink: 'https://neuro-nextjs.vercel.app/'
    },
  ];




const Work = () => {
  return (
    <section 
        id="work"
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up ">

            My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                     />
                ))}
            </div>

        </div>

    </section>
  )
}

export default Work

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import { AppWrap } from '../../wrapper';

import { urlFor, client } from '../../client';

import images from '../../constants/images';

import './About.scss';

// const abouts = [
//   { title: 'Frontend', description: 'Abilities to build a awesome and modern apps with frontend knowledges', imgUrl: images.about01 },
//   { title: 'Backend', description: 'Abilities to build a awesome and modern apps with backend knowledges', imgUrl: images.about02 },
//   { title: 'Good coding practices', description: 'Abilities to build a awesome and modern apps with frontend knowledges', imgUrl: images.about03 },
//   { title: 'MERN Stack', description: 'Abilities to build a awesome and modern with the high technologies of the moment: MongoDB, ExpressJs, React, NodeJs ', imgUrl: images.about04 },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I kwow that <span>Good apps</span><br />Means <span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')
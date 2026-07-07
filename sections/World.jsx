'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

// Modal Component
const Modal = ({ isOpen, onClose, title, text, videoUrl }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-[#5d6680] rounded-lg p-6 w-[90%] md:w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white font-bold text-2xl"
        >
          &times;
        </button>
        <h2 className="text-white font-bold text-2xl mb-4">{title}</h2>
        <p className="text-secondary-white mb-4">{text}</p>
        <div className="relative w-full h-[300px]">
          <iframe
            src={videoUrl}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const World = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Data for each character
  const characterData = {
    nasa: {
      title: 'Crowd-Sourcing with NASA',
      text: 'Focusing on how NASA harnesses the power of the crowd, the session explores how we can use open innovation and talent to effectively keep up with changes in technologies, skills, and markets.',
      videoUrl: "https://dtpli.sharepoint.com/sites/LXRP-Extranet/_layouts/15/embed.aspx?UniqueId=901c3312-05b8-46a3-a7a7-f26298bbe38d&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
    },
    bostonDynamics: {
      title: 'Robotics revolution with Boston Dynamics',
      text: 'Boston Dynamics have developed some of the world’s most advanced and capable robots. Its range of robots support a range of use cases across construction and infrastructure projects, increasing worksite safety and efficiency.',
      videoUrl: 'https://dtpli.sharepoint.com/sites/LXRP-Extranet/_layouts/15/embed.aspx?UniqueId=45f68ca3-a838-4089-b55a-15e4e1c93a02&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
    },
    cocaCola: {
      title: 'Sustainable innovation w Coca-Cola',
      text: 'Understand Coca-Cola’s collaboration in driving sustainable initiatives.',
      videoUrl: 'https://dtpli.sharepoint.com/sites/LXRP-Extranet/_layouts/15/embed.aspx?UniqueId=b7d2bcd3-2e30-4371-abcf-9223b098b041&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
    },
    estonia: {
      title: 'Digital societies with e-Estonia',
      text: 'How innovative can a government department really be? E-Estonia shows they can lead all industries globally. Estonia has transformed its productivity with a full suite of digital, low-cost systems that make it easy to communicate with the state.',
      videoUrl: 'https://dtpli.sharepoint.com/sites/LXRP-Extranet/_layouts/15/embed.aspx?UniqueId=fd4f0984-1eab-47d2-ac38-68b61247b2d2&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
    },
    kinetic: {
      title: 'Kinetic',
      text: 'See how Kinetic is reshaping the future of infrastructure.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    bosch: {
      title: "Bosch's Innovation Journey",
      text: "We hear from one of Bosch's key players - Mario Roessler, Director of Technology and Innovation Strategy.",
      videoUrl: 'https://dtpli.sharepoint.com/:b:/r/sites/LXRP-Extranet/Extranet/Research%20%26%20Development/Innovation%20Bytes/Innovation%20at%20Bosch%20Presentation.pdf?csf=1&web=1&e=jdNuXj',
    },
    trimble: {
      title: 'Global Technology with Trimble',
      text: 'Shelly Nooner, Senior Vice President, Innovations & Platform at a global construction technology company Trimble, takes us through the process and common hurdles faced when adopting digital technologies in a complex major infrastructure project.',
      videoUrl: 'https://dtpli.sharepoint.com/sites/LXRP-Extranet/_layouts/15/embed.aspx?UniqueId=df666246-f469-424c-8fc9-395e95a571e1&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
    },
    google: {
      title: 'VIDA x Google',
      text: 'Technology Vendors',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    microsoft: {
      title: 'VIDA x Microsoft',
      text: 'Technology Vendors',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    optus: {
      title: 'VIDA x Optus',
      text: 'Technology Vendors',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    sentientHubs: {
      title: 'VIDA x Sentient Hubs',
      text: 'Technology Vendors',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
  };

  return (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| HIVE Collabs" textStyles="text-center" />
      <TitleText
        title={(
          <>
            HIVE - Supported by Global Leaders!
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[69px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        {/* Here We are displaying chararcters on the map */}
        
        {/* NASA */}
        <div
          className="absolute top-[25%] left-[14%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.nasa)}
        >
          <img src="/nasa.png" alt="nasa" className="w-full h-full" />
        </div>

        {/* Google */}
        <div
          className="absolute top-[25%] left-[4%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.google)}
        >
          <img src="/google-icon.PNG" alt="google" className="w-full h-full" />
        </div>

        {/* Microsoft */}
        <div
          className="absolute top-[10%] left-[7%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.microsoft)}
        >
          <img src="/microsoft-logo.png" alt="microsoft" className="w-full h-full" />
        </div>

        {/* Boston Dynamics */}
        <div
          className="absolute top-[15%] left-[21%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.bostonDynamics)}
        >
          <img src="/boston-dynamic.png" alt="boston dynamics" className="w-full h-full" />
        </div>

        {/* Coca Cola */}
        <div
          className="absolute top-[73%] left-[92%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.cocaCola)}
        >
          <img src="/cocacola.png" alt="coca cola" className="w-full h-full" />
        </div>

        {/* E-Estonia */}
        <div
          className="absolute top-[8%] left-[43%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.estonia)}
        >
          <img src="/e-estonia-logo.png" alt="e-estonia" className="w-full h-full" />
        </div>

        {/* Kinetic */}
        <div
          className="absolute top-[82%] left-[88%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.kinetic)}
        >
          <img src="/kinetic-logo.png" alt="kinetic" className="w-full h-full" />
        </div>

        {/* Bosch */}
        <div
          className="absolute top-[12%] left-[39%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.bosch)}
        >
          <img src="/bosch-logo.png" alt="bosch" className="w-full h-full" />
        </div>

        {/* Trimble */}
        <div
          className="absolute top-[65%] left-[88%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.trimble)}
        >
          <img src="/trimble-circle.png" alt="trimble" className="w-full h-full" />
        </div>

        {/* Optus */}
        <div
          className="absolute top-[46%] left-[71%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.optus)}
        >
          <img src="/optus-logo.png" alt="optus" className="w-full h-full" />
        </div>

        {/* Sentient Hubs */}
        <div
          className="absolute top-[73%] left-[78%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer"
          onClick={() => setSelectedCharacter(characterData.sentientHubs)}
        >
          <img src="/sentient-hubs-logo.png" alt="sentient hubs" className="w-full h-full" />
        </div>

        {/* Westminister - top-[23%], left-[7%] */}
        {/* Character on Map ends */}

      </motion.div>
    </motion.div>
    <Modal
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        title={selectedCharacter?.title}
        text={selectedCharacter?.text}
        videoUrl={selectedCharacter?.videoUrl}
      />
  </section>
  );
};

export default World;

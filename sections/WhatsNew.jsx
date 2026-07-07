'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Knowledge Share" />
        <TitleText title={<>Tools and Templates</>} />
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">Elevate your team's innovation and project execution with our curated self-service tools. Explore our Design Thinking toolkits to systematically solve challenges and drive results, with downloadable resources for every stage from empathy to testing. Access HIVE's general process guides and versatile templates for R&D management, strategy, idea development, and pilot execution.<br></br><br></br>Click on Reza to access our library!</p>
        {/* Templates and Tools Stuff
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
        */}
      </motion.div>

      <a href='https://dtpli.sharepoint.com/sites/LXRP-Extranet/SitePages/HIVE-tools-and-resources.aspx'  target="_blank" rel="noopener noreferrer">
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/reza-podium.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </a>
    </motion.div>
  </section>
);

export default WhatsNew;

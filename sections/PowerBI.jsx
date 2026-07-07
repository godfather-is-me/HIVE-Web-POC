'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const PowerBI = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| Sample PBI"
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 1)}
        style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
      >
        <iframe
          width="800"
          height="500"
          // AECOM Power BI Link
          // src="https://app.powerbi.com/reportEmbed?reportId=f20880d1-cae7-4354-84b4-ce4d42c61568&autoAuth=true&ctid=16ed5ab4-2b59-4e40-806d-8a30bdc9cf26"
          // VIDA Power BI Link
          // src = "https://app.powerbi.com/reportEmbed?reportId=b1b1cefb-f45a-4f17-a02f-b5679542263f&autoAuth=true&ctid=12ceb59c-6eb5-4da6-83fc-be99d5833257"
          // LXRP View (on AECOM Workspace)
          src="https://app.powerbi.com/reportEmbed?reportId=869e6443-03ab-4058-92b3-88d817cf8316&autoAuth=true&ctid=16ed5ab4-2b59-4e40-806d-8a30bdc9cf26"
          frameborder="0"
          allowFullScreen={true}
          style={{ border: '0', borderRadius: '10px' }}
          title="PowerBI Report"
        ></iframe>
      </motion.div>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default PowerBI;

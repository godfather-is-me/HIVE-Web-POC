'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
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
        title="| About HIVE"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        The <span className="font-extrabold">Victorian Infrastructure Development Authority (VIDA)</span> overseas the delivery of 200+ projects such as Metro Tunnel, North East Link, West Gate Tunnel, and removing 110 Level Crossings.
        
        <br/>
        <br/>
        <span className="font-extrabold">HIVE Research and Development </span>is VIDA’s improvement and innovation program – exploring, connecting and embedding ideas to improve program delivery and lead industry change.

        <br/>
        <br/>
        Our <span className="font-extrabold">mission</span> to make VIDA a leader in innovation - to support our people to think and act differently.
        
        </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

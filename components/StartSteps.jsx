import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-normal text-[20px] text-white">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-semibold text-[18px] text-[#b0b0b0] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;

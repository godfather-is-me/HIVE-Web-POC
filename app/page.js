import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, PowerBI, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <PowerBI />
      <div className="gradient-03 z-0" />
      <GetStarted />
    </div>

    <div className="relative">
      <Explore />
      <div className="gradient-04 z-0" />
    </div>

    <World />

    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;

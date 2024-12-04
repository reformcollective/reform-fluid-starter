import BigImageTextOver from "@/components/PageElements/BigImageTextOver";
import CallToAction from "@/components/PageElements/CallToAction";
import CenteredImageWithSideDescriptions from "@/components/PageElements/CenteredImageWithSideDescriptions";
import HowItWorks from "@/components/PageElements/HowItWorks";
import Logos from "@/components/PageElements/Logos";
import OneFeature from "@/components/PageElements/OneFeature";
import Tagline from "@/components/PageElements/Tagline";
import Testimonials from "@/components/PageElements/Testimonials";

const Home = () => (
  <main>
    <BigImageTextOver />
    <Logos />
    <HowItWorks />
    <Tagline />
    <CenteredImageWithSideDescriptions />
    <OneFeature />
    <OneFeature reversed />
    <Testimonials />
    <CallToAction />
  </main>
);

export default Home;

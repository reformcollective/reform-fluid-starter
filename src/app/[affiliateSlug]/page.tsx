import HeroSection from "@/components/PageElements/HeroSection";
import CallToAction from "@/components/PageElements/CallToAction";
import CenteredImageWithSideDescriptions from "@/components/PageElements/CenteredImageWithSideDescriptions";
import HowItWorks from "@/components/PageElements/HowItWorks";
import TrustedBy from "@/components/PageElements/TrustedBy";
import OneFeature from "@/components/PageElements/OneFeature";
import Tagline from "@/components/PageElements/Tagline";
import Testimonials from "@/components/PageElements/Testimonials";

const Home = () => (
  <main>
    <HeroSection />
    <TrustedBy />
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

import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Notification from "../components/Notification/Notification";
import Dairies from "../components/Dairies/Dairies";
import Stat from "../components/Stats/Stats";
import Carrer from "../components/Carrer/Carrer";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import JoinOurTeam from "../components/JoinOurTeam/JoinOurTeam";
import SocialMedia from "../components/SocialMedia/SocialMedia.js";
import OurRockstarMentors from "../components/OurRockstarMentors/OurRockstarMentors.js";
import QueriesAskedByYou from "../components/QueriesAskedByYou/QueriesAskedByYou.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Notification />
      <Dairies />
      <Stat />
      <SocialMedia />
      <Carrer />
      <OurRockstarMentors />
      <QueriesAskedByYou />
      <Banner />
      <JoinOurTeam />
      <Footer />
    </>
  );
}

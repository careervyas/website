import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Notification from "../components/Notification/Notification";
import Dairies from "../components/Dairies/Dairies";
import Stat from "../components/Stats/Stats";
import Youtube from "../components/Youtube/Youtube";
import Carrer from "../components/Carrer/Carrer";
import Banner from "../components/Banner/Banner";
import Advertisment from "../components/Advertisment/Advertisment";
import Footer from "../components/Footer/Footer";
import Telegram from "../components/Telegram/Telegram";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Notification></Notification>
      <Dairies></Dairies>
      <Stat></Stat>
      <Telegram></Telegram>
      <Youtube></Youtube>
      <Carrer></Carrer>
      <Banner></Banner>
      {/* <Advertisment></Advertisment> */}
      <Footer></Footer>
    </>
  );
}

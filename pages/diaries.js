import Blogs from "../components/Dairies/Main";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


export default function Blog() {
  
  return (
    <div
      className="bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FBackground.svg?alt=media&token=57acc8ed-1d1d-4c35-9d6c-c4d0ba098c47')]
    bg-no-repeat bg-contain">
      <Navbar />
      <Blogs />
      <Footer />
    </div>
  );
};

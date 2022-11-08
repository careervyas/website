import Blogs from "../components/Blogs/Blog";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import client from "../components/client";
import groq from 'groq'

const Blog = ({ posts }) => {
  return (
    <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FBackground.svg?alt=media&token=57acc8ed-1d1d-4c35-9d6c-c4d0ba098c47')]
    bg-no-repeat bg-contain ">
      <Navbar />
      <Blogs blog={posts}/>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post"]|order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Blog;


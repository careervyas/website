import Link from "next/link";
import Image from "next/image";
import logo from "../Navbar/images/logo.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import discord from "./images/discord.svg";
const { GoogleSpreadsheet } = require("google-spreadsheet");
import { toast, ToastContainer } from "react-toastify";

const socialMediaIcons = [
  ["https://www.facebook.com/people/Career-Vyas/100086391339652/", facebook],
  ["https://discord.com/invite/a5dRVB63GM", discord],
  ["https://www.instagram.com/careervyas/?utm_medium=copy_link", instagram],
  ["https://www.linkedin.com/company/career-vyas", linkedin],
  ["https://twitter.com/career_vyas?t=l8Z6rBmtIrWOgeHxFl8UTQ&s=09", twitter],
];

const SocialMediaIconLink = ({ link, imageSrc }) => {
  return (
    <div className="h-[30px] w-[30px] relative my-1 ml-2 cursor-pointer">
      <Link href={link}>
        <Image
          src={imageSrc}
          alt="career vyas"
          objectFit="cover"
          layout="fill"
        />
      </Link>
    </div>
  );
};

export default function Footer() {
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  async function loadSheet() {
    const SHEET_ID = "1d1c7fCIdPbZL5N6t7G19z4Ca2J7brRcBgzln-wJewcs";
    const CLIENT_EMAIL =
      "contact-form-career-vyas@contact-form-367605.iam.gserviceaccount.com";
    const PRIVATE_KEY =
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsv81eQc2f6zY5\nntp7CQpVU61UtOYuep7gMpo0jPgFJxnZibWzIqWMFulKQbwV2z2tCTqFIWbFRSzf\nrINg0aC0h6CHI4mHxXFjxutcu15n70ArCnDCgZU1Nq3TByQgHaMEh3m28aqDMT3B\nzpNW/IwxZuYYL3M7S45yK3X1/ULwYw/Eh1vQlENzfm6mSoSGET7FL9yN5TkCvpLQ\n6HVH4y+AaypionF2yEq+1PphZOkMRnLSEO3z/GyuPIAICvhpDTitie6W3S+gdmt8\nMb49lZRUiZ2W5TSRe7xwGH0scOp/GwHnModb6QctFPAjDX9U3GL1dxGcqU3w0IVc\nAwJEVoCnAgMBAAECggEAGq7M9G8FPrB7TDQmur60kLsfjfLGjnhUkPxlSD0GqZkW\ntjy99ZZM7Cdfz8n5LjESmjx6Lwpv5YRKqvPqc7/SwFUmAlRcD74mG7Yj2vYlXg1y\nTmj1mNL2LpAsZ5OgogX3N6G2DFV7XnnyeDybEo0TbyVd4MTM2jml837rYLHGr1Av\nZhjD4w1Odz8bBy0qIgJDTdAct1mfol/+adYOY4VJyD3WhEhI2LYnQPnbGCrRxl3U\nlcJ8ydokq2hnlaZArfUaqjFS3UF8PFmOxo4k30lvIKlVHJuCwvg78sVQlAV2v22e\nJnr7LURXsHnVC8/9cI2GFs7K2il6ZP3qLzgt0xSvnQKBgQDfJ7R2nbzCdFPw8vi5\n1IT8BaWfiV3dZTQK9NL+rkP5Dm4wXZP01jFsBRDcofr2lvnZHiXti5LeVYXSY5Gc\n+2gIflv3An+tVC7+kth0WnsQazhD29Q71iRkpovOG3lcFb5XYRdQmy4mgPnXEkck\n1DpCl+xvGzmKV22TaekEJ3XDpQKBgQDGLNjHmzKbvjzqci6PYaLaY8VvkEthXVLx\nDQcoDbiNquLfGbOy77HIclidEhUuznrAILGx1n6TPjIg5bqbp1xujZF0OpMxvRiK\nPXeqzUrMjpBOQU2oIG1Vhyqv6ujgoDSSciZQ7we1M0OpV4ZtpCc0Mk7jiuYq3FC+\ntMDENMwRWwKBgCC/AdNaKEXcriiwbuFOF0moRnqXvMdtP2rQLFolFmJoxLCiOsD1\n4YC5aZUGy/39f6JlsykdjyrDIAUUiVyg485DRJmFq1iy/sZqpArG8EIjibkjfAxf\nyy1d5ywSigeCRVErNTGl4+rQiFkQHJKB9h6pjo9rTlFHrROxufjbFYPlAoGBAIpa\noPWp+kkVJX4gPTVI2uNRKHPc72OIPfGgQNDL037EQSO00+omwZ3JhugRycwlxzj/\nGk+oCjJOB71D5WXqD/P2zgexJTZiaBGLHFKYhJIPLdwUZ1zrVqmRdlHe1LqN3mYn\nX2y9lEoDAkflnSpKojwkq0LcpBhkO9MIalQQ8C9lAoGBAJUpV8KWzcNEPW7MDh5F\nFzS3rQB15ZumMgYy3aaLwcAYSQpBWDcODiOAMXEzp7JdOWZ2T7zV3Omu67m55OUx\nVRNapY6U2KQhOdsGw7R0f8m9d7zwET+LoNRDyvcZYZwSNUqVuP2zp3e078IQkduB\n7iwwvRfgUBwPF9MeQ8hqk2Og\n-----END PRIVATE KEY-----\n";

    const doc = new GoogleSpreadsheet(SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, ""),
    });
    await doc.loadInfo();
    return doc;
  }
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const emailID = document.getElementById("userFooterEmailInput").value;
      if (!validateEmail(emailID)) {
        toast.warn("Please Enter A Valid Email ID");
        return;
      }
      const docs = await loadSheet();
      const SHEET_NAME = "Sheet1";
      const sheet = docs.sheetsByTitle[SHEET_NAME];
      sheet.addRow({
        timestamp: new Date(),
        email: emailID,
      });
      toast.success(
        "Keep Your Eye on the inbox, your surprise is on the way !!!"
      );
    } catch (e) {
      toast.error("Oops Something Went Wrong...");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:flex-row bg-[#C1FFF0] md:px-14 py-8 mobile:px-2 lg:px-12">
        <div className="flex flex-col lg:w-1/2 mr-6">
          <div className="flex flex-col items-start lg:w-2/3">
            <div className="flex flex-col items-start justify-center">
              <p className="text-black text-4xl font-bold">Career Vyas</p>
              <p className="text-3xl text-slate-500 font-semibold mt-3">
                Strengthening the Vector of Education
              </p>
            </div>
          </div>
          <div className="flex lg:w-2/3">
            <Image
              src={logo}
              alt="career vyas"
              height={250}
              width={250}
              objectFit="cover"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Footer%2Fstartupindia%20logo.png?alt=media&token=6e0d6f9f-c071-42f1-a1c9-d81192781759"
              alt="career vyas"
              height={150}
              width={300}
            />
          </div>
        </div>
        <div className="flex gap-4 lg:gap-0 flex-col lg:w-1/2">
          <div className="grid w-2/3 gap-4 grid-cols-2">
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/">Home</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/blog">Blogs</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/">College Diaries</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/about-us">About us</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/reachout">Reach Out</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/terms">Terms</Link>
            </span>
          </div>
          <div className="bg-white my-4 px-2 md:px-4 py-6 w-fit rounded-lg mt-16">
            <p className="font-semibold text-md text-center">
              Enter your Email to get the Suprise in your Inbox
            </p>
            <div className="flex flex-col mobile:flex-row justify-center items-center">
              <input
                className="m-1 ring-2 ring-slate-400 bg-white rounded-sm p-2 underline-offset-1"
                id="userFooterEmailInput"
              />
              <button
                onClick={handleClick}
                className="bg-[#6776FF] my-2 px-6 py-2 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse py-12 md:m-0 md:flex-row px-12 bg-[#C1FFF0] ">
        <div className="text-slate-700 text-xs lg:text-sm md:w-1/2">
          © 2022,Career Vyas. All rights reserved.
        </div>
        <div className="flex flex-col h-full md:w-1/2 mb-6 md:m-0">
          <span className="text-sm font-semibold text-slate-800">
            Connect with us
          </span>
          <div className="flex flex-row">
            {socialMediaIcons.map(([link, imageSrc], index) => (
              <SocialMediaIconLink
                key={index}
                link={link}
                imageSrc={imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

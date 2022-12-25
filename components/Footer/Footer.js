import Link from "next/link";
import Image from "next/image";
import logo from "../Navbar/images/logo.svg";
import logo2 from "./images/logo2.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import discord from "./images/discord.svg";

/*
const { GoogleSpreadsheet } = require("google-spreadsheet");

<div className="relative">
          <p className="m-4 font-semibold text-sm text-center">
            Enter your Email to get the Suprise in your Inbox
          </p>

          <div className="flex flex-row justify-center items-center">
            <input className="m-2 p-1 ring-2 ring-slate-400 bg-white rounded-lg" />
            <button
              className="bg-[#6776FF] w-24 text-white rounded-lg
      h-8 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>

  <div className="relative">
            <ArrowRound
              className={
                "absolute top-0 left-0 -translate-x-3/4 lg:-translate-x-full translate-y-3/4 w-24 hidden lg:block"
              }
            />
            <p className="mt-6 mb-1 font-semibold text-md text-center">
              Enter your Email to get the Suprise in your Inbox
            </p>

            <div className="flex flex-row justify-center items-center">
              <input
                className="m-1 ring-2 ring-slate-400 bg-white rounded-sm
                p-2 underline-offset-1 w-80"
                onChange={handleInput}
                value={Email}
              />
              <button
                onClick={handleClick}
                className="bg-[#6776FF] w-24 h-11 text-white rounded-lg
     hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>

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

    setdocs(doc);
  }

  const [docs, setdocs] = useState("");
const [Email, setEmail] = useState("");

  const handleClick = async (e) => {
    // Config variables
    e.preventDefault();

    const SHEET_NAME = "Sheet1";
    const sheet = docs.sheetsByTitle[SHEET_NAME];
    sheet.addRow({
      timestamp: new Date(),
      email: Email,
    });

    alert("keep your eye on the inbox, your surprise is on the way");
    setEmail("");
  };

*/

export default function Footer() {
  return (
    <div className="flex flex-col w-full h-full bg-[#C1FFF0]">
      <div className="flex flex-col md:flex-row items-center justify-center w-full  ">
        <div className="flex flex-col items-start lg:items-center justify-center w-full md:w-1/2 my-7">
          <div className="flex flex-col items-start justify-center">
            <p className="text-black text-4xl font-bold">Career Vyas</p>
            <p className="text-3xl text-slate-500 font-semibold mt-3">
              Strengthening the Vector of Education
            </p>
            <div className="flex flex-row">
              <div
                className="lg:h-[200px] lg:w-[250px] my-2
              h-[150px] w-[125px] relative"
              >
                <Image
                  src={logo}
                  alt="career vyas"
                  height={150}
                  width={125}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div
                className="lg:h-[200px] lg:w-[250px] my-2
              h-[150px] w-[125px] relative"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Footer%2Fstartupindia%20logo.png?alt=media&token=6e0d6f9f-c071-42f1-a1c9-d81192781759"
                  alt="career vyas"
                  height={150}
                  width={125}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start lg:items-center w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-8 lg:gap-4 mx-3 lg:mx-0">
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
              <Link href="/about">About us</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/reachout">Reach Out</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/terms">Terms</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <span className="text-slate-700 text-xs lg:text-sm">
            © 2022,Career Vyas. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col items-end lg:items-center justify-center w-full md:w-1/2 mb-4">
          <div className="text-slate-700 flex flex-col">
            Connect with us
            <div className="flex flex-row">
              <div
                className="h-[30px] w-[30px] relative m-1
              cursor-pointer"
              >
                <Link href="https://www.instagram.com/careervyas/?utm_medium=copy_link">
                  <Image
                    src={instagram}
                    alt="career vyas"
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://discord.gg/a5dRVB63GM">
                  <Image
                    src={discord}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://www.linkedin.com/company/career-vyas">
                  <Image
                    src={linkedin}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://twitter.com/career_vyas?t=l8Z6rBmtIrWOgeHxFl8UTQ&s=09">
                  <Image
                    src={twitter}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://www.facebook.com/profile.php?id=100086391339652">
                  <Image
                    src={facebook}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

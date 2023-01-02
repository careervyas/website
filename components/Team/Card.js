import Link from "next/link";

export default function Card({ Name, Position, Pic, LinkedIn, Email }) {
  return (
    <div className="flex flex-col  items-center m-5">
      <img
        src={Pic}
        height="250px"
        width="250px"
        className="border-4 border-[#6776FF] rounded-full"
      />

      <h5 className="text-center text-black text-lg mx-5">{Name}</h5>
      <p className="text-center text-black text-xs ">{Position}</p>
      <div className="flex flex-row items-center mt-1">
        <Link href={Email}>
          <a target="_blank" rel="noreferrer">
            <img
              className="mx-2 cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Social%20Media%2FFrame%20(1).svg?alt=media&token=3c3d94ca-adbc-46cf-b351-67bf4b2273a7"
              layout="intrinsic"
              width={20}
              height={20}
            />
          </a>
        </Link>
        <Link href={LinkedIn}>
          <a target="_blank" rel="noreferrer">
            <img
              className="mx-2 cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Social%20Media%2FFrame.svg?alt=media&token=2ed30161-c07e-4785-b08d-85caf1244a1e"
              layout="intrinsic"
              width={20}
              height={20}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

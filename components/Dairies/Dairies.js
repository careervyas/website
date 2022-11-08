import Card from "./Card";
import Link from "next/link";

export default function Dairies() {
  return (
    <div
      className="flex items-center flex-col my-4 bg-[#6776FF80]
    w-full"
    >
      <h2 className="font-bold text-4xl my-4">College Dairies</h2>
      <p className="font-semibold text-lg text-white my-3 mx-1 md:mx-0">
        Get the Proper Package of Information about each and every College 🔥
      </p>
      <div
        className="grid grid-cols-1 lg:grid-cols-3  gap-4 mb-4
        w-4/5"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} />
        ))}
      </div>

      <button
        className="mb-8 rounded-md
      text-white h-16 w-44 bg-[#6776FF] hover:bg-blue-700
      my-2"
      >
        <Link href="/blog">Read More..</Link>
      </button>
    </div>
  );
}

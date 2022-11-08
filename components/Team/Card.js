import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col  items-center m-5">
      <img
        className="w-[200px] h-[200px]"
        src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%2FEllipse%208.svg?alt=media&token=8d9c8001-ca80-453e-a50c-f4b89e730eb6"
       
      />

      <h5 className="text-center text-black text-lg mx-5">
        Garvit Gupta
      </h5>
      <p className="text-center text-black text-xs ">
        Co-Founder
      </p>
      <div className="flex flex-row items-center mt-1">
        <img
          className="mx-2 cursor-pointer"
          src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Social%20Media%2FFrame.svg?alt=media&token=2ed30161-c07e-4785-b08d-85caf1244a1e"
          layout="intrinsic"
          width={20}
          height={20}
        />

        <img
            className="mx-2 cursor-pointer"
          src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Social%20Media%2FFrame%20(1).svg?alt=media&token=3c3d94ca-adbc-46cf-b351-67bf4b2273a7"
          layout="intrinsic"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}

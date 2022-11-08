
import Image from "next/image";

export default function Card() {
  return (
    <div className="w-full h-full md:h-[200px]  rounded-lg ring-2 ring-blue-300 my-2 flex flex-row items-center bg-white hover:shadow-md hover:shadow-blue-600 hover:ring-blue-500
    cursor-pointer shadow-sm shadow-white p-2">
     
        <img src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%2Fblog.svg?alt=media&token=40c907f9-6542-4efc-b0df-c05a53b4a2be" alt="blog" className="w-1/2 h-full object-cover rounded-lg"/>

      <div className="w-1/2 h-full mx-2">
        <div className="font-bold text-lg mb-1 my-1">The Coldest Sunset</div>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia.
        </p>
       
      </div>

    </div>
  );
}

// md:flex-row md:max-w-sm
{
  /* <divclassNameName="flex justify-center h-40 w-4/5">
<divclassNameName="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
  <img
    
    src=""
    alt="servon"
  />
  <divclassNameName="flex flex-col justify-start">
    <h5classNameName="text-blue-700 text-base font-medium m-1">
      Card title
    </h5>
    <pclassNameName="text-gray-700 text-sm mx-2">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
  </div>
</div>
</div> */
}

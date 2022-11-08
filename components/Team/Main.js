import Card from "./Card";
import Arrow from "./Elements/Arrow";
import Lines from "./Elements/Lines";

export default function Main() {
  return (
    <div
      className="flex flex-col  items-center w-full h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FLanding%20Page.png?alt=media&token=212d4b73-59ba-4131-8c3c-02fc082dbe20')]
    bg-no-repeat bg-contain"
    >
      <div className="relative">
        <Arrow className="absolute right-full top-1/2 -translate-y-1/2" />
        <h1 className="text-center text-black text-4xl font-bold mt-5 mx-5 mb-5 relative">
          Hustlers Behind <span className="text-blue-400"> Career Vyas</span>
        </h1>
        <Lines
          className="absolute left-full -top-full translate-y-6
        hidden lg:block"
        />
      </div>

      <div className="flex flex-col w-full md:w-1/3 items-center bg-white rounded-xl shadow-lg shadow-[#E2FBF5]">
        Building a the New Era of Career Guidance 💪💪
      </div>

      <div className="col-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-4 relative">
        <svg
          className="absolute top-1/3 left-0"
          width="43"
          height="146"
          viewBox="0 0 73 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="-0.000146866"
            cy="73.0001"
            r="14.4"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle
            cx="1.90735e-06"
            cy="73"
            r="24"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle
            cx="-9.53674e-05"
            cy="72.9999"
            r="33.6"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle
            cx="4.95911e-05"
            cy="73"
            r="43.2"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle
            cx="-4.57764e-05"
            cy="73"
            r="52.8"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle
            cx="-0.000152588"
            cy="73.0001"
            r="62.4"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle cy="73" r="72" stroke="#6776FF" stroke-width="2" />
        </svg>

        <svg
          className="absolute top-3/4 right-0"
          width="45"
          height="146"
          viewBox="0 0 65 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="72.9999"
            cy="73"
            r="14.4"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle
            cx="72.9999"
            cy="73"
            r="24"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle cx="73" cy="73" r="33.6" stroke="#6776FF" stroke-width="2" />
          <circle cx="73" cy="73" r="43.2" stroke="#6776FF" stroke-width="2" />
          <circle
            cx="72.9999"
            cy="73"
            r="52.8"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle
            cx="72.9999"
            cy="73"
            r="62.4"
            stroke="#6776FF"
            stroke-width="2"
          />
          <circle cx="73" cy="73" r="72" stroke="#6776FF" stroke-width="2" />
        </svg>

        <svg
          className="absolute top-1/2 right-0"
          width="55"
          height="111"
          viewBox="0 0 75 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4486 71.5539C21.2888 63.2706 32.3677 62.8649 43.5518 62.9783C57.5116 63.1198 71.635 64.0698 83.7181 51.5188"
            stroke="#6776FF"
            stroke-width="10"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.00879 97.3134C14.3684 86.5743 26.9558 80.9456 41.1521 80.8317C48.58 80.7724 55.9461 82.3321 63.3867 81.6942C80.1495 80.2557 96.4447 71.876 105.184 57.2432"
            stroke="#6776FF"
            stroke-width="10"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M77.9938 94.4512C72.1943 97.4133 66.0165 99.4873 59.4528 99.5879C46.3808 99.7875 33.057 96.3576 22.1817 105.9"
            stroke="#6776FF"
            stroke-width="10"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Card key={item} />
        ))}

        <svg
          className="absolute top-2/3 left-10"
          width="20"
          height="81"
          viewBox="0 0 40 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.0791 78.1605C25.9816 67.928 19.1968 58.1904 12.4521 47.6463C9.23507 42.617 6.00172 36.6463 3 31.4335C9.62656 30.7622 13.2411 31.5158 19.8461 30.7647C19.8487 30.7647 17.1861 14.5973 15.6188 2.97668C25.3275 14.5295 33.1895 34.1752 37 45.2819C32.3399 45.5924 27.5754 45.8247 22.9072 45.6791C26.1801 56.5446 29.6932 67.3484 33.0791 78.1605Z"
            fill="#F1FFED"
            stroke="#5D5FEF"
            stroke-width="5"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div
        className="col-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-4 relative bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FLanding%20Page1.png?alt=media&token=2e40acd9-c89e-48e3-9393-68f160c24a01')]
      bg-cover bg-no-repeat"
      >
        {[1, 2, 3,4,5,6].map((item) => (
          <Card key={item} />
        ))}
      </div>
    </div>
  );
}

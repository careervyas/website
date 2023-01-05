import React from "react";
import data from "./data/pricingData";

const PricingCard = ({
  iconSVG,
  planFor,
  planType,
  planShortDesc,
  orignalPrice,
  discountedPrice,
  whatsIncluded,
  razorPayLinks,
}) => {
  return (
    <>
      {/* Screen < 1024px */}
      <div
        className="flex lg:hidden flex-col gap-4 bg-white p-8 max-w-[320px] 420:max-w-[400px]"
        style={{
          border: "1px solid #EFF0F7",
          boxShadow: "0px 2px 12px rgba(20, 20, 43, 0.08)",
          borderRadius: "24px",
        }}
      >
        <div className="flex gap-4">
          {iconSVG}
          <div className="flex flex-col">
            <div className="text-[#6F6C90] font-medium">For {planFor}</div>
            <div className="text-[#170F49] font-bold">{planType}</div>
          </div>
        </div>
        <div className="text-[#6F6C90] text-lg">{planShortDesc}</div>
        <div className="flex items-center">
          <div className="text-[#170F49] text-lg relative mr-2">
            <svg
              className="absolute top-[20%]"
              width="79"
              height="26"
              viewBox="0 0 79 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.657794"
                y1="2.58809"
                x2="77.6578"
                y2="23.5881"
                stroke="#FF3A3A"
                stroke-width="5"
              />
            </svg>
            <span className="text-4xl font-bold">{orignalPrice[0]}</span>
          </div>
          <span className="text-[#170F49] font-bold text-5xl">
            {discountedPrice[0]}
          </span>
          <span className="text-[#6F6C90] font-medium text-xl self-end">
            /monthly
          </span>
        </div>
        <div className="font-bold text-[#170F49] text-lg">
          What&apos;s included
        </div>
        <div className="min-h-[400px] flex flex-col gap-5">
          {whatsIncluded.map((benefit, index) => (
            <div className="flex gap-2" key={index}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                  fill="#6766FF"
                />
                <path
                  d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {benefit}
            </div>
          ))}
        </div>
        <div className="flex gap-7 flex-col">
          <a rel="noreferrer" href={razorPayLinks[0]}>
            <div className="rounded-[96px] font-bold text-white bg-[#6766FF] text-center py-4 text-xl">
              Get Started for 1 Month
            </div>
          </a>
          <a rel="noreferrer" href={razorPayLinks[1]}>
            <div className="flex font-bold items-center justify-center gap-4 rounded-[96px] text-white bg-[#6766FF] py-4 text-xl">
              <span>For 3 Months</span>
              <span className="flex">
                <div className="relative mr-2">
                  <svg
                    className="absolute top-[20%]"
                    width="35"
                    height="26"
                    viewBox="0 0 79 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.657794"
                      y1="2.58809"
                      x2="77.6578"
                      y2="23.5881"
                      stroke="#000000"
                      stroke-width="5"
                    />
                  </svg>
                  <span className="font-bold text-sm">{orignalPrice[1]}</span>
                </div>
                <span className="font-bold">{discountedPrice[1]}</span>
              </span>
            </div>
          </a>
          <a rel="noreferrer" href={razorPayLinks[2]}>
            <div className="flex font-bold items-center justify-center gap-4 rounded-[96px] text-white bg-[#6766FF] py-4 text-xl">
              <span>For 6 Months</span>
              <span className="flex">
                <div className="relative mr-2">
                  <svg
                    className="absolute top-[20%]"
                    width="35"
                    height="26"
                    viewBox="0 0 79 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.657794"
                      y1="2.58809"
                      x2="77.6578"
                      y2="23.5881"
                      stroke="#000000"
                      stroke-width="5"
                    />
                  </svg>
                  <span className="font-bold text-sm">{orignalPrice[2]}</span>
                </div>
                <span className="font-bold">{discountedPrice[2]}</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* Screen >= 1024px */}
      <div className="hidden lg:flex flex-col gap-8">
        <div
          className="flex flex-col gap-4 bg-white rounded-xl p-8 max-w-[320px] xl:max-w-[400px]"
          style={{
            border: "1px solid #EFF0F7",
            boxShadow: "0px 2px 12px rgba(20, 20, 43, 0.08)",
            borderRadius: "24px",
          }}
        >
          <div className="flex gap-4">
            {iconSVG}
            <div className="flex flex-col">
              <div className="text-[#6F6C90] font-medium">For {planFor}</div>
              <div className="text-[#170F49] font-bold">{planType}</div>
            </div>
          </div>
          <div className="text-[#6F6C90] text-lg">{planShortDesc}</div>
          <div className="flex items-center">
            <div className="text-[#170F49] text-lg relative mr-2">
              <svg
                className="absolute top-[20%]"
                width="79"
                height="26"
                viewBox="0 0 79 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.657794"
                  y1="2.58809"
                  x2="77.6578"
                  y2="23.5881"
                  stroke="#FF3A3A"
                  stroke-width="5"
                />
              </svg>
              <span className="text-4xl font-bold">{orignalPrice[0]}</span>
            </div>
            <span className="text-[#170F49] font-bold text-5xl">
              {discountedPrice[0]}
            </span>
            <span className="text-[#6F6C90] font-medium text-xl self-end">
              /monthly
            </span>
          </div>
          <div className="font-bold text-[#170F49] text-lg">
            What&apos;s included
          </div>
          <div className="min-h-[400px] flex flex-col gap-5">
            {whatsIncluded.map((benefit, index) => (
              <div className="flex gap-2" key={index}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                    fill="#6766FF"
                  />
                  <path
                    d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {benefit}
              </div>
            ))}
          </div>
          <div className="flex gap-7 flex-col">
            <a rel="noreferrer" href={razorPayLinks[0]}>
              <div className="rounded-[96px] font-bold text-white bg-[#6766FF] text-center py-4 text-lg">
                Get Started
              </div>
            </a>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col gap-4 bg-[white] rounded-xl p-8 max-w-[320px] xl:max-w-[400px]"
            style={{
              border: "1px solid #EFF0F7",
              boxShadow: "0px 2px 12px rgba(20, 20, 43, 0.08)",
              borderRadius: "24px",
            }}
          >
            <div className="flex gap-4">
              {iconSVG}
              <div className="flex flex-col">
                <div className="text-[#6F6C90] font-medium">For {planFor}</div>
                <div className="text-[#170F49] font-bold">{planType}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_425_951)">
                  <circle
                    cx="13"
                    cy="12.5"
                    r="12"
                    fill="#908FFF"
                    fill-opacity="0.26"
                    stroke="#6776FF"
                  />
                  <circle cx="13" cy="12.5" r="7.5" fill="#6766FF" />
                </g>
                <defs>
                  <clipPath id="clip0_425_951">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="flex flex-col text-[#6F6C90]">
                <div className="font-bold">3 Monthly</div>
                <div className="text-sm">Pay for 3 Months</div>
              </div>
              <div className="flex flex-col relative">
                <svg
                  className="absolute"
                  width="32"
                  height="26"
                  viewBox="0 0 79 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.657794"
                    y1="2.58809"
                    x2="77.6578"
                    y2="23.5881"
                    stroke="#FF3A3A"
                    stroke-width="5"
                  />
                </svg>
                <span className="font-semibold">{orignalPrice[1]}</span>
                <span className="font-bold leading-4 text-[#170F49] text-3xl">
                  {discountedPrice[1]}
                </span>
              </div>
            </div>
            <a rel="noreferrer" href={razorPayLinks[1]}>
              <div className="rounded-[96px] font-bold text-white bg-[#6766FF] text-center mt-4 py-4 text-lg">
                Get Started
              </div>
            </a>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col gap-4 bg-white rounded-xl p-8 max-w-[320px] xl:max-w-[400px]"
            style={{
              border: "1px solid #EFF0F7",
              boxShadow: "0px 2px 12px rgba(20, 20, 43, 0.08)",
              borderRadius: "24px",
            }}
          >
            <div className="flex gap-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="72" height="72" rx="16" fill="#ECEBFF" />
                <path
                  d="M36 17C30.9609 17 26.1282 19.0018 22.565 22.565C19.0018 26.1282 17 30.9609 17 36C17 41.0391 19.0018 45.8718 22.565 49.435C26.1282 52.9982 30.9609 55 36 55L36 36V17Z"
                  fill="#6766FF"
                />
                <path
                  d="M36 55C41.0391 55 45.8718 52.9982 49.435 49.435C52.9982 45.8718 55 41.0391 55 36C55 30.9609 52.9982 26.1282 49.435 22.565C45.8718 19.0018 41.0391 17 36 17L36 36L36 55Z"
                  fill="#B8B1FF"
                />
              </svg>
              <div className="flex flex-col">
                <div className="text-[#6F6C90] font-medium">For {planFor}</div>
                <div className="text-[#170F49] font-bold">{planType}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_425_951)">
                  <circle
                    cx="13"
                    cy="12.5"
                    r="12"
                    fill="#908FFF"
                    fill-opacity="0.26"
                    stroke="#6776FF"
                  />
                  <circle cx="13" cy="12.5" r="7.5" fill="#6766FF" />
                </g>
                <defs>
                  <clipPath id="clip0_425_951">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="flex flex-col text-[#6F6C90]">
                <div className="font-bold">3 Monthly</div>
                <div className="text-sm">Pay for 3 Months</div>
              </div>
              <div className="flex flex-col relative">
                <svg
                  className="absolute"
                  width="32"
                  height="26"
                  viewBox="0 0 79 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.657794"
                    y1="2.58809"
                    x2="77.6578"
                    y2="23.5881"
                    stroke="#FF3A3A"
                    stroke-width="5"
                  />
                </svg>
                <span className="font-semibold">{orignalPrice[2]}</span>
                <span className="font-bold leading-4 text-[#170F49] text-3xl">
                  {discountedPrice[2]}
                </span>
              </div>
            </div>
            <a rel="noreferrer" href={razorPayLinks[2]}>
              <div className="rounded-[96px] font-bold text-white bg-[#6766FF] text-center mt-4 py-4 text-lg">
                Get Started
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const PopularPricingCard = ({
  iconSVG,
  planFor,
  planType,
  planShortDesc,
  orignalPrice,
  discountedPrice,
  whatsIncluded,
  razorPayLinks,
}) => {
  return (
    <div className="relative">
      <div
        className="absolute top-4 right-4 text-sm text-white px-5 py-2"
        style={{ background: "rgba(255, 255, 255, 0.2)", borderRadius: "10px" }}
      >
        Popular
      </div>
      {/* Screen < 1024px */}
      <div
        className="text-white flex lg:hidden flex-col gap-4 bg-[#6766FF] rounded-xl p-8 max-w-[320px] 420:max-w-[400px]"
        style={{
          boxShadow: "0px 2px 12px rgba(20, 20, 43, 0.08)",
          borderRadius: "24px",
          border: "1px solid #EFF0F7",
        }}
      >
        <div className="flex gap-4">
          {iconSVG}
          <div className="flex flex-col">
            <div className="text-[#EFF0F7] font-medium">For {planFor}</div>
            <div className="font-bold">{planType}</div>
          </div>
        </div>
        <div className="text-[#D9DBE9] text-lg">{planShortDesc}</div>
        <div className="flex items-center">
          <div className="text-lg relative mr-2">
            <svg
              className="absolute top-[20%]"
              width="79"
              height="26"
              viewBox="0 0 79 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.657794"
                y1="2.58809"
                x2="77.6578"
                y2="23.5881"
                stroke="#FF3A3A"
                stroke-width="5"
              />
            </svg>
            <span className="text-4xl font-bold">₹{orignalPrice[0]}</span>
          </div>
          <span className="font-bold text-5xl">₹{discountedPrice[0]}</span>
          <span className="text-[#D9DBE9] font-medium text-xl self-end">
            /monthly
          </span>
        </div>
        <div className="font-bold text-lg">What&apos;s included</div>
        <div className="min-h-[400px] flex flex-col gap-5">
          {whatsIncluded.map((benefit, index) => (
            <div className="text-[#D9DBE9] flex gap-2" key={index}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                  fill="white"
                />
                <path
                  d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785"
                  stroke="#4A3AFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {benefit}
            </div>
          ))}
        </div>
        <div className="flex gap-7 flex-col">
          <a href={razorPayLinks[0]} rel="noreferrer">
            <div className="rounded-[96px] font-bold text-[#6766FF] bg-white text-center py-4 text-xl">
              Get Started for 1 Month
            </div>
          </a>
          <a href={razorPayLinks[1]} rel="noreferrer">
            <div className="flex items-center justify-center gap-4 rounded-[96px] text-[#6766FF] bg-[white] py-4 text-xl font-bold">
              <span>For 3 Months</span>
              <span className="flex">
                <div className="relative mr-2">
                  <svg
                    className="absolute top-[20%]"
                    width="35"
                    height="26"
                    viewBox="0 0 79 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.657794"
                      y1="2.58809"
                      x2="77.6578"
                      y2="23.5881"
                      stroke="#000000"
                      stroke-width="5"
                    />
                  </svg>
                  <span className="font-bold text-sm">{orignalPrice[1]}</span>
                </div>
                <span className="font-bold">{discountedPrice[1]}</span>
              </span>
            </div>
          </a>
          <a href={razorPayLinks[2]} rel="noreferrer">
            <div className="flex items-center justify-center gap-4 rounded-[96px] text-[#6766FF] bg-[white] py-4 text-xl font-bold">
              <span>For 6 Months</span>
              <span className="flex">
                <div className="relative mr-2">
                  <svg
                    className="absolute top-[20%]"
                    width="35"
                    height="26"
                    viewBox="0 0 79 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.657794"
                      y1="2.58809"
                      x2="77.6578"
                      y2="23.5881"
                      stroke="#000000"
                      stroke-width="5"
                    />
                  </svg>
                  <span className="font-bold text-sm">{orignalPrice[2]}</span>
                </div>
                <span className="font-bold">{discountedPrice[2]}</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* Screen >= 1024px */}
      <div className="hidden lg:flex  flex-col gap-8">
        <div
          className="flex flex-col gap-4 text-white bg-[#6766FF] rounded-xl p-8 max-w-[320px] xl:max-w-[400px]"
          style={{
            boxShadow: "0px 2px 12px rgba(20, 20, 43, 0.08)",
            borderRadius: "24px",
            border: "1px solid #EFF0F7",
          }}
        >
          <div className="flex gap-4">
            {iconSVG}
            <div className="flex flex-col">
              <div className="text-[#EFF0F7] font-medium">For {planFor}</div>
              <div className="font-bold">{planType}</div>
            </div>
          </div>
          <div className="text-[#D9DBE9] text-lg">{planShortDesc}</div>
          <div className="flex items-center">
            <div className="text-lg relative mr-2">
              <svg
                className="absolute top-[20%]"
                width="79"
                height="26"
                viewBox="0 0 79 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.657794"
                  y1="2.58809"
                  x2="77.6578"
                  y2="23.5881"
                  stroke="#FF3A3A"
                  stroke-width="5"
                />
              </svg>
              <span className="text-4xl font-bold">{orignalPrice[0]}</span>
            </div>
            <span className="font-bold text-5xl">{discountedPrice[0]}</span>
            <span className="text-[#D9DBE9] font-medium text-xl self-end">
              /monthly
            </span>
          </div>
          <div className="font-bold text-lg">What&apos;s included</div>
          <div className="min-h-[400px] flex flex-col gap-5">
            {whatsIncluded.map((benefit, index) => (
              <div className="flex gap-2 text-[#D9DBE9]" key={index}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                    fill="white"
                  />
                  <path
                    d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785"
                    stroke="#4A3AFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                {benefit}
              </div>
            ))}
          </div>
          <div className="flex gap-7 flex-col">
            <a href={razorPayLinks[0]} rel="noreferrer">
              <div className="rounded-[96px] font-bold text-[#4A3AFF] bg-[white] text-center py-4 text-lg">
                Get Started
              </div>
            </a>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col gap-4 bg-[#6766FF] text-white rounded-xl p-8 max-w-[320px] xl:max-w-[400px]"
            style={{
              boxShadow: "0px 2px 12px rgba(20, 20, 43, 0.08)",
              borderRadius: "24px",
              border: "1px solid #EFF0F7",
            }}
          >
            <div className="flex gap-4">
              {iconSVG}
              <div className="flex flex-col">
                <div className="text-[#EFF0F7] font-medium">For {planFor}</div>
                <div className="font-bold">{planType}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_425_1320)">
                  <circle
                    cx="13"
                    cy="12.5"
                    r="12"
                    fill="white"
                    fill-opacity="0.2"
                    stroke="white"
                  />
                  <circle cx="13" cy="12.5" r="7.5" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_425_1320">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="flex flex-col text-[#D9D9D9]">
                <div className="font-bold">3 Monthly</div>
                <div className="text-sm">Pay for 3 Months</div>
              </div>
              <div className="flex flex-col relative">
                <svg
                  className="absolute"
                  width="32"
                  height="26"
                  viewBox="0 0 79 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.657794"
                    y1="2.58809"
                    x2="77.6578"
                    y2="23.5881"
                    stroke="#FF3A3A"
                    stroke-width="5"
                  />
                </svg>
                <span className="font-semibold">{orignalPrice[1]}</span>
                <span className="font-bold leading-4 text-3xl">
                  {discountedPrice[1]}
                </span>
              </div>
            </div>
            <a href={razorPayLinks[1]} rel="noreferrer">
              <div className="rounded-[96px] font-bold text-[#6766FF] bg-white text-center mt-4 py-4 text-lg">
                Get Started
              </div>
            </a>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col gap-4 bg-[#6766FF] text-white rounded-xl p-8 max-w-[320px] xl:max-w-[400px]"
            style={{
              boxShadow: "0px 2px 12px rgba(20, 20, 43, 0.08)",
              borderRadius: "24px",
              border: "1px solid #EFF0F7",
            }}
          >
            <div className="flex gap-4">
              {iconSVG}
              <div className="flex flex-col">
                <div className="text-[#EFF0F7] font-medium">For {planFor}</div>
                <div className="font-bold">{planType}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_425_1320)">
                  <circle
                    cx="13"
                    cy="12.5"
                    r="12"
                    fill="white"
                    fill-opacity="0.2"
                    stroke="white"
                  />
                  <circle cx="13" cy="12.5" r="7.5" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_425_1320">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="flex flex-col text-[#D9D9D9]">
                <div className="font-bold">6 Monthly</div>
                <div className="text-sm">Pay for 6 Months</div>
              </div>
              <div className="flex flex-col relative">
                <svg
                  className="absolute"
                  width="32"
                  height="26"
                  viewBox="0 0 79 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.657794"
                    y1="2.58809"
                    x2="77.6578"
                    y2="23.5881"
                    stroke="#FF3A3A"
                    stroke-width="5"
                  />
                </svg>
                <span className="font-semibold">{orignalPrice[2]}</span>
                <span className="font-bold leading-4 text-3xl">
                  {discountedPrice[2]}
                </span>
              </div>
            </div>
            <a href={razorPayLinks[2]} rel="noreferrer">
              <div className="rounded-[96px] font-bold text-[#6766FF] bg-white text-center mt-4 py-4 text-lg">
                Get Started
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-11 text-[#6766FF] font-bold text-center text-3xl sm:text-5xl">
        Let&apos;s make it your Best Investment
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <PricingCard {...data[0]} />
        <PopularPricingCard {...data[1]} />
        <PricingCard {...data[2]} />
      </div>
    </div>
  );
}

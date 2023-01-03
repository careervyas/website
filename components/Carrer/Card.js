import styles from "./Card.module.css";

export default function Card({ title, content }) {
  return (
    <div className={`flex justify-center cursor-pointer ${styles.animate}`}>
      <div className="flex flex-col h-36 w-60 m-4 p-2 md:max-w-sm md:max-h-sm  bg-[#B6BDFF47] border-2 border-blue-400 rounded-md">
        <h5
          className="text-black text-lg text-center justify-center mb-2
          font-bold"
        >
          {title}
        </h5>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
}

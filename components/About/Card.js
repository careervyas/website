export default function Card({ title, content }) {
  return (
    <div className="flex flex-col  border-2 border-slate-300 h-60 w-60
    p-1">
      <svg

        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#6776FF" />
      </svg>
      <h5 className="font-bold text-lg my-2">{title}</h5>
      <p className="text-sm">{content}</p>
    </div>
  );
}

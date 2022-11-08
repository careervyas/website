import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl m-12 text-center">
        m-tange-ppp&apos;s Portfolio
      </h1>
      <div>
        <h2 className="text-2xl">Tetris</h2>
        <Link
          href="https://next-tetris-six.vercel.app/"
          target="blank"
          className="inline-block"
        >
          <Image
            src="/screenshot_tetris.png"
            width={500}
            height={500}
            alt="Screenshot Tetris"
          />
        </Link>
      </div>
    </div>
  );
}

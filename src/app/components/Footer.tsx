import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 px-36 text-sm text-gray-500 flex justify-between items-center border-t-gray-200 border-t-1">
      <div>My Portfolio</div>
      <div className="flex flex-col">
        <span>© 2020 - 2030</span>
        <Link href="/">Privacy - Terms</Link>
      </div>
    </footer>
  );
}

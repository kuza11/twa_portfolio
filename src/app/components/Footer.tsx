import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-gray-200 border-t-1">
      <div className="py-4 px-4 md:px-36 text-sm text-gray-500 flex justify-between items-center max-w-[120rem] m-auto" >
        <div>My Portfolio</div>
        <div className="flex flex-col">
          <span>© 2025 - 2030</span>
          <Link href="/">Privacy - Terms</Link>
        </div>
      </div>
    </footer>
  );
}

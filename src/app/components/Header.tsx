"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b-gray-200 border-b-1">
      <Link href="/" className="text-2xl font-bold">
        PORTFOLIO
      </Link>
      <nav className="flex gap-6 items-center">
        <Link
          href="https://cz.linkedin.com/in/sergey-kuroedov-2a21b4208?trk=people-guest_people_search-card"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link href="https://www.instagram.com/skuroedov_/" target="_blank">
          Instagram
        </Link>
        <Link href="https://www.facebook.com/skuroedov" target="_blank">
          Facebook
        </Link>
        <button
          onClick={() => {
            const contactForm = document.getElementById("contact");
            const container = document.getElementById("container");
            if (contactForm && container) {
              contactForm.classList.remove("hidden");
              container.classList.add("blur-sm", "pointer-events-none");
            }
          }}
          className="bg-(--primary) text-(--background) px-4 py-2 rounded hover:cursor-pointer"
        >
          Kontakt
        </button>
      </nav>
    </header>
  );
}

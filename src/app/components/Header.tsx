"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b-gray-200 border-b-1">
      <div className="flex justify-between items-center w-full py-4 px-6 max-w-[120rem] m-auto">
        <h1 className="text-2xl font-bold">
          PORTFOLIO
        </h1>
        <Image
          src="/menu.png"
          alt="Menu"
          width={320}
          height={320}
          quality={100}
          className="opacity-50 sm:hidden hover:cursor-pointer size-7"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <nav
          className={`gap-6 items-center bg-(--background) ${
            isOpen
              ? "flex flex-col absolute top-16 right-0 p-4 rounded-md rounded-md-r-none shadow z-50"
              : "hidden sm:flex"
          }`}
        >
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
            className="bg-(--primary) text-(--background) px-4 py-2 rounded-md hover:cursor-pointer"
          >
            Kontakt
          </button>
        </nav>
      </div>
    </header>
  );
}

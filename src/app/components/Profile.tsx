import Image from "next/image";

export default function Profile() {
  return (
    <div className="bg-(--foreground) text-(--background) min-[312px]:rounded-md overflow-hidden pr-2 sm:p-8 flex items-center gap-4 sm:gap-8 shadow">
      <Image
        src="/profile.png"
        alt="Jakub Zvolánek"
        width={1080}
        height={1080}
        className="sm:rounded-md w-34 sm:w-48"
        quality={100}
      />
      <div>
        <h1 className="text-xl sm:text-4xl font-bold mb-1 min-[340px]:mb-4">Jakub Zvolánek</h1>
        <p className="sm:text-2xl mb-0.5 min-[340px]:mb-2">SPŠEaG V Úžlabině student</p>
        <p className="text-sm sm:text-base opacity-60">IT, cars, technology</p>
      </div>
    </div>
  );
}

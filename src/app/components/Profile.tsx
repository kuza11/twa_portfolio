import Image from "next/image";

export default function Profile() {
  return (
    <div className="bg-(--foreground) text-(--background) rounded-md overflow-hidden pr-2 sm:p-8 flex items-center gap-4 sm:gap-8 shadow">
      <Image
        src="/profile.png"
        alt="Jakub Zvolánek"
        width={192}
        height={192}
        className="sm:rounded-md w-34 sm:w-48"
        quality={100}
      />
      <div>
        <h1 className="text-xl sm:text-4xl font-bold mb-4">Jakub Zvolánek</h1>
        <p className="sm:text-2xl mb-2">SPŠEaG V Úžlabině student</p>
        <p className="text-sm sm:text-base opacity-60">IT, cars, technology</p>
      </div>
    </div>
  );
}

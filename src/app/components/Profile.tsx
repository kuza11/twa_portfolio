import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="bg-(--foreground) text-(--background) rounded overflow-hidden p-8 flex items-center gap-8 shadow">
      <Image
        src="/profile.png"
        alt="Jakub Zvolánek"
        width={192}
        height={192}
        className="rounded"
      />
      <div>
        <h1 className="text-4xl font-bold mb-4">Jakub Zvolánek</h1>
        <p className="text-xl mb-2">SPŠEaG V Úžlabině student</p>
        <p className="opacity-60">IT, cars, technology</p>
      </div>
    </div>
  );
}

interface InfoCardProps {
  title: string;
  justify?: boolean;
  children: React.ReactNode;
}

export default function Card({
  title,
  justify = true,
  children,
}: InfoCardProps) {
  return (
    <div className="bg-(--secondary) rounded pt-5 pb-5 pl-6 pr-6 shadow">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className={`text-(--foreground) ${justify ? "text-justify" : ""}`}>
        {children}
      </div>
    </div>
  );
}

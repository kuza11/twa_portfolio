const certifications: Record<string, string> = {
  ECDL: "AM3; AM4; M2; M3; M4; M5; M6; M7",
  CISCO:
    "IT essentials; Introduction to networks; Switching, routing and wireless essentials",
  NDG: "Linux 1; Linux 2",
  Microsoft: "AZ-900",
};

export default function Certificates() {
  return (
    <div className="flex flex-col gap-2">
      {Object.entries(certifications).map(([name, details]) => (
        <div
          key={name}
          className="flex items-center justify-between gap-4 bg-(--accent) p-2 rounded shadow"
        >
          <div className="text-xl w-32">{name}</div>
          <div className="text-right">{details}</div>
        </div>
      ))}
    </div>
  );
}

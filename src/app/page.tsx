import Header from "@components/Header";
import Profile from "@/app/components/Profile";
import Card from "@/app/components/Card";
import Certificates from "@/app/components/Certificates";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="container">
        <Header />
        <div className="max-w-7xl m-auto p-2.5 sm:p-6 space-y-2.5 sm:space-y-6">
          <Profile />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-6">
            <Card title="O mě">
              <div className="space-y-4">
                <p>
                  Jmenuji se Jakub Zvolánek, je mi 18 let a studuji SPŠEaG v
                  Úžlabině, obor informační technologie. Už od mládí se zajímám
                  o techniku, elektroniku a počítače. Rád se pouštím do různých
                  projektů, od motokár přes řídící systémy pomocí Arduina až po
                  webové aplikace a jiné programy. Rád pomůžu, když někdo
                  potřebuje s něčím poradit, pomoct nebo něco doučit.
                </p>
                <p>
                  Občas se účastním soutěží a v roce 2023 se nám dokonce
                  podařilo se školním týmem umístit na 1. místě v soutěži AT&T
                  Hackathon Junior.
                </p>
              </div>
            </Card>

            <Card title="Zkušenosti">
              <div className="space-y-4">
                <p>
                  V rámci praxe jsem pracoval jako IT asistent ve společnosti
                  Honeywell, kde jsem se věnoval správě a instalaci operačních
                  systémů Windows a Linux, výzkumu a aplikaci lokálních LLM
                  modelů, konfiguraci síťových prvků, počítačovému HW a
                  aplikacím strojového učení včetně konfigurace vektorové
                  databáze.
                </p>
                <p>
                  Mám také zkušenosti jako lektor-instruktor ze SPŠEaG v
                  Úžlabině, kde jsem pomáhal účastníkům při tvorbě programů a
                  řešení technických problémů. Také jsem zde spoluvytvářel
                  webovou aplikaci klub absolventů.
                </p>
              </div>
            </Card>

            <Card title="Dovednosti" justify={false}>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Operační systémy: Windows 8/10/11, XP/Vista/7 (expert), Linux
                  (zkušený)
                </li>
                <li>
                  Programovací jazyky: HTML, CSS, JavaScript, TypeScript
                  (expert), PHP, SQL, C/C++, C#, Python (zkušený až pokročilý)
                </li>
                <li>
                  Databáze: MySQL/MariaDB (zkušený), Oracle, SQLite (pokročilý)
                </li>
                <li>Grafické programy: Adobe Photoshop, AutoCAD (pokročilý)</li>
              </ul>
            </Card>

            <Card title="Certifikáty">
              <Certificates />
            </Card>
          </div>
        </div>
        <Footer />
      </div>
      <Contact />
    </main>
  );
}

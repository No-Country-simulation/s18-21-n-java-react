import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-slate-900 text-white p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          >
            Logo
          </Image>
        </Link>
      </div>
    </div>
  );
};

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-around items-center py-4">
        <div className="bg-red-300 p-2 rounded-full text-2xl">NB</div>
        <nav>
          <ul className="flex gap-5 font-firacode">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/notes">Notes</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;

import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-slate-800 px-8 py-3">
            <Link href={'/'} className="text-yellow-300 font-bold">CodingPractice</Link>
            <Link href={'/addData'} className="bg-green-400 p-2 rounded-md text-white">Add Data</Link>
        </nav>
    )
}

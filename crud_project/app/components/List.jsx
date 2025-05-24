import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi'


const getLists = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/lists', {
            cache: 'no-store',
        })

        if (!res.ok) {
            throw new Error("Failed to fetch lists");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading Lists", error);
    }
}

export default async function () {

    const { lists } = await getLists();

    return (
        <>
            {lists.map((t) =>
                <div className="p-4 border border-slate-800 flex justify-between gap-2 my-3">
                    <div>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className="flex gap-2 items-start">
                        <Link href={`/editData/${t._id}`}>
                            <HiPencilAlt size={25} />
                        </Link>
                        <RemoveBtn id={t._id} />
                    </div>
                </div>
            )}
        </>
    )
}

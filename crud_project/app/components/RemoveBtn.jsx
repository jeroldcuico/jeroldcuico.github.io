'use client'

import { useRouter } from "next/navigation";
import { MdOutlineDeleteForever } from "react-icons/md";
export default function RemoveBtn({ id }) {

    const router = useRouter();

    const removeList = async () => {
        const confirmed = confirm('Are you sure to delete record? 😔')

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/lists?id=${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh()
            }
        }
    }

    return (
        <button onClick={removeList} className="text-red-500">
            <MdOutlineDeleteForever size={25} />
        </button>
    )
}

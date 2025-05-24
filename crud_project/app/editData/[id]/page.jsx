import EditListForm from '@/app/components/EditListForm'
const getListbyId = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/lists/${id}`, {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error('Failed to fetch List')
        }

        return res.json();
    } catch (error) { console.log(error); }
}

export default async function editData({ params }) {
    const { id } = await params;
    const { list } = await getListbyId(id)
    const { title, description } = list;
    return (
        <EditListForm {...{ id, title, description }} />
    )
}

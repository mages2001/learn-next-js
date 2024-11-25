export default async function User({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="p-8 sm:p-20 bg-white rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold text-gray-800">User {id}</h1>
        </div>
    );
}
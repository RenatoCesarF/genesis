import { Head, Link, router } from '@inertiajs/react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Importa ícones de edição e exclusão

export default function IndexVehicle({ vehicles }) {

    const handleDelete = (id) => router.delete(`/vehicle/${id}`)

    const handleDetails = (id) => router.get(`/vehicle/${id}`)

    const handleCreate = () => router.get("/vehicle/create")

    return (
        <>
            <h1 className='title'>Gerenciamento de Veículos </h1>
            <div className="flex justify-end p-4">
                <button onClick={() => handleCreate()} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center">
                    Registrar <FaPlus className="ml-2" />
                </button>
            </div>
            <div>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-3 px-6 text-left font-bold">Modelo</th>
                            <th className="py-3 px-6 text-left font-bold">Renavam</th>
                            <th className="py-3 px-6 text-left font-bold">Quilometragem original</th>
                            <th className="py-3 px-6 text-left font-bold">Ano</th>
                            <th className="py-3 px-6 text-left font-bold">Data de Aquisição</th>
                            <th className="py-3 px-6 text-left font-bold">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.data.map((vehicle, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td onClick={() => handleDetails(vehicle.id)} className="py-3 px-6">{vehicle.model}</td>
                                <td onClick={() => handleDetails(vehicle.id)} className="py-3 px-6">{vehicle.renavam}</td>
                                <td onClick={() => handleDetails(vehicle.id)} className="py-3 px-6">{vehicle.original_quilometration}</td>
                                <td onClick={() => handleDetails(vehicle.id)} className="py-3 px-6">{vehicle.year}</td>
                                <td onClick={() => handleDetails(vehicle.id)} className="py-3 px-6">{vehicle.aquisition}</td>
                                <td className="py-3 px-6 flex justify-start items-center space-x-4">
                                    <Link href={`/vehicle/edit/${vehicle.id}`} className="text-blue-500 hover:text-blue-700">
                                        <FaEdit className="w-5 h-5" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(vehicle.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FaTrash className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <div className='py-12 px-5'>
                {vehicles.links.map((link) => (
                    link.url ? <Link
                        href={link.url}
                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${link.active ? "text-blue-500 font-vold" : ""}`}
                    /> : <span

                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="p-1 mx-1 text-slate-300"

                    ></span>
                ))}
            </div>

        </>
    );
}
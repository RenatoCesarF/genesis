import { Head, Link, router } from '@inertiajs/react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Import icons for edit, delete, and add

export default function IndexTrip({ trips }) {

    const handleDelete = (id) => router.delete(`/trip/${id}`)

    const handleDetails = (id) => router.get(`/trip/${id}`)

    const handleCreate = () => router.get("/trip/create")

    return (
        <>
            <h1 className='title'>Gerenciamento de Viagens</h1>
            <div className="flex justify-end p-4">
                <button onClick={() => handleCreate()} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center">
                    Registrar <FaPlus className="ml-2" />
                </button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr className="bg-gray-200 text-gray-800">
                            <th className="py-3 px-6 text-left font-bold">Motoristas</th>
                            <th className="py-3 px-6 text-left font-bold">Km Inicial</th>
                            <th className="py-3 px-6 text-left font-bold">Km Final</th>
                            <th className="py-3 px-6 text-left font-bold">Veículo</th>
                            <th className="py-3 px-6 text-left font-bold">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trips.data.map((trip, index) => (
                            <tr key={index}>
                                <td onClick={() => handleDetails(trip.id)}>
                                    {trip.drivers.slice(0, 3).map((driver, i) => (
                                        <span key={driver.id}>
                                            {driver.name}
                                            {i < 2 && i < trip.drivers.length - 1 ? ', ' : ''}
                                        </span>
                                    ))}
                                    {trip.drivers.length > 3 && '...'}
                                </td>
                                <td onClick={() => handleDetails(trip.id)}>{trip.initial_km}</td>
                                <td onClick={() => handleDetails(trip.id)}>{trip.final_km}</td>
                                <td onClick={() => handleDetails(trip.id)}>{trip.vehicle.model}</td>
                                <td className="flex justify-start items-center space-x-4">
                                    <Link href={`/trip/edit/${trip.id}`} className="text-blue-500 hover:text-blue-700">
                                        <FaEdit className="w-5 h-5" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(trip.id)}
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
                {trips.links.map((link) => (
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

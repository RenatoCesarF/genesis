import { Head, Link, router } from '@inertiajs/react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Import icons for edit, delete, and add

export default function IndexDriver({ drivers }) {

    const handleDelete = (id) => router.delete(`/driver/${id}`)

    const handleDetails = (id) => router.get(`/driver/${id}`)

    const handleCreate = () => router.get("/driver/create")

    return (
        <>
            <h1 className='title'>Gerenciamento de Motoristas</h1>
            <div className="flex justify-end p-4">
                <button onClick={() => handleCreate()} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center">
                    Registrar <FaPlus className="ml-2" />
                </button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr className="bg-gray-200 text-gray-800">
                            <th className="py-3 px-6 text-left font-bold">Nome</th>
                            <th className="py-3 px-6 text-left font-bold">Data de Nascimento</th>
                            <th className="py-3 px-6 text-left font-bold">CNH</th>
                            <th className="py-3 px-6 text-left font-bold">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drivers.data.map((driver, index) => (
                            <tr key={index}>
                                <td onClick={() => handleDetails(driver.id)}>{driver.name}</td>
                                <td onClick={() => handleDetails(driver.id)}>{driver.birthdate}</td>
                                <td onClick={() => handleDetails(driver.id)}>{driver.cnh}</td>
                                <td className="flex justify-start items-center space-x-4">
                                    <Link href={`/driver/edit/${driver.id}`} className="text-blue-500 hover:text-blue-700">
                                        <FaEdit className="w-5 h-5" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(driver.id)}
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
                {drivers.links.map((link) => (
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

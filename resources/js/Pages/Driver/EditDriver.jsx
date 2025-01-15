import { useForm } from "@inertiajs/react";

export default function EditDriver({ driver }) {
    const { data, setData, put, errors, processing } = useForm({
        id: driver.id,
        name: driver.name,
        birthdate: driver.birthdate,
        cnh: driver.cnh,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/driver/${driver.id}`);
    };

    return (
        <>
            <h1 className="title">Editar Motorista</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="birthdate">Data de Nascimento</label>
                        <input
                            type="date"
                            id="birthdate"
                            value={data.birthdate}
                            onChange={(e) => setData('birthdate', e.target.value)}
                        />
                        {errors.birthdate && <p className="error">{errors.birthdate}</p>}
                    </div>

                    <div>
                        <label htmlFor="cnh">CNH (Carteira Nacional de Habilitação)</label>
                        <input
                            type="text"
                            id="cnh"
                            value={data.cnh}
                            onChange={(e) => setData('cnh', e.target.value)}
                        />
                        {errors.cnh && <p className="error">{errors.cnh}</p>}
                    </div>

                    <button type="submit" className="primary-btn mt-4" disabled={processing}>
                        {processing ? 'Processando...' : 'Atualizar'}
                    </button>
                </form>
            </div>
        </>
    );
}

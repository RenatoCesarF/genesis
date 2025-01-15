import { useForm } from "@inertiajs/react";

export default function EditVehicle({ vehicle }) {
    const { data, setData, put, errors, processing } = useForm({
        id: vehicle.id,
        model: vehicle.model,
        renavam: vehicle.renavam,
        original_quilometration: vehicle.original_quilometration,
        year: vehicle.year,
        aquisition: vehicle.aquisition,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/vehicle/${vehicle.id}`);
    };

    return (
        <>
            <h1 className="title">Editar veículo</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="model">Modelo</label>
                        <input
                            type="text"
                            id="model"
                            value={data.model}
                            onChange={(e) => setData('model', e.target.value)}
                        />
                        {errors.model && <p className="error">{errors.model}</p>}
                    </div>

                    <div>
                        <label htmlFor="renavam">Renavam</label>
                        <input
                            type="text"
                            id="renavam"
                            value={data.renavam}
                            onChange={(e) => setData('renavam', e.target.value)}
                        />
                        {errors.renavam && <p className="error">{errors.renavam}</p>}
                    </div>

                    <div>
                        <label htmlFor="original_quilometration">Quilometragem Original</label>
                        <input
                            type="number"
                            id="original_quilometration"
                            value={data.original_quilometration}
                            onChange={(e) => setData('original_quilometration', e.target.value)}
                        />
                        {errors.original_quilometration && <p className="error">{errors.original_quilometration}</p>}
                    </div>

                    <div>
                        <label htmlFor="year">Ano</label>
                        <input
                            type="number"
                            id="year"
                            value={data.year}
                            onChange={(e) => setData('year', e.target.value)}
                        />
                        {errors.year && <p className="error">{errors.year}</p>}
                    </div>

                    <div>
                        <label htmlFor="aquisition">Aquisição</label>
                        <input
                            type="date"
                            id="aquisition"
                            value={data.aquisition}
                            onChange={(e) => setData('aquisition', e.target.value)}
                        />
                        {errors.aquisition && <p className="error">{errors.aquisition}</p>}
                    </div>

                    <button type="submit" className="primary-btn mt-4" disabled={processing}>
                        {processing ? 'Processando...' : 'Atualizar'}
                    </button>
                </form>
            </div>
        </>
    );
}

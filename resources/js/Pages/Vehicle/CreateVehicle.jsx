import { useForm } from "@inertiajs/react"

// import { useForm } from '@inertiajs/inertia-react';

export default function CreateVehicle() {
    const { data, setData, post, errors, processing } = useForm({
        model: "",
        renavam: "",
        original_quilometration: "",
        year: new Date().getFullYear(),
        aquisition: new Date().toISOString().split('T')[0],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/vehicle',);
    };

    return (
        <>
            <h1 className="title">Registrar veículo</h1>

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
                        {processing ? 'Processando...' : 'Registrar'}
                    </button>
                </form>
            </div>
        </>
    );
}

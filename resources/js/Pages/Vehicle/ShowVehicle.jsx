

export default function ShowVehicle({ vehicle }) {

    return (
        <>
            <h1 className='title'>Detalhes do Veículo</h1>
            <div className="w-1/2 mx-auto">
                <div className="mt-4 text-lg">
                    <strong>Modelo:</strong> {vehicle.model}
                </div>
                <div className="mt-4 text-lg">
                    <strong>Renavam:</strong> {vehicle.renavam}
                </div>
                <div className="mt-4 text-lg">
                    <strong>Quilometragem Original:</strong> {vehicle.original_quilometration} km
                </div>
                <div className="mt-4 text-lg">
                    <strong>Ano:</strong> {vehicle.year}
                </div>
                <div className="mt-4 text-lg">
                    <strong>Data de Aquisição:</strong> {vehicle.aquisition}
                </div>
            </div>
        </>
    );
}

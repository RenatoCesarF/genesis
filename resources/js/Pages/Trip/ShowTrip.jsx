import { Link, usePage } from "@inertiajs/react";

export default function ShowTrip({ trip }) {

    return (
        <>
            <h1 className="title">Detalhes da Viagem</h1>
            <div className="w-1/2 mx-auto">
                <h2 className="text-xl font-semibold mb-4">Informações da Viagem</h2>
                <p><strong>KM Inicial:</strong> {trip.initial_km}</p>
                <p><strong>KM Final:</strong> {trip.final_km}</p>
                <p><strong>Data da Viagem:</strong> {trip.trip_date}</p>

                <hr className="my-6" />
                <h2 className="text-xl font-semibold mb-4">Informações do Veículo</h2>
                <p><strong>Modelo:</strong> {trip.vehicle.model}</p>
                <p><strong>Renavam:</strong> {trip.vehicle.renavam}</p>
                <p><strong>Quilometragem Original:</strong> {trip.vehicle.original_km}</p>
                <p><strong>Ano:</strong> {trip.vehicle.year}</p>

                <hr className="my-6" />
                <h2 className="text-xl font-semibold mb-4">Informações dos Motoristas</h2>
                {trip.drivers.map((driver, index) => (
                    <div key={index} className="mb-4">
                        <p><strong>Nome:</strong> {driver.name}</p>
                        <p><strong>CNH:</strong> {driver.cnh}</p>
                        <p><strong>Data de Nascimento:</strong> {driver.birthdate}</p>
                    </div>
                ))}

            </div>
        </>
    );
}

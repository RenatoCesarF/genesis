import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Select from "react-select";

import Checkbox from "../../Components/Checkbox";

export default function EditTrip({ trip, drivers, vehicles }) {
    const [isFinished, setIsFinished] = useState(trip.final_km);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const { data, setData, put, errors, processing } = useForm({
        vehicle_id: trip.vehicle_id,
        driver_ids: trip.drivers.map(driver => driver.id),
        initial_km: trip.initial_km,
        final_km: trip.final_km,
        trip_date: trip.trip_date,
    });


    useEffect(() => {
        if (selectedVehicle) {
            const fetchVehicleData = async () => {
                const response = await fetch(`/vehicle/${selectedVehicle}/last-km`);
                const result = await response.json();
                setData('initial_km', result);
            };
            fetchVehicleData();
        }
    }, [selectedVehicle]);
    const handleDriverChange = (selectedOptions) => {
        const driverIds = selectedOptions.map(option => option.value);
        setData('driver_ids', driverIds);
    };

    const driverOptions = drivers.map(driver => ({
        value: driver.id,
        label: `${driver.name} - CNH: ${driver.cnh}`
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/trip/${trip.id}`);
    };

    return (
        <>
            <h1 className="title">Editar Viagem</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="vehicle_id">Veículo</label>
                        <select
                            id="vehicle_id"
                            value={data.vehicle_id}
                            onChange={(e) => {
                                setData('vehicle_id', e.target.value);
                                setSelectedVehicle(e.target.value);
                            }}
                        >
                            <option value="">Selecione um veículo</option>
                            {vehicles.map(vehicle => (
                                <option key={vehicle.id} value={vehicle.id}>
                                    {vehicle.model} - {vehicle.renavam}
                                </option>
                            ))}
                        </select>
                        {errors.vehicle_id && <p className="error">{errors.vehicle_id}</p>}
                    </div>

                    <div>
                        <label htmlFor="driver_ids">Motoristas</label>
                        <Select
                            isMulti
                            options={driverOptions}
                            value={driverOptions.filter(option => data.driver_ids.includes(option.value))}
                            onChange={handleDriverChange}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                        {errors.driver_ids && <p className="error">{errors.driver_ids}</p>}
                    </div>

                    <div>
                        <label htmlFor="initial_km">KM Inicial</label>
                        <input
                            type="number"
                            id="initial_km"
                            value={data.initial_km}
                            onChange={(e) => setData('initial_km', e.target.value)}
                            readOnly
                        />
                        {errors.initial_km && <p className="error">{errors.initial_km}</p>}
                    </div>

                    <div className="space-x-2 mb-3 mt-3">
                        <Checkbox checked={isFinished} onClick={() => setIsFinished(!isFinished)} />
                        <span>
                            Viagem finalizada
                        </span>
                    </div>

                    {isFinished ?
                        <div>
                            <label htmlFor="final_km">KM Final</label>
                            <input
                                type="number"
                                id="final_km"
                                value={data.final_km}
                                onChange={(e) => setData('final_km', e.target.value)}
                            />
                            {errors.final_km && <p className="error">{errors.final_km}</p>}
                        </div>
                        : <></>}

                    <div>
                        <label htmlFor="trip_date">Data da Viagem</label>
                        <input
                            type="date"
                            id="trip_date"
                            value={data.trip_date}
                            onChange={(e) => setData('trip_date', e.target.value)}
                        />
                        {errors.trip_date && <p className="error">{errors.trip_date}</p>}
                    </div>

                    <button type="submit" className="primary-btn mt-4" disabled={processing}>
                        {processing ? 'Processando...' : 'Atualizar'}
                    </button>
                </form>
            </div>
        </>
    );
}

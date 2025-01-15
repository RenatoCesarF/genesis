import { Head } from "@inertiajs/react";

export default function ShowDriver({ driver }) {
    return (
        <>
            <Head title={`Detalhes do Motorista: ${driver.name}`} />

            <h1 className="title">Detalhes do Motorista</h1>

            <div className="w-1/2 mx-auto">
                <div className="space-y-4">
                    <div>
                        <strong>Nome:</strong> {driver.name}
                    </div>

                    <div>
                        <strong>Data de Nascimento:</strong> {driver.birthdate}
                    </div>

                    <div>
                        <strong>CNH (Carteira Nacional de Habilitação):</strong> {driver.cnh}
                    </div>
                </div>
            </div>
        </>
    );
}

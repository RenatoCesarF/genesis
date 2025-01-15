import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function AppLayout({ children }) {
    const { url } = usePage();

    const isActive = (route) => {
        return url.includes(route) ? 'text-blue-500' : 'text-gray-600';
    };

    return (
        <div >
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-8">
                        <Link href="/driver" className={`text-lg font-semibold ${isActive('driver')}`}>
                            Motoristas
                        </Link>
                        <Link href="/vehicle" className={`text-lg font-semibold ${isActive('vehicle')}`}>
                            Veículos
                        </Link>
                        <Link href="/trip" className={`text-lg font-semibold ${isActive('trip')}`}>
                            Viagens
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}

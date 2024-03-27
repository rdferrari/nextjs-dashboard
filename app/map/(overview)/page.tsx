
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Map',
};

export default async function Page() {


    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Map
            </h1>

        </main>
    );
}
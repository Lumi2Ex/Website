import Link from 'next/link';

export default function DownloadsPage() {
    return (
        <div className="container mx-auto p-4">
            <header className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Downloads</h1>
                <Link href="/" className="text-blue-500 hover:underline">← Back to Home</Link>
            </header>
            
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Mega Tic-Tac-Toe</h2>
                <ul className="space-y-2">
                    <li>
                        <span className="inline-block w-20">English:</span>
                        <a
                            href="/assets/downloads/Printable Mega tic-tac-toe ENG.drawio.jpg"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li>
                        <span className="inline-block w-20">French:</span>
                        <a
                            href="/assets/downloads/Mega Morpion Imprimable FR.jpg"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li>
                        <span className="inline-block w-20">Spanish:</span>
                        <a
                            href="/assets/downloads/Mega tres en raya imprimible ES.jpg"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                </ul>
            </section>
            
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Tetra Tic-Tac-Toe</h2>
                <ul className="space-y-2">
                    <li>
                        <span className="inline-block w-20">English:</span>
                        <a
                            href="/assets/downloads/Printable Tetra Morpion ENG.jpg"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li>
                        <span className="inline-block w-20">French:</span>
                        <a
                            href="/assets/downloads/Tetra Morpion Imprimable FR.jpg"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li>
                        <span className="inline-block w-20">Spanish:</span>
                        <a
                            href="/assets/downloads/Tetra tres en reya imprimible ES.jpg"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
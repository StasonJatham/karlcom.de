import { Typography } from "@material-tailwind/react";

export default function Hero() {

    return (
        <section className="text-center">
            <div className="mx-auto max-w-screen-xl  mt-2 rounded-xl bg-indigo-800 text-white h-screen flex flex-col justify-center items-center">
                <div className="container">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                        Willkommen bei Karl Machleidt Consulting
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-center mb-8">
                        Entdecken Sie die transformative Kraft der IT mit Karlcom, Ihrem vertrauenswürdigen Partner für umfassende IT-Dienstleistungen.
                    </p>
                    <button className="bg-yellow-600 text-indigo-800 py-2 px-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
                        Kontaktieren Sie uns
                    </button>
                </div>
            </div>
        </section>
    );
}
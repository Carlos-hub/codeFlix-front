import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const Banner = () => (
    <div className=" mb-3 flex flex-col  space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black">
            <Image
                src="/oppenheimer-movie.jpg"
                alt={""}
                fill={true}
                className="object-cover object-top h-[65vh] lg:h-[95vh]" />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold lg:text-7xl">
            The Witcher
        </h1>
        <p className="text-shadow-md text-sm text-gray-300 md:max-w-lg md:text-lg lg:max-w-2xl">
            This sci-fi anthology series explores a twisted, high-tech near-future where humanity&apos;s greatest innovations and darkest instincts collide.
        </p>
        <div className="flex space-x-4">
            <a className="flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
                <PlayIcon className="h-6" />
                Watch Now</a>
            <button className="flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5"> <InformationCircleIcon className="h-6" /> More Info</button>
        </div>

    </div>
);

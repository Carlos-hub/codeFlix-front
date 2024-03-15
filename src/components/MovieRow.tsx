import Image from "next/image";

type MovieRowProps={
    sectionTitle:string;
}

const MovieCard = ({index}:any)=>(
    <div className="group h-28 min-w-[200px] relative transition duration-200 ease-in transform bg-gradient-to-t from-transparent to-black sm:h-36 hover:scale-110 hover:z-50 md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px] z-50"
        key={index}>
        <Image
            src={`/item_${index}.jpg`}
            alt={""}
            fill={true} />
     </div>
)

export const MovieRow = ({sectionTitle}:MovieRowProps) => (
    <div className="flex-col space-y-4 ">
        <div className="flex">
            <h2 className=" -ml-2 inline-flex items-center text-2xl font-bold"> {sectionTitle}</h2>
        </div>
        <div className="-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide
          ">

            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((index): any => (
                <MovieCard key={index} index={index}/>
            ))}
        </div>
    </div>
);

export const Hero=()=>{
    return(
        <div className="max-w-[1640px] mx-auto p-4">
            {/**overplay */}
            <div className="max-h-[500px] relative">
                <div className="absolute w-full h-full max-h-[500px] text-gray-200
                bg-black/40 flex flex-col justify-center ">
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Foods <span className="text-orange-500">Delivered</span></h1>
                </div>
                <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/"className="
                w-full max-h-[500px] object-cover"/>
            </div>
                
        </div>
    )
}
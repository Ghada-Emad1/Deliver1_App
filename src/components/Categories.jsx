import {categories} from '../data/data.js'
export const Categories=()=>{
    console.log(categories)
    return(
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-orange-600 text-4xl font-bold text-center">Top Rated Menu</h1>

            {/**Categoires */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                {categories.map((item,index)=>(
                    <div key={index} className="bg-gray-100 rounded-lg flex justify-between items-center p-4">
                        <h1 className="font-bold sm:text-xl">{item.name}</h1>
                        <img className="w-20" src={item.image} alt={item.name}/>
                    </div>
                ))}
            </div>

        </div>
    )
}
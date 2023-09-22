import React from 'react'

const TrafficLight = ({lightOrder=[1,2,3], heading}) => {
    // console.log("Light Order", lightOrder);
    const innerLight = ["bg-orange-200", "bg-red-700", "bg-orange-500", "bg-green-700"];
        
  return (
    <div className="flex justify-center align-center border border-green-600 sm:w-auto lg:w-1/5 p-4">
        <div className="p-3 bg-amber-300 rounded flex flex-col">
            <h2 className="text-gray-500 text-center">{heading}</h2>
            {lightOrder.map((light, index) => <div key={index} className={"p-3 my-1 rounded-full "+innerLight[light]}></div>)}
        </div>
    </div>
  )
}

export default TrafficLight 
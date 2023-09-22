"use client"
import PushButton from '@/components/PushButton'
import TrafficLight from "@/components/TrafficLight"
import useTrafficLight from "@/customHooks/useTrafficLight"

const Home = () => {
  const [currentState, duration, start, reset] = useTrafficLight();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {console.log("Traffic State", trafficState[0])} */}
      <div className="w-full relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="text-amber-300 text-2xl">Traffic Light</h1>
        <div className="flex justify-center w-full mt-20">
            <TrafficLight lightOrder={currentState[0]} heading="A" />
        </div>
        <div className="flex justify-center w-full">
            <TrafficLight lightOrder={currentState[1]} />
          <div className="sm:w-auto lg:w-1/5 p-4 flex flex-col justify-center align-center">
            <PushButton text={duration > 0 ? "Started" : "Start"} color="bg-green-600" buttonClick={start} buttonState={duration > 0}/>
            <PushButton text="Reset" color="bg-red-600" buttonClick={reset} buttonState={duration == 0}/>
          </div>
            <TrafficLight lightOrder={currentState[2]} heading="B" />
        </div>
        <div className="flex justify-center w-full">
            <TrafficLight lightOrder={currentState[3]}/>
        </div>
      </div>
      
    </main>
  )
}

export default Home;

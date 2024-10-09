import Image from "next/image";
import landing from '../../public/landing-1.png'
export default function Home() {
return (
  <>
  <div className="flex justify-center items-center mt-3">
    <h1 className="text-8xl">Canvas AI</h1>
  </div>
  <div className="flex justify-center items-center min-h-[80vh]">
    <div className="flex w-[80vw] p-4">
      <div className="w-1/2 pr-4">
        <p className="text-4xl">Chat with your documents and <br />create mindmaps effortlessly</p>
      </div>
      <div className="w-1/2 bg-cyan-300 p-2 rounded-lg">
        <Image
          src={landing}
          alt="image showcase of the chat"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
    </div>
  </div>
  </>
  
  );
}

import { Parallax } from "react-scroll-parallax";
export default function HomeHead() {
  return (
    <Parallax speed={10}>
      <div className="bg-rose-200 h-96 ">
        <h2>Welcome to the</h2>
        <h1>Bay View Motel</h1>
        <button>Book your stay</button>
      </div>
    </Parallax>
  );
}

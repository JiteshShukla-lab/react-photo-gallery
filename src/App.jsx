import Gallery from "./assets/gallery";

function App() {
  return (
    <div>
      <h1 className="text-5xl text-slate-900 font-bold text-center mt-16">
        Photo Gallery
      </h1>

      <p className="text-md text-slate-700 text-center mt-4">Explore a curated collection of stunning images from photographers around the world.<br/> <span>Find inspiration and mark your favorite moments.</span></p>

      <Gallery />
    </div>
  );
}

export default App;
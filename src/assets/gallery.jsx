import {  useState, useMemo, useCallback} from "react";
import spinner from "./spinner.gif"
import useFetchPhotos from "./useFetchPhotos";


export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  
  
  const filteredPhotos = useMemo(() => {
    return photos.filter((p) =>
      p.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <p className="text-center mt-52"><img className="m-auto w-16 h-16" src={spinner} alt="loader"/>Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4 mt-10 rounded-md max-w-7xl m-auto">

    <div className="max-w-3xl m-auto mb-10">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="border-2 p-2 mb-4 w-full rounded-3xl"
        onChange={handleSearch}
      />
    </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="border hover:scale-105 transition-all rounded p-2">

            <img src={photo.download_url} alt="" className="w-full h-52 object-cover"/>

            <div className="flex justify-between mt-2">
              <p>{photo.author}</p>

              <button className="bg-slate-100 rounded-full" >
                
<svg width="40px" height="40px" fill="red" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>

              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
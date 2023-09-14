import "./App.css";
import { PhotoCard } from "./components/PhotoCard/PhotoCard";
import { useImage } from "./hooks/image.hook";

function App() {
  const { images, loading } = useImage();
  return (
    <div className="flex justify-center flex-wrap gap-4 my-4">
      {loading &&
        images.map((image) => {
          return <PhotoCard key={image.id} {...image} />;
        })}
    </div>
  );
}

export default App;

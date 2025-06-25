import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItems } from './GifItems';

export const GifGrid = ({ category }) => {
 const { images, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <h2>Loading...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItems key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
import PropTypes from 'prop-types'; 

export const GifItems = ({ title, url, id }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
            <p hidden>{id}</p>
        </div>
    );
}

GifItems.propTypes = {
    title: PropTypes.string.isRequired,   
    url: PropTypes.string.isRequired,     
    id: PropTypes.string.isRequired       
};

export const getGifs = async (category) => {
    try {
        const apiKey = "csRqndJjr0gAA6vxkmpvNeBYUk47k8ZS";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const { data } = await response.json();

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        return gifs;
    } catch (error) {
        console.error('Error fetching gifs:', error);
        return [];
    }
}
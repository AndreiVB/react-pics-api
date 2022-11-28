import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
			headers: {
				Authorization: "Client-ID uF_4aAE2gz_VKtzgunXOCaGY-W_L2tKOqTHvTw6O-IE",
			},
			params: {
                query: term,
            },
		});
    return response.data.results;
};

export default searchImages;
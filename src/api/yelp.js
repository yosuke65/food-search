import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7pN9kS5i90NEoVR5jvk2C_C2Hmn74fst1avdrdqRu4ehYyAKytTw6CdZ6gbNujKwH2xKqATCRF93vMMKZBJ3wwvwIerKoqaTVdbgbyN7Gh331KCVB6FS-umtBYdhYnYx'
    }
});
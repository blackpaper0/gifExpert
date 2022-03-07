export const  getGif = async (category, limit) => {
    let url = "https://api.giphy.com/v1/gifs/search?api_key=1NhD1LQHqJ28zy6fM1LiwQG3UpuvUEgt"
    if (category) url += "&q=" + category;
    if (limit) url += "&limit=" + limit;
    

    const res = await fetch(encodeURI(url))
    const { data } = await res.json();

    return data;
}
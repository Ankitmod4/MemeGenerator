import React, { useEffect, useState } from 'react';
import "./Meme.css";

const Meme = () => {
    let [gif, setGif] = useState('');
    let [loading, setLoading] = useState(false);
    let API_KEY = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";

    const handlesubmit = async () => {
        setLoading(true);
        let URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        let api = await fetch(URL);
        let app = await api.json();
        setGif(app.data.images.downsized_large.url);
        setLoading(false);
    }

    useEffect(() => {
        handlesubmit();
    }, []);

    let getapi = async () => {
        handlesubmit();
    }

    return (
        <div className='container'>
            <div className='heading'>
                <h1>GIF</h1>
            </div>
            <div className='img'>
                {loading ? <p>Loading...</p> : <img src={gif} alt="Random GIF" />}
            </div>
            <div className='button'>
                <button onClick={getapi} disabled={loading}>
                    {loading ? "Loading..." : "GENERATE"}
                </button>
            </div>
        </div>
    )
}

export default Meme;

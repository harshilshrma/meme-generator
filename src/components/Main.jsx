import { useState, useEffect } from "react"

export default function Main() {
    const [memeData, setMemeData] = useState([]);
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    // to fetch meme images
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))
    }, [])

    function handleChange(event) {
        const { name, value } = event.currentTarget;
        setMeme((prevMeme) => {
            return { ...prevMeme, [name]: value }
        })
    }

    function handleButtonClick() {
        const randomId = Math.floor(Math.random() * memeData.length);
        setMeme((prevMeme) => {
            return {...prevMeme, imageUrl: memeData[randomId].url}
        })
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleButtonClick}>Get a new meme image</button>
            </div>

            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
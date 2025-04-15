import { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios";
const DataContext = createContext();

export const useData = () => useContext(DataContext);


export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        topAlbumData: [],
        newAlbumData: [],
        allSongs: [],
        allGenres: []
    });


    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const [topAlbum, newAlbum, allSong, allGenre] =
                    await Promise.allSettled([
                        axios.get("https://qtify-backend-labs.crio.do/albums/top"),
                        axios.get("https://qtify-backend-labs.crio.do/albums/new"),
                        axios.get("https://qtify-backend-labs.crio.do/songs"),
                        axios.get("https://qtify-backend-labs.crio.do/genres"),
                    ]);
                setData({
                    topAlbumData: topAlbum.status === 'fulfilled' ? topAlbum.value.data : [],
                    newAlbumData: newAlbum.status === 'fulfilled' ? newAlbum.value.data : [],
                    allSongs: allSong.status === 'fulfilled' ? allSong.value.data : [],
                    allGenres: allGenre.status === 'fulfilled' ? allGenre.value.data : [],
                })

            } catch (error) {
                console.error("Something went wrong...Please try after sometime");
            }
        };
        fetchAlbum();
    }, []);

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
}
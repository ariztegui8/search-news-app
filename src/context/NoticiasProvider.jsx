import axios from "axios";
import { createContext, useEffect, useState} from "react"

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);

    useEffect(()=>{
        const consultarAPI = async () =>{
            const key = '0c3354abf8d84215800f7752ea4a3e43';
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&pageSize=100&apiKey=${key}`;
            const {data} = await axios(url)
            setNoticias(data.articles);
        }
        consultarAPI()
    }, [categoria])

    const handleChangeCategoria = e =>{
        setCategoria(e.target.value)
    }

  return (
    <NoticiasContext.Provider
        value={{
            categoria,
            handleChangeCategoria,
            noticias
        }}
    >
        {children}
    </NoticiasContext.Provider>
  )
}

export{
    NoticiasProvider
}

export default NoticiasContext
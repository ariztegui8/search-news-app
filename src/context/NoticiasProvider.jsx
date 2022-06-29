import axios from "axios";
import { createContext, useEffect, useState} from "react"

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(()=>{
        const consultarAPI = async () =>{
            const key = '0c3354abf8d84215800f7752ea4a3e43';
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${key}`;
            const {data} = await axios(url)
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
            setPagina(1)

        }
        consultarAPI()
    }, [categoria])

    useEffect(()=>{
        const consultarAPI = async () =>{
            const key = '0c3354abf8d84215800f7752ea4a3e43';
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${key}`;
            const {data} = await axios(url)
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)

        }
        consultarAPI()
    }, [pagina])

    const handleChangeCategoria = e =>{
        setCategoria(e.target.value)
    }

    const handlePaginator = (e, valor) =>{
        setPagina(valor)
    }

  return (
    <NoticiasContext.Provider
        value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalNoticias,
            handlePaginator,
            pagina,
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
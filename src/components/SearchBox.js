import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchBox() {
    const [querry, setQuerry] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${querry}`)
        setQuerry("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Insira um filme para pesquisar"
                    onChange={(e) => setQuerry(e.target.value)}
                    value={querry}
                />
                {querry &&
                    <button type="submit">Pesquisar</button>
                }
            </form>
        </>
    )
}

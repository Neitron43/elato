import { useState } from "react"

export default function SelectLang({className}) {
    const [lang, setLang] = useState('Ru')
    return (
        <form className={className + " " + "language__form"}>
            <select className="language__select" onChange={() => {
                setLang(event.target.value)
            }}>
                <option value="ru">Ru</option>
                <option value="eng">Eng</option>
            </select>
        </form>
    )
}
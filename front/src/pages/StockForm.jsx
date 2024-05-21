import { useState } from "react"
import { stockApi, userApi } from "../service/api"

const StockForm = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState(
        {
            symbol: '',
            companyName: '',
            sector: ''
        }
    )

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        setIsLoading(true)
        event.preventDefault()

        try {
            const response = await stockApi.post('', formData)
            console.log('Formulario enviado com sucesso', response.data)

        } catch (error) {
            console.error('Erro ao enviar formulario:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Simbolo" name="symbol" onChange={handleChange} required />
                <input type="text" placeholder="Nome da empresa" name="companyName" onChange={handleChange} required />
                <input type="text" placeholder="Area" name="sector" onChange={handleChange} required />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
            <a href="/">Voltar</a>
        </div>
    )

}

export default StockForm
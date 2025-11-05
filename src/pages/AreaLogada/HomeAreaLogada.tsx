import './HomeAreaLogada.css';
import React, { useState } from 'react';

interface Form {
street: string;
number: string;
complement: string;
district: string;
city: string;
state: string;
country: string;
zipCode: string;
neighborhood: string;
observedShares: string;
}

const Cadastro: React.FC = () => {
const [form, setForm] = useState<Form>({
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    neighborhood: '',
    observedShares: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // TS precisa saber que name é uma key do Form
    setForm(prev => ({ ...prev, [name]: value } as Pick<Form, keyof Form> & Form));
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do cadastro:', form);
    // enviar para API aqui
};

return (
    <div className="cadastro-container">
    <h2>Cadastro de Endereço</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Rua</label>
        <input type="text" name="street" value={form.street} onChange={handleChange} required />
        </div>

        <div className="form-row">
        <div className="form-group half">
            <label>Número</label>
            <input type="text" name="number" value={form.number} onChange={handleChange} required />
        </div>

        <div className="form-group half">
            <label>Complemento</label>
            <input type="text" name="complement" value={form.complement} onChange={handleChange} />
        </div>
        </div>

        <div className="form-group">
        <label>Bairro</label>
        <input type="text" name="district" value={form.district} onChange={handleChange} required />
        </div>

        <div className="form-row">
        <div className="form-group half">
            <label>Cidade</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} required />
        </div>

        <div className="form-group half">
            <label>Estado</label>
            <input type="text" name="state" value={form.state} onChange={handleChange} required />
        </div>
        </div>

        <div className="form-group">
        <label>País</label>
        <input type="text" name="country" value={form.country} onChange={handleChange} required />
        </div>

        <div className="form-group">
        <label>CEP</label>
        <input type="text" name="zipCode" value={form.zipCode} onChange={handleChange} required />
        </div>

        <div className="form-group">
        <label>Neighborhood</label>
        <input type="text" name="neighborhood" value={form.neighborhood} onChange={handleChange} />
        </div>

        <div className="form-group">
        <label>Observações</label>
        <textarea name="observedShares" value={form.observedShares} onChange={handleChange} rows={3}></textarea>
        </div>

        <button type="submit">Cadastrar</button>
    </form>
    </div>
);
};

export default Cadastro;

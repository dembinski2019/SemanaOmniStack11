import React from 'react'
import './style.css'
import logoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


export default function Profile(){
    return (
        <div className='new-incident-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o cas detalhadamente para encontrar um héroi para resolver isso.</p>
                    <Link className='back-link' to='/profile'> <FiArrowLeft size={16} color='#e02041'  />
                Voltar para home</Link>
                </section>
               
                <form>
                    <input placeholder='Tirulo do caso'/>
                    <textarea placeholder='Descrição'/>
                    <input placeholder='valor em reais'/>
                   
                    
                    <button className='button' type='submit'>Cadastar</button>
                </form>
            </div>

        </div>

    )

}

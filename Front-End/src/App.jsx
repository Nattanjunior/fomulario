import { useState } from 'react'
import icon from '../public/icons.png'
import './App.scss'
import axios from 'axios'

function App() {
  const [etapa, setEtapa] = useState(1)
  const [name, setName] = useState('')
  const [tel, setTel]= useState('')
  const [email, setEmail] = useState('')
  const [NameEmpresa, setNameEmpresa] = useState('')
  const [NumberFunc, setNumberFunc] = useState('')
  const [FaleNegocio, setFaleNegocio] = useState('')
  const [ObjetivoFinal, setObjetivoFinal] = useState('')
  const [user, setUser] = useState(null)

  const handlerResponse = async (e)=>{
    e.preventDefault();
    const response = await axios.post('https://formulario-rho-two.vercel.app/interface',
        JSON.stringify({name,tel,email,NameEmpresa,NumberFunc,FaleNegocio,ObjetivoFinal}),
        {
          headers: {'Content-Type':'application/json'}
        }
          
    )
    console.log(response.data)
    setUser(response.data)
  }
  

  const AvançarEtapa = ()=>{ 
    if(etapa === 1){
    if(name === '' || tel === '' || email === ''){
      alert('Preencha seus dados por favor!!')
    }else{
      setEtapa(etapa + 1)
    }
  }
    if(etapa === 2){
      if( NameEmpresa === '' || NumberFunc === '' || FaleNegocio === ''){
        alert('Preencha seus dados por favor!!')
      }else{
        setEtapa(etapa + 1)
      }
    }

    if(etapa === 3){
      if(ObjetivoDoProjeto === ''){
        alert('Preencha seus dados por favor!!')
      }
    }
 
    
  }
  const voltarEtapa = ()=>{
    setEtapa(etapa - 1)
  }


  return (
    <>
      <div className='container-fluid'>
      {user == null ? (
        
        <div className='form'>
           <div className='nav-bar'>
            <div> <span className='one' id='one'>1</span> <span>Contato</span></div>
            <img src={icon} alt="" />
            <div> <span className='two'>2</span> <span className='text2'>Empresa</span></div>
            <img src={icon} alt="" />
            <div> <span className='three'>3</span> <span className='text3'>Projeto</span></div>
          </div>

           <hr />


          <div className='formulario'>
            <form action="" >

            <div className={`etapa ${etapa === 1? 'visivel' : ''}`} id='etapa1'>
              <div className='input1'>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder='Como prefere ser chamado' required onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className='input2'>
                <label htmlFor="tel">Telefone</label>
                <input type="text" name="tel" id="tel" placeholder='Digite seu número de WhatsApp' required onChange={(e)=> setTel(e.target.value)}/>
              </div>
              <div className='input3'>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder='Digite seu e-mail'required onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <button className='btn btn-primary' type='button' onClick={AvançarEtapa}> Contiuar</button>
            </div>

            <div className={`etapa ${etapa === 2? 'visivel' : ''}`} id='etapa2'>
              <div className='input1'>
                <label htmlFor="NameEmpresa">Nome da empresa</label>
                <input type="text" name="NameEmpresa" id="NameEmpresa" placeholder='Qual o nome da empresa' required onChange={(e)=> setNameEmpresa(e.target.value)}/>
              </div>
              <div className='input2' required>
                <label htmlFor="NumberFun">Número de funcionários</label>
                <input type="text" name="NumberFun" id="NumberFun" placeholder='Digite o número de colaboradores' required onChange={(e)=> setNumberFunc(e.target.value)}/>
              </div>
              <div className='input3' required>
                <label htmlFor="FaleNegocio">Sobre seu negócio </label>
               <input type="text" name="FaleNegocio" id="FaleNegocio" placeholder='Fale um pouco sobre seus produtos ou serviços' required onChange={(e)=>setFaleNegocio(e.target.value)}/>
              </div>
              <button className='btn btn-outline-primary' type='button' onClick={voltarEtapa}>Voltar</button>
              <button className='btn btn-primary' type='button' onClick={AvançarEtapa}>Contiuar</button>
            </div>

            <div className={`etapa ${etapa === 3? 'visivel' : ''}`} id='etapa3'>
              <div className='input1'>
                <label htmlFor="ObjetivoFinal">Objetivos do projeto</label>
                <input type="text" name="ObjetivoFinal" id="ObjetivoFinal" required onChange={(e)=> setObjetivoFinal(e.target.value)} placeholder='Descreva quais os objetivos desse projeto'/>
                <button className='btn btn-outline-primary' type='button' onClick={voltarEtapa}>Voltar</button>
              <button className='btn btn-primary' type='submit' onClick={handlerResponse}>Enviar Proposta</button>
              </div>
            </div>


            </form>
          </div> 
          </div>

      ) : (
        <div className='form login'> 
        <h2>Olá {user.name}</h2>

        <div className='info'>Suas Infomações:</div>

        <div className='formulario'>
          <p>Telefone: <span>{user.tel}</span></p>
          <p>E-mail:<span> {user.email}</span></p>
          <p>Nome da sua Empresa: <span>{user.nameEmpresa}</span></p>
          <p>Número de funcionários: <span>{user.NumberFun}</span></p>
          <p>Sobre seu Negócio: <span>{user.FaleNegocio}</span></p>
          <p>Objetivo da sua Empresa: <span>{user.ObjetivoFinal}</span></p>
        </div>
        
        </div>
      )}
      </div>
     
    </>
  )
}

export default App

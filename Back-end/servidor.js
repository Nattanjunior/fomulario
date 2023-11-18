const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('hello wolrd');
})

app.post('/interface',(req,res)=>{
    const {name,tel,email,NameEmpresa, NumberFunc, FaleNegocio, ObjetivoFinal } = req.body

    console.log(name)
    res.json({
        "name":`${name}`,
        "tel": `${tel}`,
        "email":`${email}`,
        "nameEmpresa": `${NameEmpresa}`,
        "NumberFun": `${NumberFunc}`,
        "FaleNegocio": `${FaleNegocio}`,
        "ObjetivoFinal": `${ObjetivoFinal}`
    })
})



app.listen(port,()=>{
    console.log(`servidor escutando na porta:${port}`)
})

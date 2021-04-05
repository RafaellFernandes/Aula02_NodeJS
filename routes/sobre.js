const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('sobre',{conteudo:'Sobre a vida de hellen'});
})

module.exports=router;
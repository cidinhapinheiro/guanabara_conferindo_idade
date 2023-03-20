function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano =  document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if(fano.value.length == 0 || Number(fano.value > ano)){
    window.alert("[ERRO] Verifique os dados e digite novamente")
   }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value) 
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = 'Homem'
        document.body.style.background = '#515154'
        if(idade >= 0 && idade <10){
            img.setAttribute('src','foto.menino.png')
           }else if(idade < 21){
            img.setAttribute('src','foto.adolescente_m.png')
           }else if(idade < 60){
            img.setAttribute('src','foto.homem.png')
           }else{
            img.setAttribute('src','foto.idoso.png')
           }
    }else if (fsex[1].checked){
        genero = 'Mulher'
        document.body.style.background = '#FFCBD9'
        if(idade >= 0 && idade <10){
            img.setAttribute('src','foto.menina.png') 
        }else if(idade < 21){
            img.setAttribute('src','foto.adolescente_f.png')
        }else if(idade < 60){
            img.setAttribute('src','foto.mulher.png')
        }else{
            img.setAttribute('src','foto.senhora.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
   }

}
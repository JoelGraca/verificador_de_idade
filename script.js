function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("textano");
    var resp = document.getElementById('res');

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radiosex'); // paga através do nome
        var idade = ano - Number(fano.value);
        var genero = ''; // para selecionar se é masculino ou feminino
        var img = document.createElement('img'); // cria um elemento dinamicamente
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){ // chegar se é masculino
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                // Um menino
                img.setAttribute('src', "./img/Menino.jpg");
            }else if(idade >= 10 && idade < 21){
                // Um Rapaz
                img.setAttribute('src', "./img/Rapaz.jpg");
            }else if(idade >= 21 && idade < 50){
                // Um Homem jovem
                img.setAttribute('src', "./img/Homem-Jovem.jpg");
            }else{
                // Um Idoso
                img.setAttribute('src', "./img/Idoso.jpg");
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                // Uma menina
                img.setAttribute('src', "./img/Menina.jpg");
            }else if(idade >= 10 && idade < 21){
                // Uma moça
                img.setAttribute('src', "./img/Moça.jpg");
            }else if(idade >= 21 && idade < 50){
                // Uma Mulher jovem
                img.setAttribute('src', "./img/Mulher-Jovem.jpg");
            }else{
                // Uma Idosa
                img.setAttribute('src', "./img/Idosa.jpg");
            }
        }
        resp.style.textAlign = 'center';
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        resp.appendChild(img); // adiciona um elemento filho
    }
}
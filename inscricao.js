function retornaNome() {
    var nome, text, email, text2;

    email = document.getElementById("email").value;
    nome = document.getElementById("nome").value;
    
    text = "Obrigada por sua inscrição, " + nome + "! Nos vemos em breve!";
    text2 = "Enviaremos as instruções para o email: " + email;
    document.getElementById("final").innerHTML = text;
    document.getElementById("final2").innerHTML = text2;
  }

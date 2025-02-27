let linguagemDesejada =prompt('Qual linguagem de programação você deseja aprender? React ou Vue?');
alert('Deseja continuar se especializando?');
//função para perguntar quais tecnologias de programação o usuário deseja aprender
function perguntarTecnologias() {
    let tecnologias = [];
    let continuar = true;
 //função para continuar perguntando até que o usuário complete todas as linguagens que deseja aprender   
    while (continuar) {
        let tecnologia = prompt("Qual tecnologia você gostaria de aprender?");
        if (tecnologia) {
            tecnologias.push(tecnologia);
            alert(comentarTecnologia(tecnologia));
        }
        
        continuar = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
    }
    
    alert("Ótimo! Aqui estão as tecnologias que você deseja aprender: " + tecnologias.join(", "));
}
//função para comentar sobre as tecnologias de programação caso a tecnologia não esteja na lista de comentários usar else para criar comentario generico
function comentarTecnologia(tecnologia) {
    let comentarios = {
        "JavaScript": "JavaScript é essencial para desenvolvimento web e permite criar interatividade.",
        "Python": "Python é muito versátil e amplamente usado em ciência de dados e IA.",
        "Java": "Java é uma linguagem robusta usada em aplicações empresariais e mobile.",
        "C++": "C++ é poderoso para desenvolvimento de sistemas de alto desempenho.",
        "HTML": "HTML é a base da estrutura de qualquer página web.",
        "CSS": "CSS dá estilo e vida às páginas web."
    };
    
    return comentarios[tecnologia] || `Muito interessante! ${tecnologia} é uma ótima tecnologia para aprender.`;
}

perguntarTecnologias();

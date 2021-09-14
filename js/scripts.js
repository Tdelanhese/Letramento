var feeds = [
  {
    msg: "“Mais uma vez quero deixar aqui o registro da minha gratidão! De todos os cursos que fiz, esse realmente estou conseguindo absorver de fato,vendo a empolgação em mim da nitidez do resultado de cada aula. Digo que esse curso está fazendo tamanha a diferença em minha vida. Porque ele está de fato me pegando pela mão e fazendo com que eu deixe o analfabetismo funcional e começar a compreender melhor aquilo que me deparo! Poxa Amanda, Deus realmente foi muito generoso comigo em me dar a oportunidade de conhecer você e poder estar aqui tendo essas aulas contigo! Estou aqui estudando a quarta aula, e estou escrevendo o texto a mão, escrevo como está na página tanto em latim como embaixo escrevo em português. E na hora que eu vou escrevendo em português, vou me lembrando da palavra que vem logo em seguinte! Então deixo aqui minha total admiração pelo seu trabalho e gratidão! Mais do que aprendendo, deixando a ignorância de lado, seu curso está ajudando a deixar pessoas melhores, como pessoa!”",
    img: "fgil.png",
    author: "Gil Contiero",
    column: 1
  },
  {
    msg: "“Amanda, gostaria de deixar registrado meu agradecimento por este trabalho. Acabei de concluir o curso, e estou muito feliz por ter essa oportunidade, mesmo que tardiamente, de aprender a nossa Língua com materiais que além de nos ensinarem gramática, nos levam a contemplar algo muito maior. Se Deus me permitir, poderei transmitir isso aos meus filhos. Já estou de olho no próximo módulo. Deus abençoe!”",
    img: "avatar.png",
    author: "Tatiane Vieira Machado",
    column: 1
  },
  {
    msg: "“Após ouvir sua fala profe Amanda, vou me despir de tudo que tenho como bagagem nesses meus 46 anos de vida. Estou me propondo a mergulhar nesse oceano profundo e me redescobrir como ser humano e como professora. Sei que será uma jornada interessante e significativa. Quero sair dela completamente transformada. Grata.”",
    img: "five.png",
    author: "Ive Moch",
    column: 2
  },
  {
    msg: "“Amanda, suas aulas tem sido como faróis a me orientar na educação das minhas crianças e, quando tudo fica difícil, atualmente me acalmo porque penso que tenho você para me auxiliar. Creio que nunca te contei que passei no vestibular de Medicina numa Universidade Federal com nota máxima em redacão. Tempos depois, a maternidade me fez descobrir que não sabia nem ler verdadeiramente. Sou filha e neta de professores antigos, exigentes, amantes da boa literatura, admiráveis em suas competências e sonhava encontrar profissionais como eles, porém nem achava que existiam mais professores assim. Deus, em Sua infinita perfeição, não à toa que te fez Stella, uma estrela guia na minha vida e de muitas outras mães! Parabéns pelo lindo trabalho! Obrigada por tudo (mesmo).”",
    img: "fnidia.png",
    author: "Nídia Daher",
    emp: "Médica",
    column: 2
  },
  {
    msg: "“Justo quando me deparei com minhas limitações para avançar com os estudos de linguagem de minha filha mais velha, providencialmente consegui uma vaga na turma da Amanda e aprendi em pouco mais de dois meses o que não havia aprendido em inúmeras aulas de português na escola. Ela ama o que ensina e tem muito domínio do nosso idioma. Nas aulas ia conduzindo cada aluno com grande paciência e benevolência, ajudando cada um de nós a assimilar o conteúdo. Ela fez o trabalho árduo de autoeducação e agora segura-nos pela mão, facilitando enormemente o caminho.”",
    img: "fmariana.png",
    author: "Mariana Pazzini",
    emp: "Mãe Homeschooler",
    column: 3
  },
  {
    msg: 'Minha vida toda me achei incapaz, "burra", de entender o que eu lia...na escola e na faculdade foi assim, estudava, participava e não entendia, não memorizava nada... e hoje aos 40 anos vendo essa primeira introdução do curso da professora Amanda eu fiquei emocionada ao ver luz na escuridão... obrigada.”',
    img: "avatar.png",
    author: "Indianara V.",
    column: 3
  },
];

// $(`#feedbacks .grid`).empty();
feeds.forEach(function (v) {
    
    if (v.emp) {
        $(`#feedbacks .grid .column-${v.column}`).append(`
            <div class="feed">
                <p>${v.msg}</p>
                <div class="author">
                    <img src="./imgs/${v.img}" alt="">
                    <div class="infos">
                    <p class="name">${v.author}</p>
                    <p class="emp">${v.emp}</p>
                    </div>
                </div>
            </div>
        `);
    } else {
    $(`#feedbacks .grid .column-${v.column}`).append(`
        <div class="feed">
            <p>${v.msg}</p>
            <div class="author">
            <img src="./imgs/${v.img}" alt="">
            <div class="infos">
                <p class="name">${v.author}</p>
            </div>
            </div>
        </div>
    `);
    }
});

var feeds = [
  {
    msg: "“Mais uma vez quero deixar aqui o registro da minha gratidão! De todos os cursos que fiz, esse realmente estou conseguindo absorver de fato,vendo a empolgação em mim da nitidez do resultado de cada aula. Digo que esse curso está fazendo tamanha a diferença em minha vida. Porque ele está de fato me pegando pela mão e fazendo com que eu deixe o analfabetismo funcional e começar a compreender melhor aquilo que me deparo! Poxa Amanda, Deus realmente foi muito generoso comigo em me dar a oportunidade de conhecer você e poder estar aqui tendo essas aulas contigo! Estou aqui estudando a quarta aula, e estou escrevendo o texto a mão, escrevo como está na página tanto em latim como embaixo escrevo em português. E na hora que eu vou escrevendo em português, vou me lembrando da palavra que vem logo em seguinte! Então deixo aqui minha total admiração pelo seu trabalho e gratidão! Mais do que aprendendo, deixando a ignorância de lado, seu curso está ajudando a deixar pessoas melhores, como pessoa!”",
    img: "fgil.png",
    author: "Gil Contiero",
    column: 1,
  },
  {
    msg: "“Amanda, gostaria de deixar registrado meu agradecimento por este trabalho. Acabei de concluir o curso, e estou muito feliz por ter essa oportunidade, mesmo que tardiamente, de aprender a nossa Língua com materiais que além de nos ensinarem gramática, nos levam a contemplar algo muito maior. Se Deus me permitir, poderei transmitir isso aos meus filhos. Já estou de olho no próximo módulo. Deus abençoe!”",
    img: "avatar.png",
    author: "Tatiane Vieira Machado",
    column: 1,
  },
  {
    msg: "“Após ouvir sua fala profe Amanda, vou me despir de tudo que tenho como bagagem nesses meus 46 anos de vida. Estou me propondo a mergulhar nesse oceano profundo e me redescobrir como ser humano e como professora. Sei que será uma jornada interessante e significativa. Quero sair dela completamente transformada. Grata.”",
    img: "five.png",
    author: "Ive Moch",
    column: 2,
  },
  {
    msg: "“Amanda, suas aulas tem sido como faróis a me orientar na educação das minhas crianças e, quando tudo fica difícil, atualmente me acalmo porque penso que tenho você para me auxiliar. Creio que nunca te contei que passei no vestibular de Medicina numa Universidade Federal com nota máxima em redacão. Tempos depois, a maternidade me fez descobrir que não sabia nem ler verdadeiramente. Sou filha e neta de professores antigos, exigentes, amantes da boa literatura, admiráveis em suas competências e sonhava encontrar profissionais como eles, porém nem achava que existiam mais professores assim. Deus, em Sua infinita perfeição, não à toa que te fez Stella, uma estrela guia na minha vida e de muitas outras mães! Parabéns pelo lindo trabalho! Obrigada por tudo (mesmo).”",
    img: "fnidia.png",
    author: "Nídia Daher",
    emp: "Médica",
    column: 2,
  },
  {
    msg: "“Justo quando me deparei com minhas limitações para avançar com os estudos de linguagem de minha filha mais velha, providencialmente consegui uma vaga na turma da Amanda e aprendi em pouco mais de dois meses o que não havia aprendido em inúmeras aulas de português na escola. Ela ama o que ensina e tem muito domínio do nosso idioma. Nas aulas ia conduzindo cada aluno com grande paciência e benevolência, ajudando cada um de nós a assimilar o conteúdo. Ela fez o trabalho árduo de autoeducação e agora segura-nos pela mão, facilitando enormemente o caminho.”",
    img: "fmariana.png",
    author: "Mariana Pazzini",
    emp: "Mãe Homeschooler",
    column: 3,
  },
  {
    msg: 'Minha vida toda me achei incapaz, "burra", de entender o que eu lia...na escola e na faculdade foi assim, estudava, participava e não entendia, não memorizava nada... e hoje aos 40 anos vendo essa primeira introdução do curso da professora Amanda eu fiquei emocionada ao ver luz na escuridão... obrigada.”',
    img: "avatar.png",
    author: "Indianara V.",
    column: 3,
  },
];

feeds.forEach(function (v) {
  $(`#feedbacks .grid .column-${v.column}`).append(`
      <div class="feed">
          <p>${v.msg}</p>
          <div class="author">
              <img src="./imgs/${v.img}" alt="">
              <div class="infos">
              <p class="name">${v.author}</p>
              ${v.emp ? `<p class="emp">${v.emp}</p>` : ""}
              </div>
          </div>
      </div>
  `);
});

var aula = {
  letramentoUm: {
    aulas: [
      {
        aula: "Aula 1:",
        desc: "Introdução ao Curso Prático de Letramento - PBI",
        img: "imgs/1.png",
      },
      {
        aula: "Aula 2:",
        desc: "Leitura em voz alta e memorização",
        img: "imgs/2.png",
      },
      {
        aula: "Aula 3:",
        desc: "Interpretação do Texto de Raquel e Jacó",
        img: "imgs/3.png",
      },
      {
        aula: "Aula 4:",
        desc: "Leitura em latim do texto de Raquel e Jacó",
        img: "imgs/4.png",
      },
      {
        aula: "Aula 5:",
        desc: "Etimologia das palavras do texto de Raquel e Jacó",
        img: "imgs/5.png",
      },
      {
        aula: "Aula 6:",
        desc: "Leitura de Os Companheiros de Ulisses",
        img: "imgs/6.png",
      },
      {
        aula: "Aula 7:",
        desc: "Interpretação de Os Companheiros de Ulisses",
        img: "imgs/7.png",
      },
      {
        aula: "Aula 8:",
        desc: "As rãs pedem um rei",
        img: "imgs/8.png",
      },
      {
        aula: "Aula 9:",
        desc: "Interpretação e correção de exercícios",
        img: "imgs/9.png",
      },
      {
        aula: "Aula 10:",
        desc: "Leitura e Interpretação de A Prece, José de Alencar",
        img: "imgs/10.png",
      },
      {
        aula: "Extra:",
        desc: "Aula tira-dúvidas (gravada)",
        img: "imgs/Extra.png",
        extra: true,
      },
    ],

    notebook: "imgs/not1.png",
  },

  letramentoDois: {
    aulas: [
      {
        aula: "Aula 1:",
        desc: "Introdução ao Curso Prático de Letramento - PBC",
        img: "imgs/1.png",
      },
      {
        aula: "Aula 2:",
        desc: "Primeira aula de versificação",
        img: "imgs/2.png",
      },
      {
        aula: "Aula 3:",
        desc: "Correção dos exercícios de versificação",
        img: "imgs/3.png",
      },
      {
        aula: "Aula 4:",
        desc: "1ª aula de morfologia - percebendo as formas das palavras",
        img: "imgs/4.png",
      },
      {
        aula: "Aula 5:",
        desc: "2ª aula de morfologia - classificando as palavras",
        img: "imgs/5.png",
      },
      {
        aula: "Aula 6:",
        desc: "Aula de correção de exercícios - soneto de Camões",
        img: "imgs/6.png",
      },
      {
        aula: "Aula 7:",
        desc: "Aula de interpretação de poesia - soneto de Camões",
        img: "imgs/7.png",
      },
      {
        aula: "Aula 8:",
        desc: "Substantivos, adjetivos, pronomes e numerais",
        img: "imgs/8.png",
      },
      {
        aula: "Aula 9:",
        desc: "Verbos e advérbios",
        img: "imgs/9.png",
      },
      {
        aula: "Aula 10:",
        desc: "Preposições e conjunções",
        img: "imgs/10.png",
      },
      {
        aula: "Aula 11:",
        desc: "Morfologia do latim: como funciona",
        img: "imgs/11.png",
      },
      {
        aula: "Aula 12:",
        desc: "Tradução de Magnificat, usando a morfologia do latim",
        img: "imgs/12.png",
      },
    ],

    notebook: "imgs/not2.png",
  },

  createAulas(pAulas) {
    var target = $(`#aulas .list-aulas .list`);

    target.empty();
    pAulas.forEach(function (v) {
      target.append(`
        <div class="item ${v.extra ? "extra" : ""}">
          <img src="${v.img}" alt="">
          <p><span>${v.aula}</span> ${v.desc}</p>
        </div>
      `);
    });
  },
};

aula.createAulas(aula["letramentoUm"].aulas);
$("#aulas .aulas .notebook .not").attr(
  "src",
  `${aula["letramentoUm"].notebook}`
);

$("#aulas .btns button").click(function () {
  $("#aulas .btns button").removeClass("selected");
  $(this).addClass("selected");

  var selected = aula[$(this).data("index")];

  $("#aulas .aulas .notebook .not").attr("src", `${selected.notebook}`);
  aula.createAulas(selected.aulas);
});

if (window.innerWidth < 500) {
  $("#first-page .back").attr("src", "imgs/backfirstmobile.png");
} else {
  $("#first-page .back").attr("src", "imgs/backfirst.png");
}

window.onresize = function (event) {
  if (window.innerWidth < 500) {
    $("#first-page .back").attr("src", "imgs/backfirstmobile.png");
  } else {
    $("#first-page .back").attr("src", "imgs/backfirst.png");
  }
};

var perguntasFrequentes = {
  perguntas: [
    {
      pergunta: "O Curso Prático de Letramento serve para mim?",
      resp: "O Curso Prático de Letramento é um material voltado ao desenvolvimento da linguagem e sua metodologia faz com que os alunos avancem nos graus de letramento - do nível Passivo Bruto Incompleto ao Passivo Bruto Completo. As aulas práticas do curso e os materiais se propõem a desenvolver neles a familiaridade com a língua portuguesa em sua melhor versão: na literatura.",
    },
    {
      pergunta:
        "Sou graduado, pós-graduado ou doutor em uma das melhores faculdades do país. Posso ser um analfabeto funcional?",
      resp: "Infelizmente, sim. Atualmente, receber uma certificação dada por uma Instituição de Ensino Superior significa tão somente… que você tem um pedaço de papel. O analfabeto funcional tem a capacidade de imitar com muita destreza a linguagem erudita, disfarçando seus problemas intelectuais mais profundos. Tenho centenas de alunos que passaram pelas Universidades e que se descobriram analfabetos funcionais fazendo meus cursos.",
    },
    {
      pergunta:
        "Tenho filhos/alunos pequenos. Existe uma idade mínima para participar do Curso Prático de Letramento?",
      resp: "Não. Este curso foi elaborado para que todos os alfabetizados pudessem tirar proveito dele, principalmente os menores que estão na formação inicial dos seus estudos literários. Tendo sido alfabetizadas, a minha recomendação é que as crianças participem dele o quanto antes. Tenho dezenas de alunos com pouca idade que aproveitam muito bem este curso.",
    },
    {
      pergunta: "Quais as formas de pagamento?",
      resp: "Você pode adquirir o acesso ao curso através de cartão de crédito, boleto bancário, PIX, débito bancário e Paypal.",
    },
    {
      pergunta: "Em quanto tempo terei acesso ao curso?",
      resp: "Assim que você finalizar a compra, o acesso chegará mediante um link que enviaremos para o seu e-mail utilizado para aquisição.",
    },
    {
      pergunta: "E se eu pagar por boleto, quando recebo?",
      resp: "No caso de pagamento por boleto, você deve aguardar até 3 dias úteis para liberação do seu acesso, já que é esse o prazo que o banco pode levar para reconhecer o pagamento.",
    },
    {
      pergunta: "O acesso é vitalício?",
      resp: "Sim, você poderá acessar as aulas e materiais complementares sempre que quiser. No entanto, o suporte dessas aulas possui um ano de duração.",
    },
    {
      pergunta: "E se eu não gostar?",
      resp: "Caso você não goste do conteúdo do Curso Prático de Letramento, você poderá solicitar o seu reembolso em até 7 dias e devolveremos o seu investimento.",
    },
    {
      pergunta: "Tem período de teste?",
      resp: "Não temos período de teste, mas oferecemos 7 dias de garantia incondicional para que você possa acessar o conteúdo do curso e avaliá-lo.",
    },
    {
      pergunta:
        "Tenho outras dúvidas que não encontrei aqui, quem pode me respondê-las?",
      resp: "Caso a sua dúvida não tenha sido respondida nesta página, entre em contato com minha equipe de suporte através do e-mail profamandastella@gmail.com.",
    },
  ],

  createPerguntas() {
    var target = $(`.sec-duvidas .perguntas`);

    target.empty();
    perguntasFrequentes.perguntas.forEach(function (v) {
      target.append(`
        <div class="pergunta hide">
          <div class="title">
            <h5>${v.pergunta}</h5>
            <img src="imgs/arrow.png" alt="">
          </div>
          
          <div class="resp">
            ${v.resp}
          </div>
        </div>
      `);
    });

    $(`.sec-duvidas .perguntas .pergunta`).click(function () {
      $(this).toggleClass("hide");
    });
  },
};

perguntasFrequentes.createPerguntas();

setDate();

function getDiffDates(dateNow, dateFuture) {
  var seconds = Math.floor((dateFuture - dateNow) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  if(hours < 0) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  return { d: days, h: hours, m: minutes };
}

function setDate() {
  $.get("https://tdelanhese.github.io/Letramento/date.json", function (data) {

    console.log(data)
    var dateFuture = new Date();

    if(data.date) {
      dateFuture = new Date(data.date);
    }

    var dateNow = new Date();

    var dif = getDiffDates(dateNow, dateFuture);

    $(".sec-oferta .dias h3").text(dif.d);
    $(".sec-oferta .hora h3").text(dif.h);
    $(".sec-oferta .min h3").text(dif.m);

    setInterval(function () {
      dif = getDiffDates(dateNow, dateFuture);
      dateNow = new Date();

      $(".sec-oferta .dias h3").text(dif.d);
      $(".sec-oferta .hora h3").text(dif.h);
      $(".sec-oferta .min h3").text(dif.m);
    }, 60000);
  });
}

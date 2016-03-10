var nome = document.getElementById('nome');
var curso = document.getElementById('curso');
var mensagem = document.getElementById('mensagem');
var aluno;

function getRandom(max) {
  return Math.floor(Math.random() * (max));
}

if(alunos.length === 1){
    aluno = alunos[0];
}else{
    aluno = alunos[ getRandom(alunos.length) ];
}
if (alunos.length === 0) {
    aluno = "Não existem nehhum aluno!";
}

if (aluno.nome) {
    nome.innerHTML = aluno.nome;
    curso.innerHTML = aluno.curso;
    mensagem.innerHTML = "<b>Mensagem: <br /></b>" + aluno.mensagem;
}else{
    mensagem.innerHTML = '<p class="text-center">' + aluno + '</p>';
}
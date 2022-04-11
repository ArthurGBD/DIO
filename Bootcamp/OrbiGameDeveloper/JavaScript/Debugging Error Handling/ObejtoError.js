new Error(message, fileName, lineNumber);

const MeuErro = new Error('Mensagem Inválida');

MeuErro.name = 'InavlidMessage';
MeuErro.stack;

throw MeuErro;
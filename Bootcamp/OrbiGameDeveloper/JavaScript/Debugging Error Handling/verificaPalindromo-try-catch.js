function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e){
        // console.log(e)
        throw e
    }
    finally{
        console.log(`A ${string} foi enviada`)
    }
}

tryCatchExemplo('ala');
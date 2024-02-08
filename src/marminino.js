function executar(numero) {
    for (i = numero; i < 100; i++) {
        if (i % 3 == 0){
            return "Mar";
        }
        if (i % 4 == 0){
            return "Minino";
        }
        if (i % 4 == 0 && i % 3 == 0){
            return "MarMinino";
        }
        else {
            return '';
        }
    }
}

module.exports = executar;
const avanca = document.querySelector('.btn-proximo');

avanca.forEach(button =>){
    button.addEventListener('click', function){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo' + this.getATRIbut('data-proxima');
    }
    atual.classList.remore(ativo);
    document.getElementeyById(proximoPasso).classList.add('ativo');
    

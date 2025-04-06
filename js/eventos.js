// document.body.style.backgroundColor = 'red'; 

function enviar() {
    event.preventDefault(); //impedir o form de ser enviado

    let input_nome = document.getElementById('nome');
    let input_desc = document.getElementById('descricao');


    console.log('input_desc', quill.getText())


    let erro_nome = document.getElementById('erro_nome');
    let erro_descricao = document.getElementById('erro_descricao');

    if (input_nome.value == '') {
        // input_nome.style.border = '1px solid red';
        input_nome.classList.remove('is-valid');
        input_nome.classList.add('is-invalid');
        erro_nome.style.display = 'block';
    } else {
        // input_nome.style.border = '1px solid green';
        input_nome.classList.remove('is-invalid');
        input_nome.classList.add('is-valid');
        erro_nome.style.display = 'none';
    }

    if (input_desc.value == '') {
        input_desc.style.border = '1px solid red';
        erro_descricao.style.display = 'block';
    } else {
        input_desc.style.border = '1px solid green';
        erro_descricao.style.display = 'none';
    }
}


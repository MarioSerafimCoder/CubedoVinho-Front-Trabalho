const quill = new Quill('#descricao', { theme: 'snow' });

document.querySelector('#form-categoria').addEventListener('submit', e => {
  e.preventDefault();

  const nome = document.querySelector('#nome');
  const erroNome = document.querySelector('#erro_nome');
  const erroDesc = document.querySelector('#erro_descricao');
  const boxDesc = document.querySelector('#descricao');

  const nomeValido = nome.value.trim() !== '';
  const desc = quill.getText().trim();
  const descValida = desc && desc !== '\n';

  nome.classList.toggle('is-valid', nomeValido);
  nome.classList.toggle('is-invalid', !nomeValido);
  erroNome.style.display = nomeValido ? 'none' : 'block';

  boxDesc.style.border = `1px solid ${descValida ? 'green' : 'red'}`;
  erroDesc.style.display = descValida ? 'none' : 'block';
});
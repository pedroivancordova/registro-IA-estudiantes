document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const curso = document.getElementById('curso').value;
    const uso = document.getElementById('uso').value;
    console.log('Nombre:', nombre);
    console.log('Curso:', curso);
    console.log('¿Usa IA?:', uso);
  });
});

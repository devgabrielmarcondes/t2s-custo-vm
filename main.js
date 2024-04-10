const tokens = document.querySelector("#tokens");
const vm = document.querySelector("#vm");
const resultado = document.querySelector("#resultado");
const btn_calcular = document.querySelector("#calcular");
btn_calcular.addEventListener("click", () => {
  const qtd_tokens = 1000000;
  let custo_tokens = Number(tokens.value); // 20 tokens por segundo
  let custo_vm = Number(vm.value); // 0.52
  let horas = qtd_tokens / custo_tokens / 3600;
  let res = custo_vm * horas;

  if (custo_tokens.length !== 0 && custo_vm.length !== 0) {
    resultado.innerHTML = `O custo é $${res.toFixed(2)}`;
  }
});

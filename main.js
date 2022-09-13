const form = document.querySelector("#form");
const btn = document.querySelector("#btn-calcular");
// ? (ingresos - deudas)*0.37;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createTable();
  form.reset()
});

function capacidadDeEndeudamiento() {
  const salario_ingresos = document.querySelector("#salarioIngresos").value;
  const salario_deudas = document.querySelector("#salarioDeudas").value;
  const capacidad_endeudamiento = (salario_ingresos - salario_deudas) * 0.4;
  const objSalarial = {
    ingreso: salario_ingresos,
    deudas: salario_deudas,
    capacidad: capacidad_endeudamiento,
  };
  return objSalarial;
}

function createTable() {
  const datos = capacidadDeEndeudamiento();
  if (!datos.deudas || !datos.ingreso) {
    const error = document.querySelector('.error');
    error.classList.remove('inactive');
  } else {    
    const table = document.querySelector("#endeudamiento_table");
    const tableRow = table.insertRow(-1);
    const newSalarioIngreso = tableRow.insertCell(0);
    newSalarioIngreso.textContent = datos.ingreso;
    const newSalarioDeudas = tableRow.insertCell(1);
    newSalarioDeudas.textContent = datos.deudas;

    if(datos.capacidad < -1) {
      const newCapacidadE = tableRow.insertCell(2);
      newCapacidadE.textContent = '$' +datos.capacidad;
      newCapacidadE.classList.add('denied');
    }else{
      const newCapacidadE = tableRow.insertCell(2);
      newCapacidadE.textContent = '$ '+datos.capacidad;
      newCapacidadE.classList.add('aproved');
    }
    
    
    
    
  }
}

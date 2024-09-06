/* Variables y selectores */
const expensesList = document.querySelector(`#expenses ul`);
let budget;

/* Eventos */
document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  requestBudget();
  budgetFormEvents();
}

/* Clases */
class Budget {
  constructor(budgetTotal) {
    this.budgetTotal = budgetTotal;
    this.budgetAvailable = budgetTotal;
    this.expenses = [];
  }
}

class UserInterface {
  insertBudget(quantity) {
    const { budgetTotal, budgetAvailable } = quantity;

    // Formatear el total y disponible en moneda local MXN
    let formattedTotal = budgetTotal.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });
    let formattedAvailable = budgetAvailable.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });

    // Insertar el total y disponible en el HTML
    document.querySelector(
      `#budgetCardTotal`
    ).textContent = `${formattedTotal}`;
    document.querySelector(
      `#budgetCardAvailable`
    ).textContent = `${formattedAvailable}`;
  }
}

// Instanciar la UI
const userInterface = new UserInterface();

/* Funciones */
function requestBudget() {
  const userBudget = Number(prompt(`¿Cuál es tu presupuesto?`));
  const voidValue = ``;

  if (
    userBudget === voidValue ||
    userBudget === null ||
    isNaN(userBudget) ||
    userBudget <= 0
  ) {
    window.location.reload();
  }

  // Crear instancia de "Budget" y establecerlo
  budget = new Budget(userBudget);

  // Llamar al método para insertar el presupuesto en la UI
  userInterface.insertBudget(budget);
}

function budgetFormEvents() {
  // Obtener el formulario y sus eventos
  const budgetForm = document.querySelector(`#budgetForm`);
  budgetForm.addEventListener(`submit`, handleBudgetFormSubmit);
}

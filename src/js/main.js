/* Variables y selectores */
const expensesList = document.querySelector(`#expenses ul`);
let budget;

/* Eventos */
document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  requestName();
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
  insertName(userName) {
    const budgetUserName = document.querySelector(
      `.budget__heading--user-name`
    );

    // Insertar el nombre del usuario en el HTML
    budgetUserName.textContent = `${userName}!`;
  }

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
function requestName() {
  const userName = prompt(`¿Cuál es tu nombre?`);
  let voidValue = ``;

  if (userName === null || userName === voidValue) {
    window.location.reload();
  }

  // Llamar al método para insertar el nombre en la UI
  userInterface.insertName(userName);
}

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
  budgetForm.addEventListener(`submit`, addExpense);
}

function addExpense(e) {
  e.preventDefault();

  // Obtener los valores del formulario
  const inputExpenseName = document.querySelector(`#expenseName`).value;
  const inputExpenseAmount = document.querySelector(`#expenseAmount`).value;
  const selectExpenseCategory =
    document.querySelector(`#expenseCategory`).value;
}

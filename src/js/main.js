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
    this.budgetSpent = 0;
    this.expenses = [];
  }

  newExpenses(expense) {
    // Validar que el monto introducido no sea mayor al presupuesto disponible
    if (expense.inputAmount > this.budgetAvailable) {
      userInterface.printAlerts(`No tienes fondos suficientes`, `error`);

      return;
    }

    // Añadir el gasto a la lista de gastos
    this.expenses = [...this.expenses, expense];
    this.calculateSpent();

    // Imprimir una alerta de exito
    userInterface.printAlerts(`Se agregó correctamente`, `success`);
  }

  calculateSpent() {
    this.budgetSpent = this.expenses.reduce(
      (total, expense) => total + expense.inputAmount,
      0
    );
    this.budgetAvailable = this.budgetTotal - this.budgetSpent;
  }

  deleteExpense(expenseId) {
    // Filtrar los gastos que no tienen el id de expensesId
    const filteredExpenses = this.expenses.filter(
      (expense) => expense.id !== expenseId
    );

    // Actualizar el array de gastos
    this.expenses = filteredExpenses;

    // Recalcular el presupuesto disponible y gastado
    this.calculateSpent();
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
    const { budgetTotal, budgetAvailable, budgetSpent } = quantity;

    // Formatear el total y disponible en moneda local MXN
    let formattedTotal = budgetTotal.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });
    let formattedAvailable = budgetAvailable.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });
    let formattedSpent = budgetSpent.toLocaleString("es-MX", {
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
    document.querySelector(
      `#budgetCardSpent`
    ).textContent = `${formattedSpent}`;
  }

  printAlerts(message, typeAlert) {
    // Crear el div de la alerta
    const alertMessage = document.createElement(`p`);
    alertMessage.classList.add(`alert`);

    // Agregar el mensaje y el tipo de alerta al p de la alerta
    if (typeAlert === `error`) {
      alertMessage.classList.add(`alert--error`);
    } else {
      alertMessage.classList.add(`alert--success`);
    }

    // Agregar al div el mensaje
    alertMessage.textContent = message;

    // Insertar la alerta al HTML
    const budgetForm = document.querySelector(`#budgetForm`);
    budgetForm.appendChild(alertMessage);

    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
      alertMessage.remove();
    }, 3000);
  }

  showExpenseList(expenses) {
    // Limpiar la lista de gastos
    this.cleanHtml();

    // Iterar los gastos
    expenses.forEach((expense) => {
      const { inputName, inputAmount, selectedCategory, id } = expense;

      // Formatear la cantidad
      const formattedAmount = inputAmount.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
      });

      // Crear el Li
      const expenseItem = document.createElement(`li`);
      expenseItem.className = `expense-item`;
      expenseItem.dataset.id = id;
      expenseItem.dataset.category = selectedCategory;

      // Agregar el HTML
      expenseItem.innerHTML = `
        <div class="expense-item__texts">
          <p class="expense-item__description">${inputName}</p>
          <p class="expense-item__price">${formattedAmount}</p>
        </div>
      `;

      // Botón para borrar el gasto
      const deleteBtn = document.createElement(`button`);
      deleteBtn.classList.add(`expense-item__btn`);
      deleteBtn.textContent = `X`;
      deleteBtn.addEventListener(`click`, () => {
        deleteExpense(id);
      });

      // Añadir el botón al Li
      expenseItem.appendChild(deleteBtn);

      // Añadir el Li al Ul
      expensesList.appendChild(expenseItem);
    });
  }

  cleanHtml() {
    while (expensesList.firstChild) {
      expensesList.removeChild(expensesList.firstChild);
    }
  }

  updateAvailableBudget(available, spent) {
    let formattedAvailable = available.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });
    let formattedSpent = spent.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });

    // Actualizar el disponible y el gastado en el HTML
    document.querySelector(
      `#budgetCardAvailable`
    ).textContent = `${formattedAvailable}`;
    document.querySelector(
      `#budgetCardSpent`
    ).textContent = `${formattedSpent}`;
  }

  checkBudget(budgetObj) {
    const { budgetTotal, budgetAvailable } = budgetObj;

    /*   if (budgetTotal / 4 > budgetAvailable) {
      console.log(`Gastaste el 75%`);
    } else if (budgetTotal / 2 > budgetAvailable) {
      console.log(`Gastaste el 50%`);
    } */

    const budgetFormBtn = document.querySelector(`.budget-form__btn`);

    // Desactivar el botón de agregar gasto si el presupuesto está agotado
    if (budgetAvailable <= 0) {
      userInterface.printAlerts(`El presupuesto se ha agotado`, `error`);
      budgetFormBtn.disabled = true;
    } else {
      budgetFormBtn.disabled = false;
    }
  }
}

// Instanciar la UI
const userInterface = new UserInterface();

/* Funciones */
function requestName() {
  let userName;

  // Solicitar el nombre del usuario hasta que se ingrese un valor válido
  do {
    userName = prompt(`¿Cuál es tu nombre?`);

    // Validar el nombre
    if (!userName) {
      alert(`Por favor, introduce un nombre válido.`);
    }
  } while (!userName);

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
  const inputName = document.querySelector(`#budgetFormName`).value;
  const inputAmount = Number(document.querySelector(`#budgetFormAmount`).value);
  const selectedCategory = document.querySelector(`#budgetFormCategory`).value;
  let voidValue = ``;

  // Validar que ninguno de los campos esté vacío
  if (
    inputName === voidValue ||
    inputAmount === voidValue ||
    selectedCategory === voidValue
  ) {
    userInterface.printAlerts(`Todos los campos son obligatorios`, `error`);

    return;
  } else if (inputAmount <= 0 || isNaN(inputAmount)) {
    userInterface.printAlerts(`Cantidad no valida`, `error`);

    return;
  }

  // Crear objeto con el gasto
  const expense = { inputName, inputAmount, selectedCategory, id: Date.now() };

  // Añadir el gasto a la lista y al presupuesto
  budget.newExpenses(expense);

  // Obtener los valores actuales del presupuesto y gasto
  const { expenses, budgetAvailable, budgetSpent } = budget;

  // Imprimir el gasto en el HTML
  userInterface.showExpenseList(expenses);

  // Actualizar el presupuesto en la UI
  userInterface.updateAvailableBudget(budgetAvailable, budgetSpent);

  // Llamar al método para comprobar si se ha alcanzado el presupuesto
  userInterface.checkBudget(budget);

  // Limpiar los campos del formulario
  const budgetForm = document.querySelector(`#budgetForm`);
  budgetForm.reset();
}

function deleteExpense(id) {
  // Eliminar el gasto del objeto
  budget.deleteExpense(id);

  // Obtener los valores actuales del presupuesto y gasto
  const { expenses, budgetAvailable, budgetSpent } = budget;

  // Eliminar el gasto del HTML
  userInterface.showExpenseList(expenses);

  // Actualizar el presupuesto en la UI
  userInterface.updateAvailableBudget(budgetAvailable, budgetSpent);

  // Llamar al método para comprobar si se ha alcanzado el presupuesto
  userInterface.checkBudget(budget);
}

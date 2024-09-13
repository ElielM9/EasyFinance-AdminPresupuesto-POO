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
    this.expenses = [...this.expenses, expense];
    
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

  addExpenseList(expenses) {
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
      const newExpense = document.createElement(`li`);
      newExpense.className = `expense-item`;
      newExpense.dataset.id = id;
      newExpense.dataset.category = selectedCategory;

      // Agregar el HTML
      newExpense.innerHTML = `
        <div class="expense-item__texts">
          <p class="expense-item__description">${inputName}</p>
          <p class="expense-item__price">${formattedAmount}</p>
        </div>
      `;

      // Botón para borrar el gasto
      const deleteBtn = document.createElement(`button`);
      deleteBtn.classList.add(`expense-item__btn`);
      deleteBtn.textContent = `X`;

      // Añadir el botón al Li
      newExpense.appendChild(deleteBtn);

      // Añadir el Li al Ul
      expensesList.appendChild(newExpense);
    });
  }

  cleanHtml() {
    while (expensesList.firstChild) {
      expensesList.removeChild(expensesList.firstChild);
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

  // Imprimir una alerta de exito
  userInterface.printAlerts(`Se agregó correctamente`, `success`);

  // Imprimir el gasto en el HTML
  const { expenses } = budget;
  userInterface.addExpenseList(expenses);

  // Limpiar los campos del formulario
  const budgetForm = document.querySelector(`#budgetForm`);
  budgetForm.reset();
}

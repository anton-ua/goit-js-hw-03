/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const DEPOSIT = "deposit";
const WITHDRAW = "withdraw";

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: []
};
/*
 * Метод возвращает текущий баланс
 */
const getBalance = () => alert(`Текущий баланс составляет ${account.balance}`);
/*
 * Метод отвечающий за добавление суммы к балансу
 * Создает объект транзакции и вызывает addTransaction
 */
const deposit = () => {
  const amount = Number(prompt(`Введите сумму депозита`, "Сумма депозита"));
  account.balance += amount;
  addTransaction(DEPOSIT, amount);
};
/*
 * Метод добавляющий транзацию в свойство transactions
 * Принимает объект трназкции
 */
const addTransaction = (transaction, amount) => {
  const ID = account.transactions.length + 1;
  account.transactions.push({ id: ID, type: transaction, amount: amount });
  alert(
    `Успешно ${
      account.transactions[ID - 1].type === "withdraw" ? "снято" : "внесено"
    } сумму ${amount}. ID операции ${
      account.transactions.length
    }. Текущий баланс составляет ${account.balance}`
  );
};

/*
 * Метод отвечающий за снятие суммы с баланса.
 * Создает объект транзакции и вызывает addTransaction
 *
 * Если amount больше чем текущий баланс, выводи сообщение
 * о том, что снятие такой суммы не возможно, недостаточно средств.
 */
const withdraw = () => {
  const amount = Number(prompt(`Введите сумму снятия`), "Сумма снятия");
  if (amount > account.balance) {
    alert(`Снять сумму ${amount} невозможно, недостаточно средств`);
  } else {
    account.balance -= amount;
    addTransaction(WITHDRAW, amount);
  }
};

/*
 * Метод возвращает количество средств
 * определенного типа транзакции из всей истории транзакций
 */
const getTransactionTotal = type => {
  let total = 0;
  for (let i = 0; i < account.transactions.length; i += 1) {
    if (account.transactions[i].type === type) {
      total += account.transactions[i].amount;
    }
  }
  return alert(
    `Общая сумма по ${
      type === "withdraw" ? "снятию" : "депозиту"
    } составила ${total}`
  );
};
/*
 * Метод ищет и возвращает объект транзации по id
 */
const getTransactionDetails = () => {
  if (account.transactions.length === 0) {
    alert(`Еще не было операций`);
  } else {
    const ID = Number(
      prompt(`Введите ID от 1 до ${account.transactions.length}`, "Номер ID")
    );
    if (ID > account.transactions.length) {
      alert(`Неверный номер ID`);
    } else {
      alert(
        `По ID №${ID} операция ${
          account.transactions[ID - 1].type === "withdraw"
            ? "снятия"
            : "депозита"
        } на сумму ${account.transactions[ID - 1].amount}`
      );
    }
  }
};

const promptView = () => {
  do {
    let consoleComand = prompt(
      `Депозит - 1, "Депозит", Снятие - 2, "Снятие", Просмотр баланса - 3, "Баланс", Общая сумма депозитов - 4, "Внесено", Общая сумма снятий - 5, "Снято", Просмотр операции по ID - 6, "ID"`,
      "Введите от 1 до 6, или словами"
    );
    if (consoleComand === null) {
      break;
    } else if (consoleComand === "Внесено" || consoleComand === "4") {
      getTransactionTotal(DEPOSIT);
      promptView();
    } else if (consoleComand === "Снято" || consoleComand === "5") {
      getTransactionTotal(WITHDRAW);
      promptView();
    } else if (consoleComand === "Баланс" || consoleComand === "3") {
      getBalance();
      promptView();
    } else if (consoleComand === "ID" || consoleComand === "6") {
      getTransactionDetails();
      promptView();
    } else if (consoleComand === "Депозит" || consoleComand === "1") {
      deposit();
      promptView();
    } else if (consoleComand === "Снятие" || consoleComand === "2") {
      withdraw();
      promptView();
    } else {
      alert(`Неверный ввод`);
      promptView();
    }
  } while (consoleComand !== null);
};

do {
  let prm = promptView();
} while (prm !== null);

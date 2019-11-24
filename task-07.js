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
 * Метод отвечающий за добавление суммы к балансу
 * Создает объект транзакции и вызывает addTransaction
 */
const deposit = amount => {
  account.balance += amount;
  addTransaction(DEPOSIT, amount);
};

/*
 * Метод отвечающий за снятие суммы с баланса.
 * Создает объект транзакции и вызывает addTransaction
 *
 * Если amount больше чем текущий баланс, выводи сообщение
 * о том, что снятие такой суммы не возможно, недостаточно средств.
 */
const withdraw = amount => {
  if (amount > account.balance) {
    alert(`Снять сумму ${amount} невозможно, недостаточно средств`);
  } else {
    account.balance -= amount;
    addTransaction(WITHDRAW, amount);
  }
};

/*
 * Метод добавляющий транзацию в свойство transactions
 * Принимает объект трназкции
 */
const addTransaction = (transaction, amount) => {
  const ID = account.transactions.length;
  account.transactions.push({ id: ID, type: transaction, amount: amount });
};

/*
 * Метод возвращает текущий баланс
 */
const getBalance = () => console.log(`Баланс: ${account.balance}`);

/*
 * Метод ищет и возвращает объект транзации по id
 */
const getTransactionDetails = id => account.transactions[id];

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
  return `Общая сумма по ${
    type === "withdraw" ? "снятию" : "депозиту"
  } составила ${total}`;
};

deposit(500);
withdraw(400);
deposit(800);
withdraw(1000);
withdraw(300);
withdraw(200);
console.log(account);
console.log(getTransactionDetails(1));
getBalance();
console.log(getTransactionTotal(WITHDRAW));

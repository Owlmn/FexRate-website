import React from "react";
import styles from "./PersonalCabinet.module.css";

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      from: {
        currency: "BTC",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/454327aa6c2533dd49bb258854921c38e1ffd33a512a937899db524d0b1785c2?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "USDT",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/3a2cd016077f5dd004b809f51bc63ca06a72f6cecdc0d5314123b68cb550f9c0?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 2,
      from: {
        currency: "ETH",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/0ca4154300d36be8d4f01a01233889769edb503e14fd17cb602ca0ad5cbe9a8a?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "USDT",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/80f1ea023700879ff04cae4f3c7fd70124393490071bd0b2f0e610ac80f16188?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 3,
      from: {
        currency: "SOL",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/77173630301b86069221309c23250037f81f23b60313ee3f80846035f482692e?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "TON",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/3a78b01e080884a17caeda8af74ef7e67838b45a5b46275d34ed03acd0f5dd96?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 4,
      from: {
        currency: "DOT",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/32c0f33eca6df0a8f67b3d389f7a163d113377a53e06da8859278e51d8eeca08?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "MATIC",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/e371f3bef14bb8594cb4e5757c17d3c7cb2a52588dff407a9292bfa87af36435?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 5,
      from: {
        currency: "BTC",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/40c35709490853296cd072dec965a7feb27ba90492a9d8375c41104555110d9c?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "ETH",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/6e27f6512690b6f07ce407fb407392d0bc7c02831fcffdc0829bda0b5935ee6e?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 6,
      from: {
        currency: "USD",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/2afe20658bfc49fcdc3cc09ab7bf5f06f11421c761c5d295fdd65baaa3742a7a?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "RUB",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/0ca50eccc8387a5977c745540b203d59d615124d93ae302a7f9799b9e39ab7d9?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 7,
      from: {
        currency: "EUR",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/257693efd8a616a2c470498c90ba921fd4df3b5f2773bfe50734e6591c27ea35?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "RUB",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/0394fbdc5783052b95bc0abb0ddbaaf841c68315ed74b6ea25cdad63739b298d?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 8,
      from: {
        currency: "USD",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/5791d375a2eef21186d466fa20a09e37dccffa700fb0a0a1b8b518af7662fd75?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "EUR",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/cf63de2b982c700221957451453998b271642d39d8089bcccfcaedb2a61575df?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 9,
      from: {
        currency: "RUB",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/705abc506d9c0c050a66f9d4d0374ae49b522b0f654a0ee42408930d70cb3232?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "CNY",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/15c960b005e25eff7dbabfa045a916ca7696bddd66da5e63f32d5c8139750b61?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
    {
      id: 10,
      from: {
        currency: "RUB",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/2b485a68452a97ddb5015012e1541ecc24fb83e6d17a473493b4680128c36abe?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
      to: {
        currency: "JPY",
        icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/26c93bf0f3221d9e8b38d8bd870e404cec23a658cd52dfe8111e126b4f5da3b4?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      },
    },
  ];

  return (
    <section className={styles.transactionHistory}>
      <h2 className={styles.sectionTitle}>История транзакций</h2>
      <ul className={styles.transactionList}>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={styles.transactionItem}>
            <span className={styles.transactionId}>{transaction.id}</span>
            <div className={styles.currencyPair}>
              <div className={styles.currency}>
                <img
                  src={transaction.from.icon}
                  alt={`${transaction.from.currency} icon`}
                  className={styles.currencyIcon}
                />
                <span>{transaction.from.currency}</span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/aeb9bf7b8ed274d79b7dabab56da110b93dfd1314d6dc2419a116dfd2423472f?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
                alt="Arrow"
                className={styles.arrowIcon}
              />
              <div className={styles.currency}>
                <img
                  src={transaction.to.icon}
                  alt={`${transaction.to.currency} icon`}
                  className={styles.currencyIcon}
                />
                <span>{transaction.to.currency}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TransactionHistory;

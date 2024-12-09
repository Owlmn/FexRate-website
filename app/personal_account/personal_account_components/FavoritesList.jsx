import React from "react";
import styles from "./PersonalCabinet.module.css";

const FavoritesList = () => {
  const cryptoCurrencies = [
    {
      currency: "BTC",
      value: "69,490$",
      icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/01fc6b65af0f7d0ad7ba6f33c86fc5856467206e0ff1773223444e8866a4fb29?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
    },
    {
      currency: "ETH",
      value: "2,340$",
      icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/1228fb5e2a6dbd01084b1eb2d972e267ad9c65c10fd131b95064419d08822b5c?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
    },
    {
      currency: "USDT",
      value: "0,998$",
      icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/0fad45171f9ff4ea32148048e0b82525baf62231bb11b593780ad40eff37c4f2?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
    },
  ];

  const regularCurrencies = [
    {
      currency: "RUB",
      value: "0,972$",
      icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/d667f89b9130109185d5fb50adffe8427c43158dd38a69fba97c15478f219d75?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
    },
    {
      currency: "CNY",
      value: "0,268$",
      icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/18cc0778e8de79240f35b5c1878d675ce46a90aa39c44687f1524c6cfa48cd02?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
    },
    {
      currency: "EUR",
      value: "1,215$",
      icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/a4c41e6153736ba2eedff91b3f298eb0b94acd4f7880a65ab2d39eccba2074c2?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
    },
  ];

  return (
    <section className={`${styles.favorites} ${styles.rightColumn}`}>
      <h2 className={styles.sectionTitle}>Популярное</h2>
      <div className={styles.favoritesList}>
        {cryptoCurrencies.map((item, index) => (
          <div key={index} className={styles.favoriteItem}>
            <div className={styles.currencyInfo}>
              <img
                src={item.icon}
                alt={`${item.currency} icon`}
                className={styles.currencyIcon}
              />
              <span className={styles.currencyCode}>{item.currency}</span>
            </div>
            <div className={styles.currencyValue}>
              <span>{item.value}</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/1bd644027171744088842f2f3295247f2851e112a2e23baeaa41a6967eb56f8b?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
                alt="Trend indicator"
                className={styles.trendIcon}
              />
            </div>
          </div>
        ))}
        {regularCurrencies.map((item, index) => (
          <div key={index} className={styles.favoriteItem}>
            <div className={styles.currencyInfo}>
              <img
                src={item.icon}
                alt={`${item.currency} icon`}
                className={styles.currencyIcon}
              />
              <span className={styles.currencyCode}>{item.currency}</span>
            </div>
            <div className={styles.currencyValue}>
              <span>{item.value}</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/1bd644027171744088842f2f3295247f2851e112a2e23baeaa41a6967eb56f8b?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
                alt="Trend indicator"
                className={styles.trendIcon}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoritesList;

import styles from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>A Moments of Delivered on Time.</h2>
      <p>
        Choose your favorite meal from our selection of available meals
        and enjoy a delicious food at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
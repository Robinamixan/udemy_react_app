import React from 'react';

import styles from './MealsList.module.css';
import dummyMeals from '../../../dummy-data/dummy-meals';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

function MealsList() {
    const mealsList = dummyMeals.map(meal => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
}

export default MealsList;
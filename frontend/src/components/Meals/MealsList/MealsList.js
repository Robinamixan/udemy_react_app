import React from 'react';

import styles from './MealsList.module.css';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

function MealsList() {
    const [meals, setMeals] = React.useState([]);

    const fetchMealsHandler = async () => {
        const response = await fetch('http://localhost:8080/meals', {
            method: 'GET'
        })

        if (!response.ok) {
            console.log('Something went wrong');
            return;
        }

        const responseData = await response.json();

        const mealsData = responseData.meals.map((meal) => {
            return {
                id: meal.id,
                name: meal.name,
                description: meal.description,
                price: meal.price,
            };
        });

        setMeals(mealsData);
    };

    React.useEffect(() => {
        fetchMealsHandler();
    }, []);

    const mealsList = meals.map(meal => (
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
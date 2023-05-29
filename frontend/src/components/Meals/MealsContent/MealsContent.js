import React from 'react';

import MealsSummary from '../MealsSummary/MealsSummary';
import MealsList from '../MealsList/MealsList';

function MealsContent() {
    return (
        <React.Fragment>
            <MealsSummary />
            <MealsList />
        </React.Fragment>
    );
}

export default MealsContent;
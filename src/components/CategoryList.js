import React from 'react';

const CategoryList = (props) => {
  return (
    props.categories && (
      <div className="list-group">
        {props.categories.map((category) => (
          <button
            key={category.id}
            className={
              'list-group-item list-group-item-action ' +
              (props.categorySelected &&
              props.categorySelected.id === category.id
                ? 'active'
                : '')
            }
            onClick={() => props.categoryClickHandler(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    )
  );
};
export default CategoryList;

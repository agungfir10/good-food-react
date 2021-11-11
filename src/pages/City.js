import axios from 'axios';
import React from 'react';
import { API } from '../config/api';

const categoriesDummy = [
  {
    categories: {
      id: 1,
      name: 'Delivery',
    },
  },
  {
    categories: {
      id: 2,
      name: 'Nightlife',
    },
  },
  {
    categories: {
      id: 3,
      name: 'Catching-Up',
    },
  },
  {
    categories: {
      id: 4,
      name: 'Dipe-Out',
    },
  },
];
class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      categories: null,
      categorySelected: null,
    };
  }

  transformCategoriesData = (categories) => {
    const categoriesTransformed = categories.map((category) => {
      return category.categories;
    });
    return categoriesTransformed;
  };

  getCityData = (city_id) => {
    const url = `${API.zomato.baseUrl}/cities`;

    axios
      .get(url, {
        headers: {
          'user-key': API.zomato.api_key,
        },
        params: {
          city_ids: `${city_id}`,
        },
      })
      .then(({ data }) => {
        const city = data.location_suggestions[0];
        this.setState({ city });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    const { city_id } = this.props.match.params;
    console.log(this.props.match.params);
    // this.getCityData(city_id);

    const categories = this.transformCategoriesData(categoriesDummy);
    this.setState({ categories: categories });
  }

  categoryClickHandler = (category) => {
    this.setState({ categorySelected: category });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid my-4">
          {this.state.city ? (
            <div className="row">
              <div className="col">
                <h4 className="text-success">
                  Restaurant in {this.state.city.name},
                  {this.state.city.country_name}
                </h4>
              </div>
            </div>
          ) : (
            <h4 className="text-danger py-5">City not found!</h4>
          )}

          <div className="row">
            <div className="col-3">
              <h5>Categories</h5>
              {this.state.categories && (
                <div className="list-group">
                  {this.state.categories.map((category) => (
                    <button
                      key={category.id}
                      className={
                        'list-group-item list-group-item-action ' +
                        (this.state.categorySelected &&
                        this.state.categorySelected.id == category.id
                          ? 'active'
                          : '')
                      }
                      onClick={() => this.categoryClickHandler(category)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default City;

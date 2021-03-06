import axios from 'axios';
import React from 'react';
import CategoryList from '../components/CategoryList';
import SearchKeyword from '../components/SearchKeyword';
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
      keyword: '',
      criteria: [],
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
        let newCriteria = {
          criteriaName: 'City',
          data: city,
        };
        let criteria = [...this.state.criteria];
        criteria.push(newCriteria);
        this.setState({ city, criteria });
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
    let criteria = [...this.state.criteria];
    criteria = criteria.filter((cri) => cri.criteriaName !== 'Category');
    const newCriteria = {
      criteriaName: 'Category',
      data: category,
    };

    criteria.push(newCriteria);
    this.setState({ categorySelected: category, criteria });
  };

  changekKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid py-4 bg-light">
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
            <div className="col-lg-3">
              <h3>Categories</h3>
              <CategoryList
                categories={this.state.categories}
                categorySelected={this.state.categorySelected}
                categoryClickHandler={(category) =>
                  this.categoryClickHandler(category)
                }
              />
            </div>
            <div className="col">
              <SearchKeyword
                keyword={this.state.keyword}
                changekKeywordHandler={this.changekKeywordHandler}
              />
              <div className="card bg-light my-3">
                <div className="card-body">
                  <p>Find Restaurants based on criteria.</p>
                  <div className="card-title">
                    <table className="table table-hover">
                      <tbody>
                        {this.state.criteria.map((cri, index) => (
                          <tr key={index} className="table active">
                            <td width="40%">{cri.criteriaName}</td>
                            <td width="50%">{cri.data}</td>
                            <td width="10%">
                              <i className="fa fa-times" aria-hidden="true" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="pull-right">
                      <button className="btn btn-primary" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default City;

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetFilter, applyFilter } from 'actions/filterActions';
import { selectMax, selectMin } from 'selectors/selector';

import PriceRange from './PriceRange';

const Filters = (props) => {
  const [isMounted, setMounted] = useState(false);
  const [field, setFilter] = useState({
    brand: props.filter.brand,
    minPrice: props.filter.minPrice,
    maxPrice: props.filter.maxPrice,
    sortBy: props.filter.sortBy
  });
  const dispatch = useDispatch();
  const max = selectMax(props.products);
  const min = selectMin(props.products);

  useEffect(() => {
    if (isMounted && window.screen.width <= 480) {
      props.history.push('/');
    }

    if (isMounted && props.closeModal) props.closeModal();
    
    setFilter(props.filter);
    console.log('sdfasf',field.brand)
    setMounted(true);
    window.scrollTo(0, 0);
  }, [props.filter]);


  const onPriceChange = (min, max) => {
    setFilter({ ...field, minPrice: min, maxPrice: max });
  };

  const onBrandFilterChange = (e) => {
    console.log(e.target.value)
    const val = e.target.value;

    setFilter({ ...field, brand: val });
  };

  const onSortFilterChange = (e) => {
    setFilter({ ...field, sortBy: e.target.value });
  };


  const onApplyFilter = () => {
    const isChanged = Object.keys(field).some(key => field[key] !== props.filter[key]);
    
    if (isChanged) {
     dispatch(applyFilter(field));
    }
  };

  const onResetFilter = () => {
    if (Object.keys(field).some(key => !!props.filter[key])) {
      dispatch(resetFilter());
    }
  };
console.log(props.filter.brand)
  return (
    <div className="filters">
      <div className="filters-field">
        <span>Category</span>
        <br/>
        <br/>
        {props.productsLength === 0 && props.isLoading ? (
          <h5 className="text-subtle">Loading Filter</h5>
        ) : (
          <select 
              className="filters-brand"
              value={field.brand}
              disabled={props.isLoading || props.productsLength === 0}
              onChange={onBrandFilterChange}
          >
            <option value="">All Categories</option>
            <option value="chinese">CHINESE</option>
            <option value="pizza">  PIZZA</option>
            <option value="veg"> VEG</option>
            
          </select>
        )}
      </div>
      <div className="filters-field">
        <span>Sort By</span>
        <br/>
        <br/>
        <select 
              className="filters-sort-by d-block"
              value={field.sortBy}
              disabled={props.isLoading || props.productsLength === 0}
              onChange={onSortFilterChange}
          >
            <option value="">None</option>
            <option value="name-asc">Name Ascending A - Z</option>
            <option value="name-desc">Name Descending Z - A</option>
            <option value="price-desc">Price High - Low</option>
            <option value="price-asc">Price Low - High</option>
          </select>
      </div>
      <div className="filters-field">
        <span>Price Range</span>
        <br/>
        <br/>
        {props.productsLength === 0 && props.isLoading ? (
          <h5 className="text-subtle">Loading Filter</h5>
        ) : (
          <PriceRange 
              min={min} 
              max={max} 
              initMin={field.minPrice}
              initMax={field.maxPrice}
              isLoading={props.isLoading}
              onPriceChange={onPriceChange}
              productsLength={props.productsLength}
          />
        )}
      </div>
      <div className="filters-action">
        <button
            className="filters-button button button-small"
            disabled={props.isLoading || props.productsLength === 0}
            onClick={onApplyFilter}
        >
          Apply filters
        </button>
        <button
            className="filters-button button button-border button-small"
            disabled={props.isLoading || props.productsLength === 0}
            onClick={onResetFilter}
        >
          Reset filters
        </button>
      </div>
    </div>
  );
};

export default withRouter(Filters);

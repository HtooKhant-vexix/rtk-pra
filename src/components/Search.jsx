import React from 'react'
import { useLocation } from 'react-router-dom';
import Card from './Card';

const Search = () => {
const {state: filterItem} = useLocation();
console.log(filterItem);
  return (
    <div className="">
      <div className="">
        <div className="flex pt-10 flex-wrap gap-10 justify-center">
          {filterItem.map((e) => {
            return <Card key={e.id} {...e} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Search
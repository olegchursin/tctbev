import CocktailCard from './cocktailCard';
import cocktails from '../content/cocktails.json';
import Filter from './filter';
import { FC, useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { TextInput } from 'flowbite-react';

const Cocktails: FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [search, setSearch] = useState('');

  const filterCocktails = (filterKey: string) => {
    if (filterKey) {
      return cocktails.filter(cocktail =>
        new Set(cocktail.baseSpirit).has(filterKey)
      );
    }
    if (search) {
      return cocktails.filter(cocktail =>
        cocktail.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return cocktails;
  };
  const cocktailsList = filterCocktails(activeFilter);

  const handleSearch = (value: string) => {
    if (activeFilter) {
      setActiveFilter('');
    }
    setSearch(value);
  };

  const handleFilter = (filterKey: string) => {
    if (search) {
      setSearch('');
    }
    setActiveFilter(filterKey);
  };

  return (
    <div className="mb-28 px-6 pt-6 md:px-0 md:pt-12">
      <div className="flex place-content-center">
        <div className="w-full md:w-1/2">
          <TextInput
            id="email4"
            type="email"
            icon={HiSearch}
            placeholder="Filter by cocktail name..."
            required={true}
            value={search}
            onInput={e => handleSearch(e.currentTarget.value)}
          />
        </div>
      </div>
      <Filter activeFilter={activeFilter} handleFilter={handleFilter} />
      <div className="flex flex-wrap place-content-center gap-8">
        {cocktailsList.map(cocktail => {
          return (
            <CocktailCard cocktail={cocktail} key={cocktail.id}></CocktailCard>
          );
        })}
      </div>
    </div>
  );
};

export default Cocktails;

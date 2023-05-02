import { Button } from 'flowbite-react';
import { FC } from 'react';
import { filters } from '../utils/filter';

interface FilterProps {
  readonly activeFilter: string;
  readonly handleFilter: (filterKey: string) => void;
}

const Filter: FC<FilterProps> = ({ activeFilter, handleFilter }) => {
  return (
    <div className="my-6 flex w-full overflow-scroll md:my-12 md:place-content-center">
      <div className="flex gap-4">
        {filters.map(filter => {
          return (
            <Button
              key={filter.id}
              outline={activeFilter !== filter.key}
              color="dark"
              pill={true}
              onClick={() => handleFilter(filter.key)}
            >
              {filter.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;

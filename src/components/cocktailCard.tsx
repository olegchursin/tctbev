import { Badge, Button, Modal } from 'flowbite-react';
import { FC, useState } from 'react';

interface Ingredient {
  readonly name: string;
  readonly amount: string;
}

interface Cocktail {
  readonly id: string;
  readonly name: string;
  readonly baseSpirit: string[];
  readonly ingredients: Ingredient[];
  readonly batch: Ingredient[] | null;
  readonly build: string;
  readonly glass: string;
  readonly garnish: string;
  readonly radioByte: string;
}

interface CocktailProps {
  readonly cocktail: Cocktail;
}

const CocktailCard: FC<CocktailProps> = ({ cocktail }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { name, batch, ingredients, build, glass, garnish, radioByte } =
    cocktail;

  const baseInfo = (
    <>
      <div className="my-4 flex gap-4">
        <Badge color="info">{glass}</Badge>
        <Badge color="info">{garnish}</Badge>
      </div>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {ingredients.map(ingredient => {
          return (
            <div key={ingredient.name} className="flex">
              <p className="w-20">{ingredient.amount}</p>
              <p>{ingredient.name}</p>
            </div>
          );
        })}
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {build}
      </p>
    </>
  );

  const additionalInfo = (
    <>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Radio Byte
        </p>
        {radioByte}
      </div>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {batch?.length ? (
          <>
            <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Batch
            </p>
            {batch.map(ingredient => {
              return (
                <div key={ingredient.name} className="flex">
                  <p className="w-14">{ingredient.amount}</p>
                  <p>{ingredient.name}</p>
                </div>
              );
            })}
          </>
        ) : (
          <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            No batch
          </p>
        )}
      </div>
    </>
  );

  const title = (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {name}
    </h5>
  );

  return (
    <div className="flex min-w-[320px] max-w-sm flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 md:max-w-xs">
      <div>
        {title}
        {baseInfo}
      </div>
      <>
        <Button color="dark" onClick={() => setModalOpen(prev => !prev)}>
          More information
        </Button>
        <Modal
          dismissible={true}
          show={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <Modal.Header>{name}</Modal.Header>
          <Modal.Body>
            <div className="mt-6 space-y-6">
              {baseInfo}
              {additionalInfo}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setModalOpen(false)}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default CocktailCard;

interface Filter {
  readonly id: string;
  readonly key: string;
  readonly label: string;
}

export const filters: Filter[] = [
  {
    id: '',
    key: '',
    label: 'All'
  },
  {
    id: 'vodka',
    key: 'vodka',
    label: 'Vodka'
  },
  {
    id: 'gin',
    key: 'gin',
    label: 'Gin'
  },
  {
    id: 'rum',
    key: 'rum',
    label: 'Rum'
  },
  {
    id: 'tequila',
    key: 'tequila',
    label: 'Tequila'
  },
  {
    id: 'whisky',
    key: 'whisky',
    label: 'Whisky'
  },
  {
    id: 'cognac',
    key: 'cognac',
    label: 'Cognac'
  },
  {
    id: 'other',
    key: 'other',
    label: 'Other'
  },
  {
    id: 'na',
    key: 'na',
    label: 'Spirit free'
  }
];

import { fetchTowns } from './model/services/towns';
import { getTowns, getTownsError, getTownsIsLoading } from './model/selectors/townsSelectors';
import { townsReducer } from './model/slices/townsSlice';
import { Towns, TownsSchema } from './model/types/towns.types';

export { fetchTowns, getTowns, getTownsError, getTownsIsLoading, townsReducer };
export type { TownsSchema, Towns };

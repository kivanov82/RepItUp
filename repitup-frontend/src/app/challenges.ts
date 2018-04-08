import { Challenge } from './challenge';
import * as challengeSeed from './challengeSeed.json';

export const CHALLENGES: Challenge[] = [];

challengeSeed.forEach(challenge => CHALLENGES.push(challenge));

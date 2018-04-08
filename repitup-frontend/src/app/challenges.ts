import { Challenge } from './challenge';
import * as challengeSeed from './challengeSeed.json';

export const CHALLENGES: Challenge[] = [];

Array.prototype.forEach.call(challengeSeed, challenge => CHALLENGES.push(challenge));

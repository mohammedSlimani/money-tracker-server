import Id from '../Id';
import validator from 'email-validator';
import makeBuildUser from './user';

const makeUser = makeBuildUser({ Id, validator })

export default makeUser;

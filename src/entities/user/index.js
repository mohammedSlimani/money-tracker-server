import Id from "../../Id";
import validator from "email-validator";
import makeBuildUser from "./user";
import makeItem from "../item";

const makeUser = makeBuildUser({ Id, validator, makeItem });

export default makeUser;

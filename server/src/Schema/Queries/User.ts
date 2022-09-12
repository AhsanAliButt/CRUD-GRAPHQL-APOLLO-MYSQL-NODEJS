import {GraphQLList} from "graphql";
import {UserType} from '../TypeDefs/User';
import {Users} from "../../Entities/Users"

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
      return Users.find();
    },
  };

module.exports = GET_ALL_USERS;
import { Reducer } from "redux";
import { IUser } from "./types";

const INITIAL_STATE: IUser = {
  id: 0,
  name: '',
}

const user: Reducer<IUser> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_USER': {
      return action.payload;
    }
    default: {
      return INITIAL_STATE;
    }
  }
}

export default user;
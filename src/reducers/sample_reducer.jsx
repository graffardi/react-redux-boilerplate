import { ACTION_NAME } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case ACTION_NAME:
            return "Some informations...";
    }
    return state;
}
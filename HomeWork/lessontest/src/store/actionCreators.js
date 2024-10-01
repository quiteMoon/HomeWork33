import * as AuthActions from "./reducers/authReducer/actions";
import * as ThemeActions from "./reducers/themeReducer/actions";

export const actions = {
    ...AuthActions,
    ...ThemeActions
};
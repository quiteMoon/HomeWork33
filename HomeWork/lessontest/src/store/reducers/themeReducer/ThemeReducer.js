const initThemeState = {
    isDark: false
};

const ThemeReducer = (state = initThemeState, action) => {
    switch(action.type) {
        case "SWITCH_THEME":
            return { ...state, isDark: !state.isDark };
        default:
            return state;
    }
}

export default ThemeReducer;
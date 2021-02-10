const createRoute = (routeName) => {
    return window.location.host.includes('localhost') ?
        `http://localhost:8000/${routeName}`
        : `/${routeName}`
}
export const REQUEST_RESULTS_LIMIT = 20
export const USER_DEFAULT_LOCATION = "san francisco"
export const CREATE_ROUTE = createRoute
export const TABS = {
    CATEGORIES: "CATEGORIES",
    LOCATION: "LOCATION"
}
export const TAB_NAMES = {
    CATEGORIES: "categories",
    LOCATION: "location"
}

import {userAPI} from "../API/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {

                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {

                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsers
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            };
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            };
        default:
            return state;
    }
};
export const acceptFollow = (userID) => ({type: FOLLOW, userID});
export const acceptUnFollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage => ({type: SET_CURRENT_PAGE, currentPage}));
export const setTotalUsersCount = (totalUsers => ({type: SET_TOTAL_USER_COUNT, totalUsers}));
export const setIsFetching = (isFetching => ({type: TOGGLE_IS_FETCHING, isFetching}));
export const setInFollowing = (followingInProgress, userId) => ({type: FOLLOWING_IN_PROGRESS, followingInProgress, userId});
//thunk функции
export const getUsersThunkCreater = (currentPage,pageSize) => {
    return (dispatch)=>{
    dispatch(setIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
}
}
export const follow=(userId)=>{
    return (dispatch)=>{
        dispatch(setInFollowing(true,userId));
        userAPI.postFollowed(userId).then(data => {
            if(data.resultCode === 0){
                dispatch(acceptFollow(userId));
            }
        });
        dispatch(setInFollowing(false,userId));
    }
}
export const unFollow=(userId)=>{
    return (dispatch)=>{
        dispatch(setInFollowing(true,userId));
        userAPI.deleteFollowed(userId).then(data => {
            if(data.resultCode === 0){
                dispatch(acceptUnFollow(userId));
            }
        });
        dispatch(setInFollowing(false,userId));
    }
}
export default UsersReducer;
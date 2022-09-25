const getters = {
    token: state => state.user.token,
    grade: state => state.user.grade,
    userId: state => state.user.userId,
    realnameStatus: state => state.user.realnameStatus,
    requestLoading: state => state.user.requestLoading,
}

export default getters
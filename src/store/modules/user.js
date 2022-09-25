const user = {
    state: {
        token: '',
        userId: '',
        grade: '',
        realnameStatus: 0,
        requestLoading: false,
        smsDataPhone:'',
        smsDataPass:'',
        smsMessage:'',
    },

    mutations: {
        SET_TOKEN: (state,token) => {
            state.token = token
        },
        SET_USERID: (state,userId) => {
            state.userId = userId
        },
        SET_GRADE: (state,grade) => {
            state.grade = grade
        },
        SET_REALNAMESTATUS: (state,realnameStatus) => {
            state.realnameStatus = realnameStatus
        },
        SET_SMSDATAPHONE: (state,smsDataPhone) => {
            state.smsDataPhone = smsDataPhone
        },
        SET_SMSDATAPASS: (state,smsDataPass) => {
            state.smsDataPass = smsDataPass
        },
        SET_SMSMESSAGE: (state,smsMessage) => {
            state.smsMessage = smsMessage
        },
        showLoading: (state) => {
            state.requestLoading = true
        },
        hideLoading: (state) => {
            state.requestLoading = false
        }
    },

    actions: {

    }
}

export default user
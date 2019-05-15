export const loginResponse={
    LOGIN:{
        loginFun:{
            postSuccessHook: ( payload ) => {
                console.log(payload);
                return {
                    pad:"123123"
                }
            },
            successAction: "REGISTRATION_SUBMIT_SUCCESS",
            failureAction: "REGISTRATION_SUBMIT_FAILED",
        }

    }

}
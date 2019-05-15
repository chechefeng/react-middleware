export const loginApiCall={
    LOGIN:{
        loginFun:{
            payloadBuilder: (store, action) => {

                // console.log("login-step1")
                return {
                    name:"sg900@qq.com",
                    pwd:"Admine123"
                }
            }
        }

    }

}
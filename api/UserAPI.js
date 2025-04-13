class UserAPI extends BaseAPI {

    login = async (data, onSuccess) => {
        this.postData('user/login', data, onSuccess);
    }

}
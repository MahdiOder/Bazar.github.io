class ContentAPI extends BaseAPI {

    getAll = async (onSuccess) => {
        this.getData('content', onSuccess);
    }

    getById = async (id, onSuccess) => {
        this.getData(`content/${id}`, onSuccess);
    }

}
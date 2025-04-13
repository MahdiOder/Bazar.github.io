class CategoryAPI extends BaseAPI {

    getAll = async (onSuccess) => {
        this.getData('productCategory', onSuccess);
    }

    getById = async (id, onSuccess) => {
        this.getData(`productCategory/${id}`, onSuccess);
    }

}
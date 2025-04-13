class BlogAPI extends BaseAPI {

    getAll = async (onSuccess) => {
        this.getData('blog', onSuccess);
    }

    getById = async (id, onSuccess) => {
        this.getData(`blog/${id}`, onSuccess);
    }

}
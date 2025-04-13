class ProductAPI extends BaseAPI {

    getAll = async (pageIndex, pageSize, onSuccess) => {
        this.getData(`product?pageIndex=${pageIndex}&pageSize=${pageSize}`, onSuccess);
    }

    getById = async (id, onSuccess) => {
        this.getData(`product/${id}`, onSuccess);
    }

    getByCategoryId = async (catId, pageIndex, pageSize, onSuccess) => {
        this.getData(`product/cat/${catId}?pageIndex=${pageIndex}&pageSize=${pageSize}`, onSuccess);
    }

    getNewProducts = async (onSuccess) => {
        this.getData('product/new', onSuccess);
    }

    getPopularProducts = async (onSuccess) => {
        this.getData('product/popular', onSuccess);
    }
}
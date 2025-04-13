class InvoiceAPI extends BaseAPI {

    getAllByUserId = async (userId, pageIndex, pageSize, token, onSuccess) => {
        this.getDataWithToken(`invoice/user/${userId}?pageIndex=${pageIndex}&pageSize=${pageSize}`, token, onSuccess);
    }

    getById = async (id, onSuccess) => {
        this.getData(`blog/${id}`, onSuccess);
    }

}
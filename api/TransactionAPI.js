class TransactionAPI extends BaseAPI {

    goToPayment = async (data, onSuccess) => {
        this.postData('trx/gotoPayment', data, onSuccess);
    }
}
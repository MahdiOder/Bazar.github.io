class BaseAPI {
    getData = async (suffix, success) => {
        let url = ApiAddress.getApiURL(suffix);
        let response = await fetch(url);
        if (response.status == 200) {
            this.onSuccess(response, success);
        } else {
            this.onError();
        }
    }

    postData = async (suffix, data, success) => {
        let url = ApiAddress.getApiURL(suffix);
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status == 200) {
            this.onSuccess(response, success);
        } else {
            this.onError();
        }
    }


    getDataWithToken = async (suffix, token, success) => {
        let url = ApiAddress.getApiURL(suffix);

        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.setRequestHeader('Authorization', 'Bearer ' + token);
        req.setRequestHeader('Access-Control-Allow-Origin', '*');
        req.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                success(JSON.parse(this.responseText).data);
            }
        }
        req.send();
    }

    onSuccess = async (response, callback) => {
        let json = await response.json();
        if (json.status == "OK") {
            callback(json.data);
        } else {
            this.onError();
        }
    }
    onError = async () => {
        alert("Error on getting information from server");
    }
}
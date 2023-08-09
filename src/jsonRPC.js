class Client{

    constructor(url){
        this.url = url
    }

    async #send(method, params){
        let payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
                jsonrpc: '2.0',
                id: Math.floor(Math.random() * 5000),
                method: method,
                params:params
            })        
        };
        return fetch(this.url,payload)
            .then((response) => response.json())
            .then((data) => data.result)
            .catch((error) => {
                console.error("Error:", error);
              });
    }

    call(service, method, ...args){
        return this.#send("call", {"service":service, "method": method, "args":args})
    }
}


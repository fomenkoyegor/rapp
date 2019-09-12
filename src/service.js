class Service {
    static async get(url) {
        try {
            const res = await fetch(url);
            return await res.json();
        } catch (e) {
            throw new Error(e)
        }
    }
}

class TodoService {
    static getTodos() {
        return Service.get('https://jsonplaceholder.typicode.com/todos');
    }
}



export {TodoService}

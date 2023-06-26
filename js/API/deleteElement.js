import instance from "./instance.js";

const deleteElement = async () => {
    try {
        return await instance.delete(`/${this.id}`);
    } catch (err) {
        console.log(err)
    }
}

export default deleteElement;
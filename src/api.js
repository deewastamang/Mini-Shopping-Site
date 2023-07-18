export const getProducts = async (id) => {
    const url = id ? `https://fakestoreapi.com/products/${id}` : 'https://fakestoreapi.com/products'


    const res = await fetch(url)
    if(!res.ok) {
        throw {
            msg: 'cannot fetch data'
        }
    }
    const data = await res.json();
    return data
}
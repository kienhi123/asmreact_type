import { ProductType } from "../type/Products";
import { isAuthenticate } from "../utils/localStaroge";
import instance from "./instance";
const user = isAuthenticate();
export const list =()=> {
    const url = `products`;
    return instance.get(url)
}

export const add = (product: ProductType) => {
    const url = `/products/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const remove = (id: number) => {
    const url = `/products/${id}/${user?.user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}
export const read = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const update= (product: any) => {
    const url = `/products/${product._id}/${user?.user._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}

export const search = (search_value:any | undefined) =>{
    const url =`/search/?q=${search_value}`;
    return instance.post(url)
}

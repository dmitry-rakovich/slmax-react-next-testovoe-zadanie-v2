import { IResponse, ISearchParams } from "@/types"
const URL = 'https://api.unsplash.com/search/photos'

export const getPhotosByQuery = async ({ filter, sort, page }: ISearchParams): Promise<IResponse> => {
    const response = await fetch(`
    ${URL}/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&query=${filter}&order_by=${sort}&page=${page}`)
    const data = await response.json()
    return data
}
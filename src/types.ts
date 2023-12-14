export interface IPicture {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at?: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string;
    alt_description: string;
    urls: Urls;
    links: Links;
    tags?: ITag[]
}

export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface ITag {
    title: string;
}

export interface ISearchParams {
    filter: string;
    sort: string;
    page: number
}

export interface IResponse {
    results: IPicture[],
    total: string,
    total_pages: number
}
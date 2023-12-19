export interface IImage {
    id: number;
    alt: string;
    liked?: boolean;
    photographer?: string;
    imageSmall?: string;
    imageMedium?: string;
    ImageOriginal: string;
    src:ISrc
}

export interface ISrc{
    original:string
}


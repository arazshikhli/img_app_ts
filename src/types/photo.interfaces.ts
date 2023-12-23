export interface IData{
    next_page?:string;
    page?:number;
    per_page?:number;
    photos:IImage;
    total_result?:number
}

export interface IImage {
    alt: string;
    avg_color:string;
    height:number;
    id: number;
    liked?: boolean;
    photographer?: string;
    photographer_id:string
    photographer_url:string
    src:ISrc
    width:number
}

export interface ISrc{
    landscape:string;
    large:string;
    large2x:string;
    medium:string;
    original:string;
    portrait:string;
    smll:string;
    tinny:string;
}

export interface IUrl{
    link:string
}


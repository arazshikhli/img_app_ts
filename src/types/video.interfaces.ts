export interface IVideoData {
    page?: number;
    per_page?: number;
    total_result?: number;
    url: string;
    videos: []
}

export interface IVideo {
    id: number;
    width: number
    height: number;
    url: string;
    image: string;
    duration: string;
    user: IUser;
    video_files: IVideoFiles[]

}

export interface IVideoFiles {
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    fps:number;
    link: string
}

export interface IUser {
    id: string;
    name: string;
    url: string
}
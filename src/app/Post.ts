export interface Post {
    id?:number;
    comments: number;
    title: string;
    content: string;
    date: string;
    imageUrl: string;
    author: string;
    category: string;
}
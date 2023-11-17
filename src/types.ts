export type Post = {
    id: string;
    content: string;
    likes: number;
    image: number;
    author: User;
};

export type User = {
    id: string;
    name: string;
    position: string;
    image?: string;
};
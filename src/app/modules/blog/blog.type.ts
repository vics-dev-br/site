export interface Post
{
    id?: number;
    type?: string;
    attributes?: {
        title: string;
        blockquote: string;
        paragraphs: string[];
        conclusion: string;
    },
    relationships: {
        author: {
            data: { type: string; id: number; }
        }
    }
}

export interface People
{
    id?: number;
    type?: string;
    attributes?: {
        name: string;
    },
    relationships: {
        profile: {
            data: { type: string; id: number; }
        }
    }
}

export interface Profile
{
    id?: number;
    type?: string;
    attributes?: {
        name: string;
    }
}
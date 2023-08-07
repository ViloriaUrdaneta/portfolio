export interface WebProject {
    id: number
    title: string
    description: string
    picture: string
    techStack: string
    webLink: string
    repoLink?: string
    repoLink2?: string
}

export interface Article {
    id: number
    title: string
    body: string
    subject: string
    date: string
}

export interface Video {
    id: number
    title: string
    video: string
    tasks: string
    year: string
}
export interface Playerdto {
    id: number,
    name: string,
    janeiro: boolean,
    fevereiro: boolean
}

export interface Avulsodto {
    id: number,
    name: string,
    date: Date,
    isPaid: boolean
}

export interface ColAvulso {
    header: string,
    value: string
}

export interface Endereco {
    enderecoTipo: string,
    enderecoTitulo: string,
    logradouro: string,
    numero: number,
    complemento: string,
    cep: string,
    municipio: string,
}

export interface ObraLista {
    id: number,
    nomeOficial: string,
    arquitetosNomes: string[],
    usoOriginal: string,
    municipio: string,
    validadoProfessora: boolean,
    validadoDph: boolean
}

export interface ObraIndividual {
    id: number,
    latitude: string,
    longitude: string,
    nomeOficial: string,
    arquitetosNomes: string[],
    anoProjeto: number,
    anoConstrucao: number,
    condephaat: number,
    conpresp: number,
    iphan: number,
    usoOriginal: string,
    codigoOriginal: string,
    usoAtual: string,
    codigoAtual: string,
    statusObra: string,
    escritorio: string,
    nomeAlternativo: string,
    construtoraObra: string,
    dataUsoAtual: number,
    anoDemolicao: number,
    anoRestauro: number,
    arquitetoReformaNome: string[],
    referenciasObra: string[],
    enderecoObra: Endereco,
    validadoProfessora: boolean,
    validadoDph: boolean
}

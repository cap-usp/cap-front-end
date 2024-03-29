import { FormArray, FormControl } from "@angular/forms";

export interface Endereco {
    tipoEndereco: string,
    enderecoTitulo: string,
    logradouro: string,
    numero: number,
    complemento: string,
    cep: string,
    municipio: string,
}

export interface Obra {
    id?: number,
    autoria: number,
    escritorio: string,
    nomeOficial: string,
    nomeAlternativo: string,
    endereco : Endereco,
    anoProjeto: number,
    anoConstrucao: number,
    construtora: number,
    condephaat: number,
    conpresp: number,
    iphan: number,
    usoOriginal: string,
    codigoOriginal: string,
    usoAtual: string,
    codigoAtual: string,
    dataUsoAtual: number,
    status: string,
    anoDemolicao: number,
    anoRestauro: number,
    anoReforma: number,
    arquitetoReforma: number,
    latitude: number,
    longitude: number,
    referencias: string[],
    validadoProfessora: boolean,
    validadoDPH: boolean  
}

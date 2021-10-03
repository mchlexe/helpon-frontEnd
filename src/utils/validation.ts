export function validaEmail(email: string): boolean {
    let validate = true;
    const formatEmail = /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
    if (!email.toLowerCase().match(formatEmail)) {
      validate = false;
    }
    return validate;
  }
  
  export function validaCpf(cpf: string): boolean {
    let validate = true;
    const padraoCPF = /^\d{3}\d{3}\d{3}\d{2}$/;
    if (!cpf.toLowerCase().match(padraoCPF)) {
      validate = false;
    }
    return validate;
  }

  export function validaCNPJ(cnpj: string): boolean {
    let validate = true;
    const padraoCNPJ = /^\d{2}\d{3}\d{3}\d{4}\d{2}$/;
    if (!cnpj.toLowerCase().match(padraoCNPJ)){
        validate = false;
    }
    return validate;
  }
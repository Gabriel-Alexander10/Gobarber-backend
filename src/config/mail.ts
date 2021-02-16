interface  IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  }
}


export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'colocar_Email_Configurado_Na_AWS_Aqui@gmail.com',
      name:   'Gabriel da Alexander International'
    }
  }
} as IMailConfig;

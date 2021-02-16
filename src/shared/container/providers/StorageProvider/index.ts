import { container } from 'tsyringe';
import uploadConfig from '@config/upload';

import IStorageProvider from './models/IStorageProvider';
import DiskStorageProvider from './implementations/DiskStorageProvider';
import S3StorageProvider from './implementations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
// registerSingleton: registrara a classe para criar uma instancia e usar sempre ela quando necessario,
//   logo:  registrar a classe
// registerInstance: registrara uma instancia da classe para usar sempre ela,
//   logo:  registrar a instancia d classe com container.resolve().

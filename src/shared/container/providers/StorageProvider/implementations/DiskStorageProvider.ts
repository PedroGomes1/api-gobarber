import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  // Rename move arquivos de um lado para outro ... vou mover para a pasta uploads dentro da tmp
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath); // Stat tras informações do arquivo, se não encontrar ele dá um erro (pego no catch)
    } catch {
      return;
    }
    // Se encontrar o arquivo, eu removo
    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;

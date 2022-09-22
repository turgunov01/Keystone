import { config } from '@keystone-6/core';

import { lists } from './schema';

import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);

type ImageMode = 'local';

type ImageExtension = 'jpg' | 'png' | 'webp' | 'gif' | 'svg';

type ImageData = {
  mode: ImageMode;
  id: string;
  extension: ImageExtension;
  filesize: number;
  width: number;
  height: number;
};


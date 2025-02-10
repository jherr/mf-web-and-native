
    export type RemoteKeys = 'MyRemote/store';
    type PackageType<T> = T extends 'MyRemote/store' ? typeof import('MyRemote/store') :any;
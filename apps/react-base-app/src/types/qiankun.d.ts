// Type definitions for qiankun
declare module 'qiankun' {
  export type RegistrableApp<T extends object = {}> = {
    name: string;
    entry: string;
    container: string;
    activeRule: string;
    props?: T;
  };

  export function registerMicroApps<T extends object = {}>(
    apps: Array<RegistrableApp<T>>,
    lifeCycles?: LifeCycles<T>
  ): void;

  export function start(opts?: StartOpts): void;

  export function addGlobalUncaughtErrorHandler(
    errorHandler: OnErrorEventHandlerNonNull
  ): void;

  export type StartOpts = {
    prefetch?: 'all' | 'major' | true | false;
    sandbox?:
      | boolean
      | {
          strictStyleIsolation?: boolean;
          experimentalStyleIsolation?: boolean;
        };
    singular?: boolean | ((app: RegistrableApp<any>) => Promise<boolean>);
    excludeAssetFilter?: (assetUrl: string) => boolean;
  };

  export type LifeCycles<T extends object = {}> = {
    beforeLoad?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
    beforeMount?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
    afterMount?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
    beforeUnmount?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
    afterUnmount?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
  };

  export type LifeCycleFn<T extends object = {}> = (
    app: RegistrableApp<T>
  ) => Promise<any>;
}
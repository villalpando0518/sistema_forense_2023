import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPrueba = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prueba, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrueba = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prueba, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prueba = LazyLoading extends LazyLoadingDisabled ? EagerPrueba : LazyPrueba

export declare const Prueba: (new (init: ModelInit<Prueba>) => Prueba) & {
  copyOf(source: Prueba, mutator: (draft: MutableModel<Prueba>) => MutableModel<Prueba> | void): Prueba;
}
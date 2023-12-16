/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrueba = /* GraphQL */ `
  query GetPrueba($id: ID!) {
    getPrueba(id: $id) {
      id
      nombre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPruebas = /* GraphQL */ `
  query ListPruebas(
    $filter: ModelPruebaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPruebas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPruebas = /* GraphQL */ `
  query SyncPruebas(
    $filter: ModelPruebaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPruebas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;

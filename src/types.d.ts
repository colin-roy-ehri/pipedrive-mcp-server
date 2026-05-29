declare module 'pipedrive' {
  export class ApiClient {
    basePath: string;
    authentications: any;
    defaultHeaders: Record<string, string>;
    timeout: number;
    constructor();
  }

  export class DealsApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }

  export class PersonsApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }

  export class OrganizationsApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }

  export class PipelinesApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }

  export class ItemSearchApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }

  export class LeadsApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }

  export class ActivitiesApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }

  export class NotesApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }

  export class UsersApi {
    constructor(apiClient: ApiClient);
    [key: string]: any;
  }
}


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Move
 * 
 */
export type Move = $Result.DefaultSelection<Prisma.$MovePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  TIME_UP: 'TIME_UP',
  PLAYER_EXIT: 'PLAYER_EXIT'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const GameResult: {
  WHITE_WINS: 'WHITE_WINS',
  BLACK_WINS: 'BLACK_WINS',
  DRAW: 'DRAW'
};

export type GameResult = (typeof GameResult)[keyof typeof GameResult]


export const TimeControl: {
  TEN_MIN: 'TEN_MIN',
  FIFTEEN_MIN: 'FIFTEEN_MIN',
  THIRTY_MIN: 'THIRTY_MIN'
};

export type TimeControl = (typeof TimeControl)[keyof typeof TimeControl]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type GameResult = $Enums.GameResult

export const GameResult: typeof $Enums.GameResult

export type TimeControl = $Enums.TimeControl

export const TimeControl: typeof $Enums.TimeControl

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.move`: Exposes CRUD operations for the **Move** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moves
    * const moves = await prisma.move.findMany()
    * ```
    */
  get move(): Prisma.MoveDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Game: 'Game',
    Move: 'Move'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "game" | "move"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Move: {
        payload: Prisma.$MovePayload<ExtArgs>
        fields: Prisma.MoveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          findFirst: {
            args: Prisma.MoveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          findMany: {
            args: Prisma.MoveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          create: {
            args: Prisma.MoveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          createMany: {
            args: Prisma.MoveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          delete: {
            args: Prisma.MoveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          update: {
            args: Prisma.MoveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          deleteMany: {
            args: Prisma.MoveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          upsert: {
            args: Prisma.MoveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          aggregate: {
            args: Prisma.MoveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMove>
          }
          groupBy: {
            args: Prisma.MoveGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoveGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoveCountArgs<ExtArgs>
            result: $Utils.Optional<MoveCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    game?: GameOmit
    move?: MoveOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gamesAsWhite: number
    gamesAsBlack: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesAsWhite?: boolean | UserCountOutputTypeCountGamesAsWhiteArgs
    gamesAsBlack?: boolean | UserCountOutputTypeCountGamesAsBlackArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsWhiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsBlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    moves: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moves?: boolean | GameCountOutputTypeCountMovesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountMovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    profilePic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    profilePic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    profilePic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    profilePic: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gamesAsWhite?: boolean | User$gamesAsWhiteArgs<ExtArgs>
    gamesAsBlack?: boolean | User$gamesAsBlackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "profilePic" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesAsWhite?: boolean | User$gamesAsWhiteArgs<ExtArgs>
    gamesAsBlack?: boolean | User$gamesAsBlackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gamesAsWhite: Prisma.$GamePayload<ExtArgs>[]
      gamesAsBlack: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      profilePic: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gamesAsWhite<T extends User$gamesAsWhiteArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesAsWhiteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesAsBlack<T extends User$gamesAsBlackArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesAsBlackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePic: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.gamesAsWhite
   */
  export type User$gamesAsWhiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gamesAsBlack
   */
  export type User$gamesAsBlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    whitePlayerId: string | null
    blackPlayerId: string | null
    status: $Enums.GameStatus | null
    result: $Enums.GameResult | null
    currentFen: string | null
    timeControl: $Enums.TimeControl | null
    startAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    whitePlayerId: string | null
    blackPlayerId: string | null
    status: $Enums.GameStatus | null
    result: $Enums.GameResult | null
    currentFen: string | null
    timeControl: $Enums.TimeControl | null
    startAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    gameId: number
    whitePlayerId: number
    blackPlayerId: number
    status: number
    result: number
    currentFen: number
    timeControl: number
    startAt: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    gameId?: true
    whitePlayerId?: true
    blackPlayerId?: true
    status?: true
    result?: true
    currentFen?: true
    timeControl?: true
    startAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    gameId?: true
    whitePlayerId?: true
    blackPlayerId?: true
    status?: true
    result?: true
    currentFen?: true
    timeControl?: true
    startAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    gameId?: true
    whitePlayerId?: true
    blackPlayerId?: true
    status?: true
    result?: true
    currentFen?: true
    timeControl?: true
    startAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    gameId: string
    whitePlayerId: string
    blackPlayerId: string
    status: $Enums.GameStatus
    result: $Enums.GameResult | null
    currentFen: string
    timeControl: $Enums.TimeControl
    startAt: Date
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    whitePlayerId?: boolean
    blackPlayerId?: boolean
    status?: boolean
    result?: boolean
    currentFen?: boolean
    timeControl?: boolean
    startAt?: boolean
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    moves?: boolean | Game$movesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    whitePlayerId?: boolean
    blackPlayerId?: boolean
    status?: boolean
    result?: boolean
    currentFen?: boolean
    timeControl?: boolean
    startAt?: boolean
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    whitePlayerId?: boolean
    blackPlayerId?: boolean
    status?: boolean
    result?: boolean
    currentFen?: boolean
    timeControl?: boolean
    startAt?: boolean
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    gameId?: boolean
    whitePlayerId?: boolean
    blackPlayerId?: boolean
    status?: boolean
    result?: boolean
    currentFen?: boolean
    timeControl?: boolean
    startAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "whitePlayerId" | "blackPlayerId" | "status" | "result" | "currentFen" | "timeControl" | "startAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    moves?: boolean | Game$movesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      whitePlayer: Prisma.$UserPayload<ExtArgs>
      blackPlayer: Prisma.$UserPayload<ExtArgs>
      moves: Prisma.$MovePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      whitePlayerId: string
      blackPlayerId: string
      status: $Enums.GameStatus
      result: $Enums.GameResult | null
      currentFen: string
      timeControl: $Enums.TimeControl
      startAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    whitePlayer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blackPlayer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    moves<T extends Game$movesArgs<ExtArgs> = {}>(args?: Subset<T, Game$movesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly gameId: FieldRef<"Game", 'String'>
    readonly whitePlayerId: FieldRef<"Game", 'String'>
    readonly blackPlayerId: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly result: FieldRef<"Game", 'GameResult'>
    readonly currentFen: FieldRef<"Game", 'String'>
    readonly timeControl: FieldRef<"Game", 'TimeControl'>
    readonly startAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.moves
   */
  export type Game$movesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    cursor?: MoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Move
   */

  export type AggregateMove = {
    _count: MoveCountAggregateOutputType | null
    _avg: MoveAvgAggregateOutputType | null
    _sum: MoveSumAggregateOutputType | null
    _min: MoveMinAggregateOutputType | null
    _max: MoveMaxAggregateOutputType | null
  }

  export type MoveAvgAggregateOutputType = {
    moveNumber: number | null
    timeTaken: number | null
  }

  export type MoveSumAggregateOutputType = {
    moveNumber: number | null
    timeTaken: number | null
  }

  export type MoveMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    move: string | null
    moveNumber: number | null
    timeTaken: number | null
  }

  export type MoveMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    move: string | null
    moveNumber: number | null
    timeTaken: number | null
  }

  export type MoveCountAggregateOutputType = {
    id: number
    gameId: number
    move: number
    moveNumber: number
    timeTaken: number
    _all: number
  }


  export type MoveAvgAggregateInputType = {
    moveNumber?: true
    timeTaken?: true
  }

  export type MoveSumAggregateInputType = {
    moveNumber?: true
    timeTaken?: true
  }

  export type MoveMinAggregateInputType = {
    id?: true
    gameId?: true
    move?: true
    moveNumber?: true
    timeTaken?: true
  }

  export type MoveMaxAggregateInputType = {
    id?: true
    gameId?: true
    move?: true
    moveNumber?: true
    timeTaken?: true
  }

  export type MoveCountAggregateInputType = {
    id?: true
    gameId?: true
    move?: true
    moveNumber?: true
    timeTaken?: true
    _all?: true
  }

  export type MoveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Move to aggregate.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moves
    **/
    _count?: true | MoveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoveMaxAggregateInputType
  }

  export type GetMoveAggregateType<T extends MoveAggregateArgs> = {
        [P in keyof T & keyof AggregateMove]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMove[P]>
      : GetScalarType<T[P], AggregateMove[P]>
  }




  export type MoveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithAggregationInput | MoveOrderByWithAggregationInput[]
    by: MoveScalarFieldEnum[] | MoveScalarFieldEnum
    having?: MoveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoveCountAggregateInputType | true
    _avg?: MoveAvgAggregateInputType
    _sum?: MoveSumAggregateInputType
    _min?: MoveMinAggregateInputType
    _max?: MoveMaxAggregateInputType
  }

  export type MoveGroupByOutputType = {
    id: string
    gameId: string
    move: string
    moveNumber: number
    timeTaken: number
    _count: MoveCountAggregateOutputType | null
    _avg: MoveAvgAggregateOutputType | null
    _sum: MoveSumAggregateOutputType | null
    _min: MoveMinAggregateOutputType | null
    _max: MoveMaxAggregateOutputType | null
  }

  type GetMoveGroupByPayload<T extends MoveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoveGroupByOutputType[P]>
            : GetScalarType<T[P], MoveGroupByOutputType[P]>
        }
      >
    >


  export type MoveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    move?: boolean
    moveNumber?: boolean
    timeTaken?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    move?: boolean
    moveNumber?: boolean
    timeTaken?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    move?: boolean
    moveNumber?: boolean
    timeTaken?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectScalar = {
    id?: boolean
    gameId?: boolean
    move?: boolean
    moveNumber?: boolean
    timeTaken?: boolean
  }

  export type MoveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "move" | "moveNumber" | "timeTaken", ExtArgs["result"]["move"]>
  export type MoveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type MoveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type MoveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $MovePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Move"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      move: string
      moveNumber: number
      timeTaken: number
    }, ExtArgs["result"]["move"]>
    composites: {}
  }

  type MoveGetPayload<S extends boolean | null | undefined | MoveDefaultArgs> = $Result.GetResult<Prisma.$MovePayload, S>

  type MoveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoveCountAggregateInputType | true
    }

  export interface MoveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Move'], meta: { name: 'Move' } }
    /**
     * Find zero or one Move that matches the filter.
     * @param {MoveFindUniqueArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoveFindUniqueArgs>(args: SelectSubset<T, MoveFindUniqueArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Move that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoveFindUniqueOrThrowArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoveFindUniqueOrThrowArgs>(args: SelectSubset<T, MoveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Move that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindFirstArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoveFindFirstArgs>(args?: SelectSubset<T, MoveFindFirstArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Move that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindFirstOrThrowArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoveFindFirstOrThrowArgs>(args?: SelectSubset<T, MoveFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moves
     * const moves = await prisma.move.findMany()
     * 
     * // Get first 10 Moves
     * const moves = await prisma.move.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moveWithIdOnly = await prisma.move.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoveFindManyArgs>(args?: SelectSubset<T, MoveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Move.
     * @param {MoveCreateArgs} args - Arguments to create a Move.
     * @example
     * // Create one Move
     * const Move = await prisma.move.create({
     *   data: {
     *     // ... data to create a Move
     *   }
     * })
     * 
     */
    create<T extends MoveCreateArgs>(args: SelectSubset<T, MoveCreateArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moves.
     * @param {MoveCreateManyArgs} args - Arguments to create many Moves.
     * @example
     * // Create many Moves
     * const move = await prisma.move.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoveCreateManyArgs>(args?: SelectSubset<T, MoveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moves and returns the data saved in the database.
     * @param {MoveCreateManyAndReturnArgs} args - Arguments to create many Moves.
     * @example
     * // Create many Moves
     * const move = await prisma.move.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moves and only return the `id`
     * const moveWithIdOnly = await prisma.move.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoveCreateManyAndReturnArgs>(args?: SelectSubset<T, MoveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Move.
     * @param {MoveDeleteArgs} args - Arguments to delete one Move.
     * @example
     * // Delete one Move
     * const Move = await prisma.move.delete({
     *   where: {
     *     // ... filter to delete one Move
     *   }
     * })
     * 
     */
    delete<T extends MoveDeleteArgs>(args: SelectSubset<T, MoveDeleteArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Move.
     * @param {MoveUpdateArgs} args - Arguments to update one Move.
     * @example
     * // Update one Move
     * const move = await prisma.move.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoveUpdateArgs>(args: SelectSubset<T, MoveUpdateArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moves.
     * @param {MoveDeleteManyArgs} args - Arguments to filter Moves to delete.
     * @example
     * // Delete a few Moves
     * const { count } = await prisma.move.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoveDeleteManyArgs>(args?: SelectSubset<T, MoveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moves
     * const move = await prisma.move.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoveUpdateManyArgs>(args: SelectSubset<T, MoveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moves and returns the data updated in the database.
     * @param {MoveUpdateManyAndReturnArgs} args - Arguments to update many Moves.
     * @example
     * // Update many Moves
     * const move = await prisma.move.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moves and only return the `id`
     * const moveWithIdOnly = await prisma.move.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoveUpdateManyAndReturnArgs>(args: SelectSubset<T, MoveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Move.
     * @param {MoveUpsertArgs} args - Arguments to update or create a Move.
     * @example
     * // Update or create a Move
     * const move = await prisma.move.upsert({
     *   create: {
     *     // ... data to create a Move
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Move we want to update
     *   }
     * })
     */
    upsert<T extends MoveUpsertArgs>(args: SelectSubset<T, MoveUpsertArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveCountArgs} args - Arguments to filter Moves to count.
     * @example
     * // Count the number of Moves
     * const count = await prisma.move.count({
     *   where: {
     *     // ... the filter for the Moves we want to count
     *   }
     * })
    **/
    count<T extends MoveCountArgs>(
      args?: Subset<T, MoveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoveAggregateArgs>(args: Subset<T, MoveAggregateArgs>): Prisma.PrismaPromise<GetMoveAggregateType<T>>

    /**
     * Group by Move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoveGroupByArgs['orderBy'] }
        : { orderBy?: MoveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Move model
   */
  readonly fields: MoveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Move.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Move model
   */ 
  interface MoveFieldRefs {
    readonly id: FieldRef<"Move", 'String'>
    readonly gameId: FieldRef<"Move", 'String'>
    readonly move: FieldRef<"Move", 'String'>
    readonly moveNumber: FieldRef<"Move", 'Int'>
    readonly timeTaken: FieldRef<"Move", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Move findUnique
   */
  export type MoveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move findUniqueOrThrow
   */
  export type MoveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move findFirst
   */
  export type MoveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moves.
     */
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move findFirstOrThrow
   */
  export type MoveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moves.
     */
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move findMany
   */
  export type MoveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Moves to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move create
   */
  export type MoveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The data needed to create a Move.
     */
    data: XOR<MoveCreateInput, MoveUncheckedCreateInput>
  }

  /**
   * Move createMany
   */
  export type MoveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moves.
     */
    data: MoveCreateManyInput | MoveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Move createManyAndReturn
   */
  export type MoveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * The data used to create many Moves.
     */
    data: MoveCreateManyInput | MoveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Move update
   */
  export type MoveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The data needed to update a Move.
     */
    data: XOR<MoveUpdateInput, MoveUncheckedUpdateInput>
    /**
     * Choose, which Move to update.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move updateMany
   */
  export type MoveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moves.
     */
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyInput>
    /**
     * Filter which Moves to update
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to update.
     */
    limit?: number
  }

  /**
   * Move updateManyAndReturn
   */
  export type MoveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * The data used to update Moves.
     */
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyInput>
    /**
     * Filter which Moves to update
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Move upsert
   */
  export type MoveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The filter to search for the Move to update in case it exists.
     */
    where: MoveWhereUniqueInput
    /**
     * In case the Move found by the `where` argument doesn't exist, create a new Move with this data.
     */
    create: XOR<MoveCreateInput, MoveUncheckedCreateInput>
    /**
     * In case the Move was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoveUpdateInput, MoveUncheckedUpdateInput>
  }

  /**
   * Move delete
   */
  export type MoveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter which Move to delete.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move deleteMany
   */
  export type MoveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moves to delete
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to delete.
     */
    limit?: number
  }

  /**
   * Move without action
   */
  export type MoveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    profilePic: 'profilePic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    whitePlayerId: 'whitePlayerId',
    blackPlayerId: 'blackPlayerId',
    status: 'status',
    result: 'result',
    currentFen: 'currentFen',
    timeControl: 'timeControl',
    startAt: 'startAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const MoveScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    move: 'move',
    moveNumber: 'moveNumber',
    timeTaken: 'timeTaken'
  };

  export type MoveScalarFieldEnum = (typeof MoveScalarFieldEnum)[keyof typeof MoveScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'GameResult'
   */
  export type EnumGameResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameResult'>
    


  /**
   * Reference to a field of type 'GameResult[]'
   */
  export type ListEnumGameResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameResult[]'>
    


  /**
   * Reference to a field of type 'TimeControl'
   */
  export type EnumTimeControlFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeControl'>
    


  /**
   * Reference to a field of type 'TimeControl[]'
   */
  export type ListEnumTimeControlFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeControl[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePic?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gamesAsWhite?: GameListRelationFilter
    gamesAsBlack?: GameListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gamesAsWhite?: GameOrderByRelationAggregateInput
    gamesAsBlack?: GameOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    profilePic?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gamesAsWhite?: GameListRelationFilter
    gamesAsBlack?: GameListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profilePic?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    gameId?: StringFilter<"Game"> | string
    whitePlayerId?: StringFilter<"Game"> | string
    blackPlayerId?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    result?: EnumGameResultNullableFilter<"Game"> | $Enums.GameResult | null
    currentFen?: StringFilter<"Game"> | string
    timeControl?: EnumTimeControlFilter<"Game"> | $Enums.TimeControl
    startAt?: DateTimeFilter<"Game"> | Date | string
    whitePlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    blackPlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    moves?: MoveListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    whitePlayerId?: SortOrder
    blackPlayerId?: SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    currentFen?: SortOrder
    timeControl?: SortOrder
    startAt?: SortOrder
    whitePlayer?: UserOrderByWithRelationInput
    blackPlayer?: UserOrderByWithRelationInput
    moves?: MoveOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    gameId?: StringFilter<"Game"> | string
    whitePlayerId?: StringFilter<"Game"> | string
    blackPlayerId?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    result?: EnumGameResultNullableFilter<"Game"> | $Enums.GameResult | null
    currentFen?: StringFilter<"Game"> | string
    timeControl?: EnumTimeControlFilter<"Game"> | $Enums.TimeControl
    startAt?: DateTimeFilter<"Game"> | Date | string
    whitePlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    blackPlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    moves?: MoveListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    whitePlayerId?: SortOrder
    blackPlayerId?: SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    currentFen?: SortOrder
    timeControl?: SortOrder
    startAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    gameId?: StringWithAggregatesFilter<"Game"> | string
    whitePlayerId?: StringWithAggregatesFilter<"Game"> | string
    blackPlayerId?: StringWithAggregatesFilter<"Game"> | string
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    result?: EnumGameResultNullableWithAggregatesFilter<"Game"> | $Enums.GameResult | null
    currentFen?: StringWithAggregatesFilter<"Game"> | string
    timeControl?: EnumTimeControlWithAggregatesFilter<"Game"> | $Enums.TimeControl
    startAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type MoveWhereInput = {
    AND?: MoveWhereInput | MoveWhereInput[]
    OR?: MoveWhereInput[]
    NOT?: MoveWhereInput | MoveWhereInput[]
    id?: StringFilter<"Move"> | string
    gameId?: StringFilter<"Move"> | string
    move?: StringFilter<"Move"> | string
    moveNumber?: IntFilter<"Move"> | number
    timeTaken?: FloatFilter<"Move"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type MoveOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    timeTaken?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type MoveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoveWhereInput | MoveWhereInput[]
    OR?: MoveWhereInput[]
    NOT?: MoveWhereInput | MoveWhereInput[]
    gameId?: StringFilter<"Move"> | string
    move?: StringFilter<"Move"> | string
    moveNumber?: IntFilter<"Move"> | number
    timeTaken?: FloatFilter<"Move"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type MoveOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    timeTaken?: SortOrder
    _count?: MoveCountOrderByAggregateInput
    _avg?: MoveAvgOrderByAggregateInput
    _max?: MoveMaxOrderByAggregateInput
    _min?: MoveMinOrderByAggregateInput
    _sum?: MoveSumOrderByAggregateInput
  }

  export type MoveScalarWhereWithAggregatesInput = {
    AND?: MoveScalarWhereWithAggregatesInput | MoveScalarWhereWithAggregatesInput[]
    OR?: MoveScalarWhereWithAggregatesInput[]
    NOT?: MoveScalarWhereWithAggregatesInput | MoveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Move"> | string
    gameId?: StringWithAggregatesFilter<"Move"> | string
    move?: StringWithAggregatesFilter<"Move"> | string
    moveNumber?: IntWithAggregatesFilter<"Move"> | number
    timeTaken?: FloatWithAggregatesFilter<"Move"> | number
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    gameId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
    whitePlayer: UserCreateNestedOneWithoutGamesAsWhiteInput
    blackPlayer: UserCreateNestedOneWithoutGamesAsBlackInput
    moves?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    gameId: string
    whitePlayerId: string
    blackPlayerId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
    moves?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whitePlayer?: UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGamesAsBlackNestedInput
    moves?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moves?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    gameId: string
    whitePlayerId: string
    blackPlayerId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveCreateInput = {
    id?: string
    move: string
    moveNumber: number
    timeTaken: number
    game: GameCreateNestedOneWithoutMovesInput
  }

  export type MoveUncheckedCreateInput = {
    id?: string
    gameId: string
    move: string
    moveNumber: number
    timeTaken: number
  }

  export type MoveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    timeTaken?: FloatFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutMovesNestedInput
  }

  export type MoveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    timeTaken?: FloatFieldUpdateOperationsInput | number
  }

  export type MoveCreateManyInput = {
    id?: string
    gameId: string
    move: string
    moveNumber: number
    timeTaken: number
  }

  export type MoveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    timeTaken?: FloatFieldUpdateOperationsInput | number
  }

  export type MoveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    timeTaken?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type EnumGameResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGameResultNullableFilter<$PrismaModel> | $Enums.GameResult | null
  }

  export type EnumTimeControlFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeControl | EnumTimeControlFieldRefInput<$PrismaModel>
    in?: $Enums.TimeControl[] | ListEnumTimeControlFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeControl[] | ListEnumTimeControlFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeControlFilter<$PrismaModel> | $Enums.TimeControl
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MoveListRelationFilter = {
    every?: MoveWhereInput
    some?: MoveWhereInput
    none?: MoveWhereInput
  }

  export type MoveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    whitePlayerId?: SortOrder
    blackPlayerId?: SortOrder
    status?: SortOrder
    result?: SortOrder
    currentFen?: SortOrder
    timeControl?: SortOrder
    startAt?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    whitePlayerId?: SortOrder
    blackPlayerId?: SortOrder
    status?: SortOrder
    result?: SortOrder
    currentFen?: SortOrder
    timeControl?: SortOrder
    startAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    whitePlayerId?: SortOrder
    blackPlayerId?: SortOrder
    status?: SortOrder
    result?: SortOrder
    currentFen?: SortOrder
    timeControl?: SortOrder
    startAt?: SortOrder
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type EnumGameResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGameResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.GameResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGameResultNullableFilter<$PrismaModel>
    _max?: NestedEnumGameResultNullableFilter<$PrismaModel>
  }

  export type EnumTimeControlWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeControl | EnumTimeControlFieldRefInput<$PrismaModel>
    in?: $Enums.TimeControl[] | ListEnumTimeControlFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeControl[] | ListEnumTimeControlFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeControlWithAggregatesFilter<$PrismaModel> | $Enums.TimeControl
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeControlFilter<$PrismaModel>
    _max?: NestedEnumTimeControlFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type MoveCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    timeTaken?: SortOrder
  }

  export type MoveAvgOrderByAggregateInput = {
    moveNumber?: SortOrder
    timeTaken?: SortOrder
  }

  export type MoveMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    timeTaken?: SortOrder
  }

  export type MoveMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    timeTaken?: SortOrder
  }

  export type MoveSumOrderByAggregateInput = {
    moveNumber?: SortOrder
    timeTaken?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GameCreateNestedManyWithoutWhitePlayerInput = {
    create?: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput> | GameCreateWithoutWhitePlayerInput[] | GameUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWhitePlayerInput | GameCreateOrConnectWithoutWhitePlayerInput[]
    createMany?: GameCreateManyWhitePlayerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutBlackPlayerInput = {
    create?: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput> | GameCreateWithoutBlackPlayerInput[] | GameUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutBlackPlayerInput | GameCreateOrConnectWithoutBlackPlayerInput[]
    createMany?: GameCreateManyBlackPlayerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutWhitePlayerInput = {
    create?: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput> | GameCreateWithoutWhitePlayerInput[] | GameUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWhitePlayerInput | GameCreateOrConnectWithoutWhitePlayerInput[]
    createMany?: GameCreateManyWhitePlayerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutBlackPlayerInput = {
    create?: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput> | GameCreateWithoutBlackPlayerInput[] | GameUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutBlackPlayerInput | GameCreateOrConnectWithoutBlackPlayerInput[]
    createMany?: GameCreateManyBlackPlayerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameUpdateManyWithoutWhitePlayerNestedInput = {
    create?: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput> | GameCreateWithoutWhitePlayerInput[] | GameUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWhitePlayerInput | GameCreateOrConnectWithoutWhitePlayerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWhitePlayerInput | GameUpsertWithWhereUniqueWithoutWhitePlayerInput[]
    createMany?: GameCreateManyWhitePlayerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWhitePlayerInput | GameUpdateWithWhereUniqueWithoutWhitePlayerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWhitePlayerInput | GameUpdateManyWithWhereWithoutWhitePlayerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutBlackPlayerNestedInput = {
    create?: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput> | GameCreateWithoutBlackPlayerInput[] | GameUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutBlackPlayerInput | GameCreateOrConnectWithoutBlackPlayerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutBlackPlayerInput | GameUpsertWithWhereUniqueWithoutBlackPlayerInput[]
    createMany?: GameCreateManyBlackPlayerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutBlackPlayerInput | GameUpdateWithWhereUniqueWithoutBlackPlayerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutBlackPlayerInput | GameUpdateManyWithWhereWithoutBlackPlayerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutWhitePlayerNestedInput = {
    create?: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput> | GameCreateWithoutWhitePlayerInput[] | GameUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWhitePlayerInput | GameCreateOrConnectWithoutWhitePlayerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWhitePlayerInput | GameUpsertWithWhereUniqueWithoutWhitePlayerInput[]
    createMany?: GameCreateManyWhitePlayerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWhitePlayerInput | GameUpdateWithWhereUniqueWithoutWhitePlayerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWhitePlayerInput | GameUpdateManyWithWhereWithoutWhitePlayerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutBlackPlayerNestedInput = {
    create?: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput> | GameCreateWithoutBlackPlayerInput[] | GameUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutBlackPlayerInput | GameCreateOrConnectWithoutBlackPlayerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutBlackPlayerInput | GameUpsertWithWhereUniqueWithoutBlackPlayerInput[]
    createMany?: GameCreateManyBlackPlayerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutBlackPlayerInput | GameUpdateWithWhereUniqueWithoutBlackPlayerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutBlackPlayerInput | GameUpdateManyWithWhereWithoutBlackPlayerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGamesAsWhiteInput = {
    create?: XOR<UserCreateWithoutGamesAsWhiteInput, UserUncheckedCreateWithoutGamesAsWhiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsWhiteInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesAsBlackInput = {
    create?: XOR<UserCreateWithoutGamesAsBlackInput, UserUncheckedCreateWithoutGamesAsBlackInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsBlackInput
    connect?: UserWhereUniqueInput
  }

  export type MoveCreateNestedManyWithoutGameInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type MoveUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type NullableEnumGameResultFieldUpdateOperationsInput = {
    set?: $Enums.GameResult | null
  }

  export type EnumTimeControlFieldUpdateOperationsInput = {
    set?: $Enums.TimeControl
  }

  export type UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput = {
    create?: XOR<UserCreateWithoutGamesAsWhiteInput, UserUncheckedCreateWithoutGamesAsWhiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsWhiteInput
    upsert?: UserUpsertWithoutGamesAsWhiteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsWhiteInput, UserUpdateWithoutGamesAsWhiteInput>, UserUncheckedUpdateWithoutGamesAsWhiteInput>
  }

  export type UserUpdateOneRequiredWithoutGamesAsBlackNestedInput = {
    create?: XOR<UserCreateWithoutGamesAsBlackInput, UserUncheckedCreateWithoutGamesAsBlackInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsBlackInput
    upsert?: UserUpsertWithoutGamesAsBlackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsBlackInput, UserUpdateWithoutGamesAsBlackInput>, UserUncheckedUpdateWithoutGamesAsBlackInput>
  }

  export type MoveUpdateManyWithoutGameNestedInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutGameInput | MoveUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutGameInput | MoveUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutGameInput | MoveUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type MoveUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutGameInput | MoveUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutGameInput | MoveUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutGameInput | MoveUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutMovesInput = {
    create?: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    connectOrCreate?: GameCreateOrConnectWithoutMovesInput
    connect?: GameWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUpdateOneRequiredWithoutMovesNestedInput = {
    create?: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    connectOrCreate?: GameCreateOrConnectWithoutMovesInput
    upsert?: GameUpsertWithoutMovesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutMovesInput, GameUpdateWithoutMovesInput>, GameUncheckedUpdateWithoutMovesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedEnumGameResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGameResultNullableFilter<$PrismaModel> | $Enums.GameResult | null
  }

  export type NestedEnumTimeControlFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeControl | EnumTimeControlFieldRefInput<$PrismaModel>
    in?: $Enums.TimeControl[] | ListEnumTimeControlFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeControl[] | ListEnumTimeControlFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeControlFilter<$PrismaModel> | $Enums.TimeControl
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedEnumGameResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGameResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.GameResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGameResultNullableFilter<$PrismaModel>
    _max?: NestedEnumGameResultNullableFilter<$PrismaModel>
  }

  export type NestedEnumTimeControlWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeControl | EnumTimeControlFieldRefInput<$PrismaModel>
    in?: $Enums.TimeControl[] | ListEnumTimeControlFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeControl[] | ListEnumTimeControlFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeControlWithAggregatesFilter<$PrismaModel> | $Enums.TimeControl
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeControlFilter<$PrismaModel>
    _max?: NestedEnumTimeControlFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GameCreateWithoutWhitePlayerInput = {
    id?: string
    gameId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
    blackPlayer: UserCreateNestedOneWithoutGamesAsBlackInput
    moves?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutWhitePlayerInput = {
    id?: string
    gameId: string
    blackPlayerId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
    moves?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutWhitePlayerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput>
  }

  export type GameCreateManyWhitePlayerInputEnvelope = {
    data: GameCreateManyWhitePlayerInput | GameCreateManyWhitePlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutBlackPlayerInput = {
    id?: string
    gameId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
    whitePlayer: UserCreateNestedOneWithoutGamesAsWhiteInput
    moves?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutBlackPlayerInput = {
    id?: string
    gameId: string
    whitePlayerId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
    moves?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutBlackPlayerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput>
  }

  export type GameCreateManyBlackPlayerInputEnvelope = {
    data: GameCreateManyBlackPlayerInput | GameCreateManyBlackPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutWhitePlayerInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutWhitePlayerInput, GameUncheckedUpdateWithoutWhitePlayerInput>
    create: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput>
  }

  export type GameUpdateWithWhereUniqueWithoutWhitePlayerInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutWhitePlayerInput, GameUncheckedUpdateWithoutWhitePlayerInput>
  }

  export type GameUpdateManyWithWhereWithoutWhitePlayerInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutWhitePlayerInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    gameId?: StringFilter<"Game"> | string
    whitePlayerId?: StringFilter<"Game"> | string
    blackPlayerId?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    result?: EnumGameResultNullableFilter<"Game"> | $Enums.GameResult | null
    currentFen?: StringFilter<"Game"> | string
    timeControl?: EnumTimeControlFilter<"Game"> | $Enums.TimeControl
    startAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type GameUpsertWithWhereUniqueWithoutBlackPlayerInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutBlackPlayerInput, GameUncheckedUpdateWithoutBlackPlayerInput>
    create: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput>
  }

  export type GameUpdateWithWhereUniqueWithoutBlackPlayerInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutBlackPlayerInput, GameUncheckedUpdateWithoutBlackPlayerInput>
  }

  export type GameUpdateManyWithWhereWithoutBlackPlayerInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutBlackPlayerInput>
  }

  export type UserCreateWithoutGamesAsWhiteInput = {
    id?: string
    username: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
  }

  export type UserUncheckedCreateWithoutGamesAsWhiteInput = {
    id?: string
    username: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
  }

  export type UserCreateOrConnectWithoutGamesAsWhiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsWhiteInput, UserUncheckedCreateWithoutGamesAsWhiteInput>
  }

  export type UserCreateWithoutGamesAsBlackInput = {
    id?: string
    username: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
  }

  export type UserUncheckedCreateWithoutGamesAsBlackInput = {
    id?: string
    username: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
  }

  export type UserCreateOrConnectWithoutGamesAsBlackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsBlackInput, UserUncheckedCreateWithoutGamesAsBlackInput>
  }

  export type MoveCreateWithoutGameInput = {
    id?: string
    move: string
    moveNumber: number
    timeTaken: number
  }

  export type MoveUncheckedCreateWithoutGameInput = {
    id?: string
    move: string
    moveNumber: number
    timeTaken: number
  }

  export type MoveCreateOrConnectWithoutGameInput = {
    where: MoveWhereUniqueInput
    create: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput>
  }

  export type MoveCreateManyGameInputEnvelope = {
    data: MoveCreateManyGameInput | MoveCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesAsWhiteInput = {
    update: XOR<UserUpdateWithoutGamesAsWhiteInput, UserUncheckedUpdateWithoutGamesAsWhiteInput>
    create: XOR<UserCreateWithoutGamesAsWhiteInput, UserUncheckedCreateWithoutGamesAsWhiteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsWhiteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsWhiteInput, UserUncheckedUpdateWithoutGamesAsWhiteInput>
  }

  export type UserUpdateWithoutGamesAsWhiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsWhiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
  }

  export type UserUpsertWithoutGamesAsBlackInput = {
    update: XOR<UserUpdateWithoutGamesAsBlackInput, UserUncheckedUpdateWithoutGamesAsBlackInput>
    create: XOR<UserCreateWithoutGamesAsBlackInput, UserUncheckedCreateWithoutGamesAsBlackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsBlackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsBlackInput, UserUncheckedUpdateWithoutGamesAsBlackInput>
  }

  export type UserUpdateWithoutGamesAsBlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsBlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
  }

  export type MoveUpsertWithWhereUniqueWithoutGameInput = {
    where: MoveWhereUniqueInput
    update: XOR<MoveUpdateWithoutGameInput, MoveUncheckedUpdateWithoutGameInput>
    create: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput>
  }

  export type MoveUpdateWithWhereUniqueWithoutGameInput = {
    where: MoveWhereUniqueInput
    data: XOR<MoveUpdateWithoutGameInput, MoveUncheckedUpdateWithoutGameInput>
  }

  export type MoveUpdateManyWithWhereWithoutGameInput = {
    where: MoveScalarWhereInput
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyWithoutGameInput>
  }

  export type MoveScalarWhereInput = {
    AND?: MoveScalarWhereInput | MoveScalarWhereInput[]
    OR?: MoveScalarWhereInput[]
    NOT?: MoveScalarWhereInput | MoveScalarWhereInput[]
    id?: StringFilter<"Move"> | string
    gameId?: StringFilter<"Move"> | string
    move?: StringFilter<"Move"> | string
    moveNumber?: IntFilter<"Move"> | number
    timeTaken?: FloatFilter<"Move"> | number
  }

  export type GameCreateWithoutMovesInput = {
    id?: string
    gameId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
    whitePlayer: UserCreateNestedOneWithoutGamesAsWhiteInput
    blackPlayer: UserCreateNestedOneWithoutGamesAsBlackInput
  }

  export type GameUncheckedCreateWithoutMovesInput = {
    id?: string
    gameId: string
    whitePlayerId: string
    blackPlayerId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
  }

  export type GameCreateOrConnectWithoutMovesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
  }

  export type GameUpsertWithoutMovesInput = {
    update: XOR<GameUpdateWithoutMovesInput, GameUncheckedUpdateWithoutMovesInput>
    create: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutMovesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutMovesInput, GameUncheckedUpdateWithoutMovesInput>
  }

  export type GameUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whitePlayer?: UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGamesAsBlackNestedInput
  }

  export type GameUncheckedUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateManyWhitePlayerInput = {
    id?: string
    gameId: string
    blackPlayerId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
  }

  export type GameCreateManyBlackPlayerInput = {
    id?: string
    gameId: string
    whitePlayerId: string
    status: $Enums.GameStatus
    result?: $Enums.GameResult | null
    currentFen?: string
    timeControl: $Enums.TimeControl
    startAt?: Date | string
  }

  export type GameUpdateWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blackPlayer?: UserUpdateOneRequiredWithoutGamesAsBlackNestedInput
    moves?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moves?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whitePlayer?: UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput
    moves?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moves?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    currentFen?: StringFieldUpdateOperationsInput | string
    timeControl?: EnumTimeControlFieldUpdateOperationsInput | $Enums.TimeControl
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveCreateManyGameInput = {
    id?: string
    move: string
    moveNumber: number
    timeTaken: number
  }

  export type MoveUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    timeTaken?: FloatFieldUpdateOperationsInput | number
  }

  export type MoveUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    timeTaken?: FloatFieldUpdateOperationsInput | number
  }

  export type MoveUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    timeTaken?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
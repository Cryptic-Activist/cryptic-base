// Postgres
// User
export interface ICreateUser {
  profile_image_id: BigInt;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  private_keys: string[];
}

export interface IUpdateUser {
  id?: BigInt;
  profile_image_id?: BigInt;
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
  private_keys?: string[];
  is_verified?: boolean;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IDeleteUser {
  id?: BigInt;
  profile_image_id?: BigInt;
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
  private_keys?: string[];
  is_verified?: boolean;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IGetUser {
  id?: BigInt;
  profile_image_id?: BigInt;
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
  private_keys?: string[];
  is_verified?: boolean;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IUserReturn {
  id: BigInt;
  profile_image_id: BigInt;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  private_keys: string[];
  is_verified: boolean;
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: null | Date;
  languages?: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: null | Date;
  }[];
  profile_image?: {
    id: BigInt;
    name: string;
    key: string;
    url: string;
    created_at: Date;
    updated_at: null | Date;
  };
}

// Profile Image
export interface ICreateProfileImage {
  name: string;
  key: string;
  url: string;
}

export interface IUpdateProfileImage {
  id?: BigInt;
  name?: string;
  key?: string;
  url?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IDeleteProfileImage {
  id?: BigInt;
  name?: string;
  key?: string;
  url?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IGetProfileImage {
  id?: BigInt;
  name?: string;
  key?: string;
  url?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IProfileImageReturn {
  id: BigInt;
  name: string;
  key: string;
  url: string;
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: null | Date;
}

// Language
export interface ICreateLanguage {
  name: string;
}

export interface ILanguageReturn {
  id: number;
  name: string;
  created_at: Date;
  updated_at: null | Date;
}

// Cryptocurrency
export interface ICreateCryptocurrency {
  name: string;
  symbol: string;
  icon: string;
}

export interface ICryptocurrencyReturn {
  id: BigInt;
  name: string;
  symbol: string;
  icon: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUpdateCryptocurrency {
  id?: BigInt;
  name?: string;
  symbol?: string;
  icon?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IDeleteCryptocurrency {
  id?: BigInt;
  name?: string;
  symbol?: string;
  icon?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IGetCryptocurrency {
  id?: BigInt;
  name?: string;
  symbol?: string;
  icon?: string;
  created_at?: Date;
  updated_at?: Date;
}

// Fiat
export interface ICreateFiat {
  name: string;
  symbol: string;
}

export interface IFiatReturn {
  id: BigInt;
  name: string;
  symbol: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUpdateFiat {
  id?: BigInt;
  name?: string;
  symbol?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IDeleteFiat {
  id?: BigInt;
  name?: string;
  symbol?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IGetFiat {
  id?: BigInt;
  name?: string;
  symbol?: string;
  created_at?: Date;
  updated_at?: Date;
}

// Feedback
export interface ICreateFeedback {
  vendor_id: BigInt;
  user_id: BigInt;
  offer_id: BigInt;
  message: string;
  type: 'positive' | 'negative';
}

export interface IFeedbackReturn {
  id: BigInt;
  message: string;
  type: 'positive' | 'negative';
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: Date;
  vendor?: {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    private_keys: string[];
  };
  user?: {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    private_keys: string[];
  };
  offer?: {
    id: BigInt;
    payment_method_type: 'buy' | 'sell';
    payment_method_id: BigInt;
    trade_pricing_type: 'market' | 'fixed';
    trade_pricing_list_at: number;
    trade_pricing_trade_limits_min: number;
    trade_pricing_trade_limits_max: number;
    trade_pricing_time_limit: number;
    trade_instructions_tags: string[];
    trade_instructions_label: string;
    trade_instructions_terms: string;
    trade_instructions_instructions: string;
    is_deleted: boolean;
    when_deleted: null | Date;
    created_at: Date;
    updated_at: null | Date;
  };
}

export interface IUpdateFeedback {
  id?: BigInt;
  vendor_id?: BigInt;
  user_id?: BigInt;
  offer_id?: BigInt;
  message?: string;
  type?: 'positive' | 'negative';
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface IDeleteFeedback {
  id?: BigInt;
  vendor_id?: BigInt;
  user_id?: BigInt;
  offer_id?: BigInt;
  message?: string;
  type?: 'positive' | 'negative';
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface IGetFeedback {
  id?: BigInt;
  vendor_id?: BigInt;
  user_id?: BigInt;
  offer_id?: BigInt;
  message?: string;
  type?: 'positive' | 'negative';
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

// Block
export interface ICreateBlock {
  blocker_id: BigInt;
  blocked_id: BigInt;
}

export interface IBlockReturn {
  id: BigInt;
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: Date;
  blocker?: {
    first_name: string;
    last_name: string;
    username: string;
  };
  blocked?: {
    first_name: string;
    last_name: string;
    username: string;
  };
}

export interface IUpdateBlock {
  id?: BigInt;
  blocker_id?: BigInt;
  blocked_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface IDeleteBlock {
  id?: BigInt;
  blocker_id?: BigInt;
  blocked_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface IGetBlock {
  id?: BigInt;
  blocker_id?: BigInt;
  blocked_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

// Trust
export interface ICreateTrust {
  truster_id: BigInt;
  trusted_id: BigInt;
}

export interface ITrustReturn {
  id: BigInt;
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: Date;
  truster?: {
    first_name: string;
    last_name: string;
    username: string;
  };
  trusted?: {
    first_name: string;
    last_name: string;
    username: string;
  };
}

export interface IUpdateTrust {
  id?: BigInt;
  truster_id?: BigInt;
  trusted_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface IDeleteTrust {
  id?: BigInt;
  truster_id?: BigInt;
  trusted_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface IGetTrust {
  id?: BigInt;
  truster_id?: BigInt;
  trusted_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?: null | Date;
  created_at?: Date;
  updated_at?: Date;
}

// Offer
export interface ICreateOffer {
  vendor_id: BigInt;
  cryptocurrency_id: BigInt;
  payment_method_id: BigInt;
  fiat_id: BigInt;
  payment_method_type: 'buy' | 'sell';
  trade_pricing_type: 'market' | 'fixed';
  trade_pricing_list_at: number;
  trade_pricing_trade_limits_min: number;
  trade_pricing_trade_limits_max: number;
  trade_pricing_time_limit: number;
  trade_instructions_tags: string[];
  trade_instructions_label: string;
  trade_instructions_terms: string;
  trade_instructions_instructions: string;
}

export interface IOfferReturn {
  id: BigInt;
  payment_method_type: 'buy' | 'sell';
  payment_method_id: BigInt;
  trade_pricing_type: 'market' | 'fixed';
  trade_pricing_list_at: number;
  trade_pricing_trade_limits_min: number;
  trade_pricing_trade_limits_max: number;
  trade_pricing_time_limit: number;
  trade_instructions_tags: string[];
  trade_instructions_label: string;
  trade_instructions_terms: string;
  trade_instructions_instructions: string;
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: null | Date;
  vendor?: {
    id?: BigInt;
    first_name?: string;
    last_name?: string;
    username?: string;
    password?: string;
    private_keys?: string[];
    is_verified?: true;
    is_deleted?: false;
    when_deleted?: null;
    createdAt?: Date;
    updatedAt?: null | Date;
  };
  cryptocurrency?: {
    id?: BigInt;
    name?: string;
    symbol?: string;
    icon?: string;
    createdAt?: Date;
    updatedAt?: null | Date;
  };
  fiat?: {
    id?: BigInt;
    name?: string;
    symbol?: string;
    created_at?: Date;
    updated_at?: Date;
  };
  payment_method?: {
    id?: BigInt;
    name?: string;
    is_deleted?: boolean;
    when_deleted?: null | Date;
    created_at?: Date;
    updated_at?: null | Date;
    payment_method_category?: {
      id: BigInt;
      name: string;
      is_deleted: boolean;
      when_deleted: null | Date;
      created_at: Date;
      updated_at: null | Date;
    };
  };
}

export interface IUpdateOffer {
  id?: BigInt;
  vendor_id?: BigInt;
  cryptocurrency_id?: BigInt;
  payment_method_id?: BigInt;
  fiat_id?: BigInt;
  payment_method_type?: 'buy' | 'sell';
  trade_pricing_type?: 'market' | 'fixed';
  trade_pricing_list_at?: number;
  trade_pricing_trade_limits_min?: number;
  trade_pricing_trade_limits_max?: number;
  trade_pricing_time_limit?: number;
  trade_instructions_tags?: string[];
  trade_instructions_label?: string;
  trade_instructions_terms?: string;
  trade_instructions_instructions?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IDeleteOffer {
  id?: BigInt;
  vendor_id?: BigInt;
  cryptocurrency_id?: BigInt;
  payment_method_id?: BigInt;
  fiat_id?: BigInt;
  payment_method_type?: 'buy' | 'sell';
  trade_pricing_type?: 'market' | 'fixed';
  trade_pricing_list_at?: number;
  trade_pricing_trade_limits_min?: number;
  trade_pricing_trade_limits_max?: number;
  trade_pricing_time_limit?: number;
  trade_instructions_tags?: string[];
  trade_instructions_label?: string;
  trade_instructions_terms?: string;
  trade_instructions_instructions?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IGetOffer {
  id?: BigInt;
  vendor_id?: BigInt;
  cryptocurrency_id?: BigInt;
  payment_method_id?: BigInt;
  fiat_id?: BigInt;
  payment_method_type?: 'buy' | 'sell';
  trade_pricing_type?: 'market' | 'fixed';
  trade_pricing_list_at?: number;
  trade_pricing_trade_limits_min?: number;
  trade_pricing_trade_limits_max?: number;
  trade_pricing_time_limit?: number;
  trade_instructions_tags?: string[];
  trade_instructions_label?: string;
  trade_instructions_terms?: string;
  trade_instructions_instructions?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

// Payment Method
export interface ICreatePaymentMethod {
  name: string;
  payment_method_category_id: BigInt;
}

export interface IPaymentMethodReturn {
  id: BigInt;
  name: string;
  payment_method_category_id: BigInt;
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: null | Date;
}

export interface IUpdatePaymentMethod {
  id?: BigInt;
  name?: string;
  payment_method_category_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IDeletePaymentMethod {
  id?: BigInt;
  name?: string;
  payment_method_category_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IGetPaymentMethod {
  id?: BigInt;
  name?: string;
  payment_method_category_id?: BigInt;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

// Payment Method Category
export interface ICreatePaymentMethodCategory {
  name: string;
}

export interface IPaymentMethodCategoryReturn {
  id: BigInt;
  name: string;
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: null | Date;
}

export interface IUpdatePaymentMethodCategory {
  id?: BigInt;
  name?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IDeletePaymentMethodCategory {
  id?: BigInt;
  name?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IGetPaymentMethodCategory {
  id?: BigInt;
  name?: string;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

// Trade
export interface ICreateTrade {
  vendor_id: BigInt;
  trader_id: BigInt;
  offer_id: BigInt;
  cryptocurrency_id: BigInt;
  chat_id: BigInt;
  started_at: Date;
  ended_at: Date;
  state: 'canceled' | 'done' | 'error';
}

export interface ITradeReturn {
  id: BigInt;
  started_at: Date;
  ended_at: Date;
  state: 'canceled' | 'done' | 'error';
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: null | Date;
}

export interface IUpdateTrade {
  id?: BigInt;
  vendor_id?: BigInt;
  trader_id?: BigInt;
  offer_id?: BigInt;
  cryptocurrency_id?: BigInt;
  chat_id?: BigInt;
  started_at?: Date;
  ended_at?: Date;
  state?: 'canceled' | 'done' | 'error';
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IDeleteTrade {
  id?: BigInt;
  vendor_id?: BigInt;
  trader_id?: BigInt;
  offer_id?: BigInt;
  cryptocurrency_id?: BigInt;
  chat_id?: BigInt;
  started_at?: Date;
  ended_at?: Date;
  state?: 'canceled' | 'done' | 'error';
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IGetTrade {
  id?: BigInt;
  vendor_id?: BigInt;
  trader_id?: BigInt;
  offer_id?: BigInt;
  cryptocurrency_id?: BigInt;
  chat_id?: BigInt;
  started_at?: Date;
  ended_at?: Date;
  state?: 'canceled' | 'done' | 'error';
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface ICreateChat {}

export interface IChatReturn {
  id: BigInt;
  is_deleted: boolean;
  when_deleted: null | Date;
  created_at: Date;
  updated_at: null | Date;
}

export interface IUpdateChat {
  id?: BigInt;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IDeleteChat {
  id?: BigInt;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface IGetChat {
  id?: BigInt;
  is_deleted?: boolean;
  when_deleted?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  created_at?:
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
  updated_at?:
    | null
    | Date
    | { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date }
    | { $or: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } }
    | { $and: { $gt?: Date; $lt?: Date; $gte?: Date; $lte?: Date } };
}

export interface ICreateChatMessage {
  chat_id: number;
  user_id: number;
  message: string;
}

export interface IChatMessageReturn {
  _id: string;
  chat_id: number;
  user_id: number;
  deleted: {
    is_deleted: boolean;
    when_deleted: null | Date;
  };
  message: string;
  created_at: Date;
  updated_at: null | Date;
  __v: number;
}

export interface IUpdateChatMessage {
  _id?: string;
  chat_id?: number;
  user_id?: number;
  deleted?: {
    is_deleted?: boolean;
    when_deleted?: null | Date;
  };
  message?: string;
  created_at?: Date;
  __v?: number;
}

export interface IDeleteChatMessage {
  _id?: string;
  chat_id?: number;
  user_id?: number;
  deleted?: {
    is_deleted?: boolean;
    when_deleted?: null | Date;
  };
  message?: string;
  created_at?: Date;
  __v?: number;
}

export interface IGetChatMessage {
  _id?: string;
  chat_id?: number;
  user_id?: number;
  deleted?: {
    is_deleted?: boolean;
    when_deleted?: null | Date;
  };
  message?: string;
  created_at?: Date;
  __v?: number;
}

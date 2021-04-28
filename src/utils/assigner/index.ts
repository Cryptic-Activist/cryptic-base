import {
  IUserReturn,
  IOfferReturn,
  ITradeReturn,
  IFeedbackReturn,
  IPaymentMethodReturn,
  IPaymentMethodCategoryReturn,
} from '../../interfaces/index';

export function userValuesAssigner(user): IUserReturn {
  return {
    id: user.get().id,
    first_name: user.get().first_name,
    last_name: user.get().last_name,
    username: user.get().username,
    password: user.get().password,
    private_keys: user.get().private_keys,
    profile_image_id: user.get().profile_image_id,
    is_verified: user.get().is_verified,
    is_deleted: user.get().is_deleted,
    when_deleted: user.get().when_deleted,
    created_at: user.get().createdAt,
    updated_at: user.get().updatedAt,
  };
}

export function offerValuesAssigner(offer): IOfferReturn {
  return {
    id: offer.get().id,
    payment_method_type: offer.get().payment_method_type,
    payment_method_id: offer.get().payment_method_id,
    trade_pricing_type: offer.get().trade_pricing_type,
    trade_pricing_list_at: offer.get().trade_pricing_list_at,
    trade_pricing_trade_limits_min: offer.get().trade_pricing_trade_limits_min,
    trade_pricing_trade_limits_max: offer.get().trade_pricing_trade_limits_max,
    trade_pricing_time_limit: offer.get().trade_pricing_time_limit,
    trade_instructions_tags: offer.get().trade_instructions_tags,
    trade_instructions_label: offer.get().trade_instructions_label,
    trade_instructions_terms: offer.get().trade_instructions_terms,
    trade_instructions_instructions: offer.get()
      .trade_instructions_instructions,
    is_deleted: offer.get().is_deleted,
    when_deleted: offer.get().when_deleted,
    created_at: offer.get().createdAt,
    updated_at: offer.get().updatedAt,
  };
}

export function paymentMethodValuesAssigner(
  paymentMethod,
): IPaymentMethodReturn {
  return {
    id: paymentMethod.get().id,
    name: paymentMethod.get().name,
    payment_method_category_id: paymentMethod.get().payment_method_category_id,
    is_deleted: paymentMethod.get().is_deleted,
    when_deleted: paymentMethod.get().when_deleted,
    created_at: paymentMethod.get().createdAt,
    updated_at: paymentMethod.get().updatedAt,
  };
}

export function paymentMethodCategoryValuesAssigner(
  paymentMethod,
): IPaymentMethodCategoryReturn {
  return {
    id: paymentMethod.get().id,
    name: paymentMethod.get().name,
    is_deleted: paymentMethod.get().is_deleted,
    when_deleted: paymentMethod.get().when_deleted,
    created_at: paymentMethod.get().createdAt,
    updated_at: paymentMethod.get().updatedAt,
  };
}

export function tradeValuesAssigner(trade): ITradeReturn {
  return {
    id: trade.get().id,
    started_at: trade.get().started_at,
    ended_at: trade.get().ended_at,
    state: trade.get().state,
    is_deleted: trade.get().is_deleted,
    when_deleted: trade.get().when_deleted,
    created_at: trade.get().createdAt,
    updated_at: trade.get().updatedAt,
  };
}

export function feedbackValuesAssigner(feedback): IFeedbackReturn {
  return {
    id: feedback.get().id,
    user_id: feedback.get().user_id,
    offer_id: feedback.get().offer_id,
    message: feedback.get().message,
    type: feedback.get().type,
    is_deleted: feedback.get().is_deleted,
    when_deleted: feedback.get().when_deleted,
    created_at: feedback.get().createdAt,
    updated_at: feedback.get().updatedAt,
  };
}

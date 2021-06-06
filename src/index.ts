import 'dotenv/config';
import './database';

import { WhereOptions } from 'sequelize/types';
import { FilterQuery } from 'mongoose';

import { connectMongoDB } from './config/database/mongoDB/index';

import {
  userValuesAssigner,
  offerValuesAssigner,
  tradeValuesAssigner,
  paymentMethodValuesAssigner,
  paymentMethodCategoryValuesAssigner,
  feedbackValuesAssigner,
  blockValuesAssigner,
  trustValuesAssigner,
} from './utils/assigner/index';
import { associationsToArray } from './utils/association/index';

import User from './models/postgres/User/User';
import ProfileImage from './models/postgres/ProfileImage/ProfileImage';
import UserLanguages from './models/postgres/UserLanguages/UserLanguages';
import Language from './models/postgres/Language/Language';
import PaymentMethod from './models/postgres/PaymentMethod/PaymentMethod';
import PaymentMethodCategory from './models/postgres/PaymentMethodCategory/PaymentMethodCategory';
import Offer from './models/postgres/Offer/Offer';
import Cryptocurrency from './models/postgres/Cryptocurrency/Cryptocurrency';
import Fiat from './models/postgres/Fiat/Fiat';
import Feedback from './models/postgres/Feedback/Feedback';
import Trade from './models/postgres/Trade/Trade';
import Chat from './models/postgres/Chat/Chat';
import Block from './models/postgres/Block/Block';
import Trust from './models/postgres/Trust/Trust';

import ChatMessage from './models/mongoDB/ChatMessage/ChatMessage';

import {
  ICreateUser,
  IUpdateUser,
  IDeleteUser,
  IGetUser,
  IUserReturn,
  ICreateProfileImage,
  IProfileImageReturn,
  IUpdateProfileImage,
  IDeleteProfileImage,
  IGetProfileImage,
  ICreateLanguage,
  ILanguageReturn,
  ICreateCryptocurrency,
  ICryptocurrencyReturn,
  IUpdateCryptocurrency,
  IDeleteCryptocurrency,
  IGetCryptocurrency,
  ICreateFiat,
  IFiatReturn,
  IUpdateFiat,
  IDeleteFiat,
  IGetFiat,
  ICreateFeedback,
  IFeedbackReturn,
  IUpdateFeedback,
  IDeleteFeedback,
  IGetFeedback,
  ICreateBlock,
  IBlockReturn,
  IUpdateBlock,
  IDeleteBlock,
  IGetBlock,
  ICreateTrust,
  ITrustReturn,
  IUpdateTrust,
  IDeleteTrust,
  IGetTrust,
  ICreateOffer,
  IOfferReturn,
  IUpdateOffer,
  IDeleteOffer,
  IGetOffer,
  ICreatePaymentMethod,
  IPaymentMethodReturn,
  IUpdatePaymentMethod,
  IDeletePaymentMethod,
  IGetPaymentMethod,
  ICreatePaymentMethodCategory,
  IPaymentMethodCategoryReturn,
  IUpdatePaymentMethodCategory,
  IDeletePaymentMethodCategory,
  IGetPaymentMethodCategory,
  ICreateTrade,
  ITradeReturn,
  IUpdateTrade,
  IDeleteTrade,
  IGetTrade,
  ICreateChat,
  IChatReturn,
  IUpdateChat,
  IDeleteChat,
  IGetChat,
  ICreateChatMessage,
  IChatMessageReturn,
  IUpdateChatMessage,
  IDeleteChatMessage,
  IGetChatMessage,
} from './interfaces/index';

export default class CrypticBase {
  private user: IUserReturn;
  private updatedUsers: object;
  private deletedUsers: number;
  private users: IUserReturn[];

  private profileImage: IProfileImageReturn;
  private updatedProfileImages: object;
  private deletedProfileImages: number;
  private profileImages: IProfileImageReturn[];

  private language: ICreateLanguage;
  private associatedLanguage: ILanguageReturn;

  private cryptocurrency: ICryptocurrencyReturn;
  private updatedCryptocurrencies: object;
  private deletedCryptocurrencies: number;
  private cryptocurrencies: ICryptocurrencyReturn[];

  private fiat: IFiatReturn;
  private updatedFiats: object;
  private deletedFiats: number;
  private fiats: IFiatReturn[];

  private feedback: IFeedbackReturn;
  private updatedFeedbacks: object;
  private deletedFeedbacks: number;
  private feedbacks: IFeedbackReturn[];
  private feedbackCount: number;

  private block: IBlockReturn;
  private updatedBlocks: object;
  private deletedBlocks: number;
  private blocks: IBlockReturn[];
  private blockCount: number;

  private trust: IBlockReturn;
  private updatedTrusts: object;
  private deletedTrusts: number;
  private trusts: IBlockReturn[];
  private trustCount: number;

  private offer: IOfferReturn;
  private updatedOffer: object;
  private deletedOffer: number;
  private offers: IOfferReturn[];

  private paymentMethod: IPaymentMethodReturn;
  private updatedPaymentMethod: object;
  private deletedPaymentMethod: number;
  private paymentMethods: IPaymentMethodReturn[];

  private paymentMethodCategory: IPaymentMethodCategoryReturn;
  private updatedPaymentMethodCategory: object;
  private deletedPaymentMethodCategory: number;
  private paymentMethodCategories: IPaymentMethodCategoryReturn[];

  private trade: ITradeReturn;
  private updatedTrade: object;
  private deletedTrade: number;
  private trades: ITradeReturn[];
  private tradeCount: number;

  private chat: IChatReturn;
  private updatedChat: object;
  private deletedChat: number;
  private chats: IChatReturn[];

  private chatMessage: IChatMessageReturn;
  private updatedChatMessage: IUpdateChatMessage;
  private deletedChatMessage: any;
  private chatMessages: IChatMessageReturn[];

  constructor(mongoDB: boolean) {
    if (mongoDB) {
      connectMongoDB();
    }
  }

  // Postgres
  // Profile Image methods
  async createProfileImage(
    profileImageData: ICreateProfileImage,
  ): Promise<IProfileImageReturn> {
    try {
      const localNewProfileImage = await ProfileImage.create(profileImageData);
      this.profileImage = localNewProfileImage.get();
    } catch (err) {
      throw Error(err);
    }
    return this.profileImage;
  }

  async updateProfileImage(
    where: WhereOptions<IUpdateProfileImage>,
    prodileImageDataToUpdate: IUpdateProfileImage,
  ): Promise<object> {
    try {
      const updatedProfileImage: object = await User.update(
        prodileImageDataToUpdate,
        {
          where,
        },
      );
      this.updatedProfileImages = updatedProfileImage;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedProfileImages;
  }

  async deleteProfileImage(
    where: WhereOptions<IDeleteProfileImage>,
  ): Promise<number> {
    try {
      const deletedProfileImage: number = await User.destroy({
        where,
      });
      this.deletedProfileImages = deletedProfileImage;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedProfileImages;
  }

  async getProfileImage(
    where: WhereOptions<IGetProfileImage>,
  ): Promise<IProfileImageReturn> {
    try {
      const profileImage = await ProfileImage.findOne({
        where,
      });

      if (!profileImage) {
        this.profileImage = null;
        return this.profileImage;
      }

      this.profileImage = profileImage.get();
    } catch (err) {
      throw Error(err);
    }
    return this.profileImage;
  }

  async getProfileImages(
    limit: null | number,
    where?: WhereOptions<IGetProfileImage>,
  ): Promise<IProfileImageReturn[]> {
    try {
      let profileImages: any;

      if (where) {
        if (limit) {
          profileImages = await User.findAll({
            where,
            limit,
          });
        } else {
          profileImages = await User.findAll({
            where,
          });
        }
      } else {
        if (limit) {
          profileImages = await User.findAll({
            limit,
          });
        } else {
          profileImages = await User.findAll({});
        }
      }

      this.profileImages = profileImages.get();
    } catch (err) {
      throw Error(err);
    }

    return this.profileImages;
  }

  // User methods
  async createUser(userData: ICreateUser): Promise<IUserReturn> {
    try {
      const localNewUser = await User.create(userData);
      this.user = localNewUser.get();
    } catch (err) {
      throw Error(err);
    }
    return this.user;
  }

  async updateUser(
    where: WhereOptions<IUpdateUser>,
    userDataToUpdate: IUpdateUser,
  ): Promise<object> {
    try {
      const updatedUser: object = await User.update(userDataToUpdate, {
        where,
      });
      this.updatedUsers = updatedUser;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedUsers;
  }

  async deleteUser(where: WhereOptions<IDeleteUser>): Promise<number> {
    try {
      const deletedUser: number = await User.destroy({
        where,
      });
      this.deletedUsers = deletedUser;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedUsers;
  }

  async getUser(
    where: WhereOptions<IGetUser>,
    associationArr:
      | []
      | ['languages']
      | ['profile_image']
      | ['languages', 'profile_image'],
  ): Promise<IUserReturn> {
    try {
      let user: any;

      const joinObjArr = associationsToArray(associationArr);

      user = await User.findOne({
        where,
        include: joinObjArr,
      });

      if (!user) {
        this.user = null;
        return this.user;
      }

      const newUser: any = userValuesAssigner(user);

      associationArr.forEach((association) => {
        if (Array.isArray(user.get()[association])) {
          newUser[association] = user
            .get()
            [association].map((assoc) => ({ ...assoc.get() }));
        } else {
          newUser[association] = user.get()[association].get();
        }
      });

      this.user = newUser;
    } catch (err) {
      throw Error(err);
    }
    return this.user;
  }

  async getUsers(
    limit: null | number,
    associationArr:
      | []
      | ['languages']
      | ['profile_image']
      | ['languages', 'profile_image'],
    where?: WhereOptions<IGetUser>,
  ): Promise<IUserReturn[]> {
    try {
      let users: any;

      const joinObjArr = associationsToArray(associationArr);

      if (where) {
        if (limit) {
          users = await User.findAll({
            where,
            include: joinObjArr,
            limit,
          });
        } else {
          users = await User.findAll({
            where,
            include: joinObjArr,
          });
        }
      } else {
        if (limit) {
          users = await User.findAll({
            include: joinObjArr,
            limit,
          });
        } else {
          users = await User.findAll({
            include: joinObjArr,
          });
        }
      }

      interface INewUser {
        [key: string]: any;
      }

      const mapedUsers: IUserReturn[] = users.map((user) => {
        const newUser: INewUser = userValuesAssigner(user);

        associationArr.forEach((association) => {
          if (Array.isArray(user.get()[association])) {
            newUser[association] = user
              .get()
              [association].map((assoc) => ({ ...assoc.get() }));
          } else {
            newUser[association] = user.get()[association].get();
          }
        });

        return newUser;
      });

      this.users = mapedUsers;
    } catch (err) {
      throw Error(err);
    }

    return this.users;
  }

  async getUsersPagination(
    limit: number,
    skip: number,
    associationArr:
      | []
      | ['languages']
      | ['profile_image']
      | ['languages', 'profile_image'],
    where?: WhereOptions<IGetUser>,
  ): Promise<IUserReturn[]> {
    try {
      let users: any;

      const joinObjArr = associationsToArray(associationArr);

      if (where) {
        if (limit) {
          users = await User.findAndCountAll({
            where,
            include: joinObjArr,
            limit,
            offset: skip,
          });
        }
      } else {
        if (limit) {
          users = await User.findAndCountAll({
            include: joinObjArr,
            limit,
            offset: skip,
          });
        }
      }

      interface INewUser {
        [key: string]: any;
      }

      const mapedUsers: IUserReturn[] = users.rows.map((user) => {
        const newUser: INewUser = userValuesAssigner(user);

        associationArr.forEach((association) => {
          if (Array.isArray(user.get()[association])) {
            newUser[association] = user
              .get()
              [association].map((assoc) => ({ ...assoc.get() }));
          } else {
            newUser[association] = user.get()[association].get();
          }
        });

        return newUser;
      });

      this.users = mapedUsers;
    } catch (err) {
      throw Error(err);
    }

    return this.users;
  }

  // Language methods
  async createLanguage(
    languageData: ICreateLanguage,
  ): Promise<ICreateLanguage> {
    try {
      const localNewLanguage = await Language.create(languageData);
      this.language = localNewLanguage.get();
    } catch (err) {
      throw Error(err);
    }
    return this.language;
  }

  async associateLanguageToUser(
    languageName: string,
    userToAssociate: BigInt,
  ): Promise<void> {
    try {
      const user = await User.findOne({
        // @ts-ignore
        where: { id: userToAssociate },
      });

      const [language] = await Language.findOrCreate({
        where: { name: languageName },
      });

      const userLanguage = await UserLanguages.findOne({
        where: {
          language_id: parseInt(language.get().id, 10),
          user_id: parseInt(user.get().id, 10),
        },
      });

      if (!userLanguage) {
        // @ts-ignore
        await user.addLanguage(language);
      }
    } catch (err) {
      throw Error(err);
    }
  }

  async disassociateLanguageToUser(
    languageName: string,
    userToDisassociate: BigInt,
  ): Promise<void> {
    try {
      const user = await User.findOne({
        // @ts-ignore
        where: { id: userToDisassociate },
      });

      const language = await Language.findOne({
        where: { name: languageName },
      });

      // @ts-ignore
      await user.removeLanguage(language);
    } catch (err) {
      throw Error(err);
    }
  }

  // Cryptocurrency methods
  async createCryptocurrency(
    cryptocurrencyData: ICreateCryptocurrency,
  ): Promise<ICryptocurrencyReturn> {
    try {
      const cryptocurrency = await Cryptocurrency.create(cryptocurrencyData);
      this.cryptocurrency = cryptocurrency.get();
    } catch (err) {
      throw Error(err);
    }
    return this.cryptocurrency;
  }

  async updateCryptocurrency(
    where: WhereOptions<IUpdateCryptocurrency>,
    cryptocurrencyDataToUpdate: IUpdateCryptocurrency,
  ): Promise<object> {
    try {
      const updatedCryptocurrency = await Cryptocurrency.update(
        cryptocurrencyDataToUpdate,
        { where },
      );
      this.updatedCryptocurrencies = updatedCryptocurrency;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedCryptocurrencies;
  }

  async deleteCryptocurrency(
    where: WhereOptions<IDeleteCryptocurrency>,
  ): Promise<number> {
    try {
      const deletedCryptocurrency = await Cryptocurrency.destroy({ where });
      this.deletedCryptocurrencies = deletedCryptocurrency;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedCryptocurrencies;
  }

  async getCryptocurrency(
    where: WhereOptions<IGetCryptocurrency>,
  ): Promise<ICryptocurrencyReturn> {
    try {
      const cryptoccurency = await Cryptocurrency.findOne({ where });

      if (!cryptoccurency) {
        this.cryptocurrency = null;
        return this.cryptocurrency;
      }

      this.cryptocurrency = cryptoccurency.get();
    } catch (err) {
      throw Error(err);
    }
    return this.cryptocurrency;
  }

  async getCryptocurrencies(
    limit: null | number,
    where?: WhereOptions<IGetCryptocurrency>,
  ): Promise<ICryptocurrencyReturn[]> {
    try {
      let cryptoccurencies: any;
      if (limit) {
        if (where) {
          cryptoccurencies = await Cryptocurrency.findAll({ where, limit });
        } else {
          cryptoccurencies = await Cryptocurrency.findAll({
            limit,
          });
        }
      } else {
        if (where) {
          cryptoccurencies = await Cryptocurrency.findAll({ where });
        } else {
          cryptoccurencies = await Cryptocurrency.findAll();
        }
      }

      const mapedCryptocurrencies: ICryptocurrencyReturn[] = cryptoccurencies.map(
        (cryptocurrency) => ({
          ...cryptocurrency.get(),
        }),
      );

      this.cryptocurrencies = mapedCryptocurrencies;
    } catch (err) {
      throw Error(err);
    }
    return this.cryptocurrencies;
  }

  async getCryptocurrenciesPagination(
    limit: number,
    skip: number,
    where?: WhereOptions<IGetCryptocurrency>,
  ): Promise<ICryptocurrencyReturn[]> {
    try {
      let cryptoccurencies: any;
      if (limit) {
        if (where) {
          cryptoccurencies = await Cryptocurrency.findAndCountAll({
            where,
            limit,
            offset: skip,
          });
        } else {
          cryptoccurencies = await Cryptocurrency.findAndCountAll({
            limit,
            offset: skip,
          });
        }
      }

      const mapedCryptocurrencies: ICryptocurrencyReturn[] = cryptoccurencies.rows.map(
        (cryptocurrency) => ({
          ...cryptocurrency.get(),
        }),
      );

      this.cryptocurrencies = mapedCryptocurrencies;
    } catch (err) {
      throw Error(err);
    }
    return this.cryptocurrencies;
  }

  // Fiat methods
  async createFiat(fiatData: ICreateFiat): Promise<IFiatReturn> {
    try {
      const fiat = await Fiat.create(fiatData);

      this.fiat = fiat.get();
    } catch (err) {
      throw Error(err);
    }
    return this.fiat;
  }

  async updateFiat(
    where: WhereOptions<IUpdateFiat>,
    fiatDataToUpdate: IUpdateFiat,
  ): Promise<object> {
    try {
      const updatedFiat = await Fiat.update(fiatDataToUpdate, {
        where,
      });
      this.updatedFiats = updatedFiat;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedFiats;
  }

  async deleteFiat(where: WhereOptions<IDeleteFiat>): Promise<number> {
    try {
      const deletedFiat = await Fiat.destroy({ where });
      this.deletedFiats = deletedFiat;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedFiats;
  }

  async getFiat(where: WhereOptions<IGetFiat>): Promise<IFiatReturn> {
    try {
      const fiat = await Fiat.findOne({ where });

      if (!fiat) {
        this.fiat = null;
        return this.fiat;
      }

      this.fiat = fiat.get();
    } catch (err) {
      throw Error(err);
    }
    return this.fiat;
  }

  async getFiats(
    limit: null | number,
    where?: WhereOptions<IGetFiat>,
  ): Promise<IFiatReturn[]> {
    try {
      let fiats: any;
      if (limit) {
        if (where) {
          fiats = await Fiat.findAll({ where, limit });
        } else {
          fiats = await Fiat.findAll({
            limit,
          });
        }
      } else {
        if (where) {
          fiats = await Fiat.findAll({ where });
        } else {
          fiats = await Fiat.findAll();
        }
      }

      const mapedFiats: IFiatReturn[] = fiats.map((fiat) => ({
        ...fiat.get(),
      }));

      this.fiats = mapedFiats;
    } catch (err) {
      throw Error(err);
    }
    return this.fiats;
  }

  async getFiatsPagination(
    limit: number,
    skip: number,
    where?: WhereOptions<IGetFiat>,
  ): Promise<IFiatReturn[]> {
    try {
      let fiats: any;
      if (limit) {
        if (where) {
          fiats = await Fiat.findAndCountAll({
            where,
            limit,
            offset: skip,
          });
        } else {
          fiats = await Fiat.findAndCountAll({
            limit,
            offset: skip,
          });
        }
      }

      const mapedFiats: IFiatReturn[] = fiats.rows.map((fiat) => ({
        ...fiat.get(),
      }));

      this.fiats = mapedFiats;
    } catch (err) {
      throw Error(err);
    }
    return this.fiats;
  }

  // Feedback methods
  async createFeedback(
    feedbackData: ICreateFeedback,
  ): Promise<IFeedbackReturn> {
    try {
      const feedback = await Feedback.create(feedbackData);

      this.feedback = feedback.get();
    } catch (err) {
      throw Error(err);
    }
    return this.feedback;
  }

  async updateFeedback(
    where: WhereOptions<IUpdateFeedback>,
    feedbackDataToUpdate: IUpdateFeedback,
  ): Promise<object> {
    try {
      const updatedFeedback = await Feedback.update(feedbackDataToUpdate, {
        where,
      });
      this.updatedFeedbacks = updatedFeedback;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedFeedbacks;
  }

  async deleteFeedback(where: WhereOptions<IDeleteFeedback>): Promise<number> {
    try {
      const deletedFeedback = await Feedback.destroy({ where });
      this.deletedFeedbacks = deletedFeedback;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedFeedbacks;
  }

  async getFeedback(
    where: WhereOptions<IGetFeedback>,
    associationArr: [] | ['user'] | ['offer'] | ['user', 'offer'],
  ): Promise<IFeedbackReturn> {
    try {
      let feedback: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'user') {
          joinObj.model = User;
          joinObj.as = 'user';
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      feedback = await Feedback.findOne({
        where,
        include: joinObjArr,
      });

      if (!feedback) {
        this.feedback = null;
        return this.feedback;
      }

      const newFeedback: any = feedbackValuesAssigner(feedback);

      associationArr.forEach((association) => {
        if (association === 'user') {
          newFeedback[association] = feedback.get()[association].get();
          newFeedback[association]['profile_image'] = feedback
            .get()
            [association].get()
            ['profile_image'].get();
        } else {
          newFeedback[association] = feedback.get()[association].get();
        }
      });

      this.feedback = newFeedback;
    } catch (err) {
      throw Error(err);
    }
    return this.feedback;
  }

  async getFeedbacks(
    limit: null | number,
    associationArr: [] | ['user'] | ['offer'] | ['user', 'offer'],
    where?: WhereOptions<IGetFeedback>,
  ): Promise<IFeedbackReturn[]> {
    try {
      let feedbacks: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'user') {
          joinObj.model = User;
          joinObj.as = 'user';
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      if (limit) {
        if (where) {
          feedbacks = await Feedback.findAll({
            where,
            include: joinObjArr,
            limit,
          });
        } else {
          feedbacks = await Feedback.findAll({
            include: joinObjArr,
            limit,
          });
        }
      } else {
        if (where) {
          feedbacks = await Feedback.findAll({
            where,
            include: joinObjArr,
          });
        } else {
          feedbacks = await Feedback.findAll({
            include: joinObjArr,
          });
        }
      }

      interface INewFeedback {
        [key: string]: any;
      }

      const mapedFeedback: IFeedbackReturn[] = feedbacks.map((feedback) => {
        const newFeedback: INewFeedback = feedbackValuesAssigner(feedback);

        associationArr.forEach((association) => {
          if (association === 'user') {
            newFeedback[association] = feedback.get()[association].get();
            newFeedback[association]['profile_image'] = feedback
              .get()
              [association].get()
              ['profile_image'].get();
          } else {
            newFeedback[association] = feedback.get()[association].get();
          }
        });

        return newFeedback;
      });

      this.feedbacks = mapedFeedback;
    } catch (err) {
      throw Error(err);
    }
    return this.feedbacks;
  }

  async getFeedbacksPagination(
    limit: number,
    skip: number,
    associationArr: [] | ['user'] | ['offer'] | ['user', 'offer'],
    where?: WhereOptions<IGetFeedback>,
  ): Promise<IFeedbackReturn[]> {
    try {
      let feedbacks: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'user') {
          joinObj.model = User;
          joinObj.as = 'user';
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      if (where) {
        feedbacks = await Feedback.findAndCountAll({
          where,
          include: joinObjArr,
          limit,
          offset: skip,
        });
      } else {
        feedbacks = await Feedback.findAndCountAll({
          include: joinObjArr,
          limit,
          offset: skip,
        });
      }

      interface INewFeedback {
        [key: string]: any;
      }

      const mapedFeedback: IFeedbackReturn[] = feedbacks.rows.map(
        (feedback) => {
          const newFeedback: INewFeedback = feedbackValuesAssigner(feedback);

          associationArr.forEach((association) => {
            if (association === 'user') {
              newFeedback[association] = feedback.get()[association].get();
              newFeedback[association]['profile_image'] = feedback
                .get()
                [association].get()
                ['profile_image'].get();
            } else {
              newFeedback[association] = feedback.get()[association].get();
            }
          });

          return newFeedback;
        },
      );

      this.feedbacks = mapedFeedback;
    } catch (err) {
      throw Error(err);
    }
    return this.feedbacks;
  }

  async countFeedbacks(where?: WhereOptions<IGetFeedback>): Promise<number> {
    try {
      const count = await Feedback.count({ where });

      this.feedbackCount = count;
    } catch (err) {
      throw Error(err);
    }
    return this.feedbackCount;
  }

  // Block methods
  async createBlock(blockData: ICreateBlock): Promise<IBlockReturn> {
    try {
      // @ts-ignore
      const block = await Block.findOne({ where: blockData });

      if (block) {
        this.block = null;
        return this.block;
      }

      const newBlock = await Block.create(blockData);

      this.block = newBlock.get();
    } catch (err) {
      throw Error(err);
    }
    return this.block;
  }

  async updateBlock(
    where: WhereOptions<IUpdateBlock>,
    blockDataToUpdate: IUpdateBlock,
  ): Promise<object> {
    try {
      const updatedBlock = await Block.update(blockDataToUpdate, {
        where,
      });
      this.updatedBlocks = updatedBlock;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedBlocks;
  }

  async deleteBlock(where: WhereOptions<IDeleteBlock>): Promise<number> {
    try {
      const deletedBlock = await Block.destroy({ where });
      this.deletedBlocks = deletedBlock;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedBlocks;
  }

  async getBlock(
    where: WhereOptions<IGetBlock>,
    associationArr: [] | ['blocker'] | ['blocked'] | ['blocker', 'blocked'],
  ): Promise<IBlockReturn> {
    try {
      let block: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'blocker' || join === 'blocked') {
          joinObj.model = User;
          joinObj.as = join;
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      block = await Block.findOne({
        where,
        include: joinObjArr,
      });

      if (!block) {
        this.block = null;
        return this.block;
      }

      const newBlock: any = blockValuesAssigner(block);

      associationArr.forEach((association) => {
        newBlock[association] = block.get()[association].get();
        newBlock[association]['profile_image'] = block
          .get()
          [association].get()
          ['profile_image'].get();
      });

      this.block = newBlock;
    } catch (err) {
      throw Error(err);
    }
    return this.block;
  }

  async getBlocks(
    limit: null | number,
    associationArr: [] | ['blocker'] | ['blocked'] | ['blocker', 'blocked'],
    where?: WhereOptions<IGetBlock>,
  ): Promise<IBlockReturn[]> {
    try {
      let blocks: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'blocker' || join === 'blocked') {
          joinObj.model = User;
          joinObj.as = join;
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      if (limit) {
        if (where) {
          blocks = await Block.findAll({
            where,
            include: joinObjArr,
            limit,
          });
        } else {
          blocks = await Block.findAll({
            include: joinObjArr,
            limit,
          });
        }
      } else {
        if (where) {
          blocks = await Block.findAll({
            where,
            include: joinObjArr,
          });
        } else {
          blocks = await Block.findAll({
            include: joinObjArr,
          });
        }
      }

      interface INewBlock {
        [key: string]: any;
      }

      const mapedBlock: IBlockReturn[] = blocks.map((block) => {
        const newBlock: INewBlock = blockValuesAssigner(block);

        associationArr.forEach((association) => {
          newBlock[association] = block.get()[association].get();
          newBlock[association]['profile_image'] = block
            .get()
            [association].get()
            ['profile_image'].get();
        });

        return newBlock;
      });

      this.blocks = mapedBlock;
    } catch (err) {
      throw Error(err);
    }
    return this.blocks;
  }

  async getBlocksPagination(
    limit: number,
    skip: number,
    associationArr: [] | ['blocker'] | ['blocked'] | ['blocker', 'blocked'],
    where?: WhereOptions<IGetBlock>,
  ): Promise<IBlockReturn[]> {
    try {
      let blocks: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'blocker' || join === 'blocked') {
          joinObj.model = User;
          joinObj.as = join;
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      if (where) {
        blocks = await Block.findAndCountAll({
          where,
          // @ts-ignore
          include: joinObjArr,
          limit,
          offset: skip,
        });
      } else {
        blocks = await Block.findAndCountAll({
          // @ts-ignore
          include: joinObjArr,
          limit,
          offset: skip,
        });
      }

      interface INewBlock {
        [key: string]: any;
      }

      const mapedBlock: IBlockReturn[] = blocks.rows.map((block) => {
        const newBlock: INewBlock = blockValuesAssigner(block);

        associationArr.forEach((association) => {
          newBlock[association] = block.get()[association].get();
          newBlock[association]['profile_image'] = block
            .get()
            [association].get()
            ['profile_image'].get();
        });

        return newBlock;
      });

      this.blocks = mapedBlock;
    } catch (err) {
      throw Error(err);
    }
    return this.blocks;
  }

  async countBlocks(where?: WhereOptions<IGetBlock>): Promise<number> {
    try {
      const count = await Block.count({ where });

      this.blockCount = count;
    } catch (err) {
      throw Error(err);
    }
    return this.blockCount;
  }

  // Trust methods
  async createTrust(trustData: ICreateTrust): Promise<ITrustReturn> {
    try {
      // @ts-ignore
      const trust = await Trust.findOne({ where: trustData });

      if (trust) {
        this.trust = null;
        return this.trust;
      }

      const newTrust = await Trust.create(trustData);

      this.trust = newTrust.get();
    } catch (err) {
      throw Error(err);
    }
    return this.trust;
  }

  async updateTrust(
    where: WhereOptions<IUpdateTrust>,
    trustDataToUpdate: IUpdateTrust,
  ): Promise<object> {
    try {
      const updatedTrust = await Trust.update(trustDataToUpdate, {
        where,
      });
      this.updatedTrusts = updatedTrust;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedTrusts;
  }

  async deleteTrust(where: WhereOptions<IDeleteTrust>): Promise<number> {
    try {
      const deletedTrust = await Trust.destroy({ where });
      this.deletedTrusts = deletedTrust;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedTrusts;
  }

  async getTrust(
    where: WhereOptions<IGetTrust>,
    associationArr: [] | ['truster'] | ['trusted'] | ['truster', 'trusted'],
  ): Promise<ITrustReturn> {
    try {
      let trust: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'truster' || join === 'trusted') {
          joinObj.model = User;
          joinObj.as = join;
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      trust = await Trust.findOne({
        where,
        include: joinObjArr,
      });

      if (!trust) {
        this.trust = null;
        return this.trust;
      }

      const newTrust: any = trustValuesAssigner(trust);

      associationArr.forEach((association) => {
        console.log('association:', association);
        console.log('trust.get()[association]:', trust.get()[association]);
        newTrust[association] = trust.get()[association].get();
        newTrust[association]['profile_image'] = trust
          .get()
          [association].get()
          ['profile_image'].get();
      });

      this.trust = newTrust;
    } catch (err) {
      throw Error(err);
    }
    return this.trust;
  }

  async getTrusts(
    limit: null | number,
    associationArr: [] | ['truster'] | ['trusted'] | ['truster', 'trusted'],
    where?: WhereOptions<IGetTrust>,
  ): Promise<ITrustReturn[]> {
    try {
      let trusts: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'truster' || join === 'trusted') {
          joinObj.model = User;
          joinObj.as = join;
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      if (limit) {
        if (where) {
          trusts = await Trust.findAll({
            where,
            include: joinObjArr,
            limit,
          });
        } else {
          trusts = await Trust.findAll({
            include: joinObjArr,
            limit,
          });
        }
      } else {
        if (where) {
          trusts = await Trust.findAll({
            where,
            include: joinObjArr,
          });
        } else {
          trusts = await Trust.findAll({
            include: joinObjArr,
          });
        }
      }

      interface INewTrust {
        [key: string]: any;
      }

      const mapedTrust: ITrustReturn[] = trusts.map((trust) => {
        const newTrust: INewTrust = trustValuesAssigner(trust);

        associationArr.forEach((association) => {
          newTrust[association] = trust.get()[association].get();
          newTrust[association]['profile_image'] = trust
            .get()
            [association].get()
            ['profile_image'].get();
        });

        return newTrust;
      });

      this.trusts = mapedTrust;
    } catch (err) {
      throw Error(err);
    }
    return this.trusts;
  }

  async getTrustsPagination(
    limit: number,
    skip: number,
    associationArr: [] | ['truster'] | ['trusted'] | ['truster', 'trusted'],
    where?: WhereOptions<IGetBlock>,
  ): Promise<ITrustReturn[]> {
    try {
      let trusts: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'truster' || join === 'trusted') {
          joinObj.model = User;
          joinObj.as = join;
          joinObj.include = {
            model: ProfileImage,
            as: 'profile_image',
          };
        }

        return joinObj;
      });

      if (where) {
        trusts = await Trust.findAndCountAll({
          where,
          // @ts-ignore
          include: joinObjArr,
          limit,
          offset: skip,
        });
      } else {
        trusts = await Trust.findAndCountAll({
          // @ts-ignore
          include: joinObjArr,
          limit,
          offset: skip,
        });
      }

      interface INewTrust {
        [key: string]: any;
      }

      const mapedTrust: ITrustReturn[] = trusts.rows.map((block) => {
        const newTrust: INewTrust = blockValuesAssigner(block);

        associationArr.forEach((association) => {
          newTrust[association] = block.get()[association].get();
          newTrust[association]['profile_image'] = block
            .get()
            [association].get()
            ['profile_image'].get();
        });

        return newTrust;
      });

      this.trusts = mapedTrust;
    } catch (err) {
      throw Error(err);
    }
    return this.trusts;
  }

  async countTrusts(where?: WhereOptions<IGetTrust>): Promise<number> {
    try {
      const count = await Trust.count({ where });

      this.trustCount = count;
    } catch (err) {
      throw Error(err);
    }
    return this.trustCount;
  }

  // Offer methods
  async createOffer(offerData: ICreateOffer): Promise<IOfferReturn> {
    try {
      const offer = await Offer.create(offerData);
      this.offer = offer.get();
    } catch (err) {
      throw Error(err);
    }
    return this.offer;
  }

  async updateOffer(
    where: WhereOptions<IUpdateOffer>,
    offerDataToUpdate: IUpdateOffer,
  ): Promise<object> {
    try {
      const updatedOffer: object = await Offer.update(offerDataToUpdate, {
        where,
      });
      this.updatedOffer = updatedOffer;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedOffer;
  }

  async deleteOffer(where: WhereOptions<IDeleteOffer>): Promise<number> {
    try {
      const deletedOffer: number = await Offer.destroy({ where });
      this.deletedOffer = deletedOffer;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedOffer;
  }

  async getOffer(
    where: WhereOptions<IGetOffer>,
    associationArr:
      | []
      | ['vendor']
      | ['cryptocurrency']
      | ['payment_method']
      | ['fiat']
      | ['vendor', 'cryptocurrency']
      | ['vendor', 'fiat']
      | ['vendor', 'payment_method']
      | ['cryptocurrency', 'payment_method']
      | ['cryptocurrency', 'fiat']
      | ['fiat', 'payment_method']
      | ['vendor', 'cryptocurrency', 'fiat', 'payment_method'],
  ): Promise<IOfferReturn> {
    try {
      let offer: any;

      const joinObjArr = associationsToArray(associationArr);

      offer = await Offer.findOne({
        where,
        include: joinObjArr,
      });

      if (!offer) {
        this.offer = null;
        return this.offer;
      }

      const newOffer: any = offerValuesAssigner(offer);

      associationArr.forEach((association) => {
        console.log(offer.get()[association].get());
        newOffer[association] = offer.get()[association].get();
      });

      this.offer = newOffer;
    } catch (err) {
      throw Error(err);
    }
    return this.offer;
  }

  async getOffers(
    limit: null | number,
    associationArr:
      | []
      | ['vendor']
      | ['cryptocurrency']
      | ['payment_method']
      | ['fiat']
      | ['vendor', 'cryptocurrency']
      | ['vendor', 'fiat']
      | ['vendor', 'payment_method']
      | ['cryptocurrency', 'payment_method']
      | ['cryptocurrency', 'fiat']
      | ['fiat', 'payment_method']
      | ['vendor', 'cryptocurrency', 'fiat', 'payment_method'],
    where?: WhereOptions<IGetOffer>,
  ): Promise<IOfferReturn[]> {
    try {
      let offers: any;

      const joinObjArr = associationsToArray(associationArr);

      if (limit) {
        if (where) {
          offers = await Offer.findAll({
            where,
            include: joinObjArr,
            limit,
          });
        } else {
          offers = await Offer.findAll({
            include: joinObjArr,
            limit,
          });
        }
      } else {
        if (where) {
          offers = await Offer.findAll({
            where,
            include: joinObjArr,
          });
        } else {
          offers = await Offer.findAll({
            include: joinObjArr,
          });
        }
      }

      interface INewOffer {
        [key: string]: any;
      }

      const mapedOffers: IOfferReturn[] = offers.map((offer) => {
        const newOffer: INewOffer = offerValuesAssigner(offer);

        associationArr.forEach((association) => {
          newOffer[association] = offer.get()[association].get();
        });

        return newOffer;
      });

      this.offers = mapedOffers;
    } catch (err) {
      throw Error(err);
    }
    return this.offers;
  }

  async getOffersPagination(
    limit: number,
    skip: number,
    associationArr:
      | []
      | ['vendor']
      | ['cryptocurrency']
      | ['payment_method']
      | ['fiat']
      | ['vendor', 'cryptocurrency']
      | ['vendor', 'fiat']
      | ['vendor', 'payment_method']
      | ['cryptocurrency', 'payment_method']
      | ['cryptocurrency', 'fiat']
      | ['fiat', 'payment_method']
      | ['vendor', 'cryptocurrency', 'fiat', 'payment_method'],
    where?: WhereOptions<IGetOffer>,
  ): Promise<IOfferReturn[]> {
    try {
      let offers: any;

      const joinObjArr: {
        association?: string;
        model?: any;
        as?: string;
        include?: any;
      }[] = associationArr.map((join) => {
        let joinObj: {
          association?: string;
          model?: any;
          as?: string;
          include?: any;
        } = {};

        if (typeof join === 'string') {
          joinObj.association = join;
        }

        if (join === 'payment_method') {
          joinObj.model = PaymentMethod;
          joinObj.as = 'payment_method';
          joinObj.include = {
            model: PaymentMethodCategory,
            as: 'payment_method_category',
          };
        }

        return joinObj;
      });

      if (where) {
        offers = await Offer.findAndCountAll({
          where,
          // @ts-ignore
          include: joinObjArr,
          limit,
          offset: skip,
        });
      } else {
        offers = await Offer.findAndCountAll({
          // @ts-ignore
          include: joinObjArr,
          limit,
          offset: skip,
        });
      }

      interface INewOffer {
        [key: string]: any;
      }

      const mapedOffers: IOfferReturn[] = offers.rows.map((offer) => {
        const newOffer: INewOffer = offerValuesAssigner(offer);

        associationArr.forEach((association) => {
          newOffer[association] = offer.get()[association].get();
        });

        return newOffer;
      });

      this.offers = mapedOffers;
    } catch (err) {
      throw Error(err);
    }
    return this.offers;
  }

  // Payment Method methods
  async createPaymentMethod(
    paymentMethodData: ICreatePaymentMethod,
  ): Promise<IPaymentMethodReturn> {
    try {
      const paymentMethod = await PaymentMethod.create(paymentMethodData);
      this.paymentMethod = paymentMethod.get();
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethod;
  }

  async updatePaymentMethod(
    where: WhereOptions<IUpdatePaymentMethod>,
    paymentMethodDataToUpdate: IUpdatePaymentMethod,
  ): Promise<IUpdatePaymentMethod> {
    try {
      const updatedPaymentMethod: object = await PaymentMethod.update(
        paymentMethodDataToUpdate,
        { where },
      );
      this.updatedPaymentMethod = updatedPaymentMethod;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedPaymentMethod;
  }

  async deletePaymentMethod(
    where: WhereOptions<IDeletePaymentMethod>,
  ): Promise<number> {
    try {
      const deletedPaymentMethod: number = await PaymentMethod.destroy({
        where,
      });
      this.deletedPaymentMethod = deletedPaymentMethod;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedPaymentMethod;
  }

  async getPaymentMethod(
    where: WhereOptions<IGetPaymentMethod>,
    associationArr: [] | ['payment_method_category'],
  ): Promise<IPaymentMethodReturn> {
    try {
      const joinObjArr = associationsToArray(associationArr);

      const paymentMethod = await PaymentMethod.findOne({
        where,
        include: joinObjArr,
      });

      if (!paymentMethod) {
        this.paymentMethod = null;
        return this.paymentMethod;
      }

      const newPaymentMethod: any = paymentMethodValuesAssigner(paymentMethod);

      associationArr.forEach((association) => {
        newPaymentMethod[association] = paymentMethod
          .get()
          [association].map((assoc) => ({ ...assoc.get() }));
      });

      this.paymentMethod = newPaymentMethod;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethod;
  }

  async getPaymentMethodByCategory(
    where: WhereOptions<IGetPaymentMethod>,
    associationArr: [] | ['payment_method_category'],
    categoryName: string,
  ): Promise<IPaymentMethodReturn> {
    try {
      const joinObjArr = associationsToArray(associationArr);

      const category = await PaymentMethodCategory.findOne({
        where: { name: categoryName },
      });

      if (!category) {
        this.paymentMethod = null;
        return this.paymentMethod;
      }

      const newWhere = {
        ...where,
        payment_method_category_id: BigInt(category.get().id),
      };

      const paymentMethod = await PaymentMethod.findOne({
        where: newWhere,
        include: joinObjArr,
      });

      if (!paymentMethod) {
        this.paymentMethod = null;
        return this.paymentMethod;
      }

      const newPaymentMethod: any = paymentMethodValuesAssigner(paymentMethod);

      associationArr.forEach((association) => {
        newPaymentMethod[association] = paymentMethod.get()[association].get();
      });

      this.paymentMethod = newPaymentMethod;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethod;
  }

  async getPaymentMethods(
    limit: null | number,
    associationArr: [] | ['payment_method_category'],
    where?: WhereOptions<IGetPaymentMethod>,
  ): Promise<IPaymentMethodReturn[]> {
    try {
      let paymentMethods: any;

      const joinObjArr = associationsToArray(associationArr);

      if (where) {
        if (limit) {
          paymentMethods = await PaymentMethod.findAll({
            where,
            include: joinObjArr,
            limit,
          });
        } else {
          paymentMethods = await PaymentMethod.findAll({
            where,
            include: joinObjArr,
          });
        }
      } else {
        if (limit) {
          paymentMethods = await PaymentMethod.findAll({
            include: joinObjArr,
            limit,
          });
        } else {
          paymentMethods = await PaymentMethod.findAll({
            include: joinObjArr,
          });
        }
      }

      interface INewPaymentMethod {
        [key: string]: any;
      }

      const mapedPaymentMethods: IPaymentMethodReturn[] = paymentMethods.map(
        (paymentMethod) => {
          const newPaymentMethod: INewPaymentMethod = paymentMethodValuesAssigner(
            paymentMethod,
          );

          associationArr.forEach((association) => {
            newPaymentMethod[association] = paymentMethod
              .get()
              [association].map((assoc) => ({ ...assoc.get() }));
          });

          return newPaymentMethod;
        },
      );

      this.paymentMethods = mapedPaymentMethods;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethods;
  }

  async getPaymentMethodsPagination(
    limit: number,
    skip: number,
    associationArr: [] | ['payment_method_category'],
    where?: WhereOptions<IGetPaymentMethod>,
  ): Promise<IPaymentMethodReturn[]> {
    try {
      let paymentMethods: any;

      const joinObjArr = associationsToArray(associationArr);

      if (where) {
        paymentMethods = await PaymentMethod.findAndCountAll({
          where,
          include: joinObjArr,
          limit,
          offset: skip,
        });
      } else {
        paymentMethods = await PaymentMethod.findAndCountAll({
          include: joinObjArr,
          limit,
          offset: skip,
        });
      }

      interface INewPaymentMethod {
        [key: string]: any;
      }

      const mapedPaymentMethods: IPaymentMethodReturn[] = paymentMethods.rows.map(
        (paymentMethod) => {
          const newPaymentMethod: INewPaymentMethod = paymentMethodValuesAssigner(
            paymentMethod,
          );

          associationArr.forEach((association) => {
            newPaymentMethod[association] = paymentMethod
              .get()
              [association].map((assoc) => ({ ...assoc.get() }));
          });

          return newPaymentMethod;
        },
      );

      this.paymentMethods = mapedPaymentMethods;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethods;
  }

  async getPaymentMethodsByCategory(
    limit: null | number,
    categoryWhere: WhereOptions<IGetPaymentMethodCategory>,
    associationArr: [] | ['payment_method_category'],
    where?: WhereOptions<IGetPaymentMethod>,
  ): Promise<IPaymentMethodReturn[]> {
    try {
      let paymentMethods: any;

      const joinObjArr = associationsToArray(associationArr);

      const category = await PaymentMethodCategory.findOne({
        where: categoryWhere,
      });

      if (!category) {
        this.paymentMethods = [];
        return this.paymentMethods;
      }

      const newWhere = {
        ...where,
        payment_method_category_id: BigInt(category.get().id),
      };

      if (limit) {
        paymentMethods = await PaymentMethod.findAll({
          where: newWhere,
          include: joinObjArr,
          limit,
        });
      } else {
        paymentMethods = await PaymentMethod.findAll({
          where: newWhere,
          include: joinObjArr,
        });
      }

      interface INewPaymentMethod {
        [key: string]: any;
      }

      const mapedPaymentMethods: IPaymentMethodReturn[] = paymentMethods.map(
        (paymentMethod) => {
          const newPaymentMethod: INewPaymentMethod = paymentMethodValuesAssigner(
            paymentMethod,
          );

          associationArr.forEach((association) => {
            newPaymentMethod[association] = paymentMethod
              .get()
              [association].get();
          });

          return newPaymentMethod;
        },
      );

      this.paymentMethods = mapedPaymentMethods;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethods;
  }

  async getPaymentMethodsByCategoryPagination(
    limit: number,
    skip: number,
    categoryWhere: WhereOptions<IGetPaymentMethodCategory>,
    associationArr: [] | ['payment_method_category'],
    where?: WhereOptions<IGetPaymentMethod>,
  ): Promise<IPaymentMethodReturn[]> {
    try {
      let paymentMethods: any;

      const joinObjArr = associationsToArray(associationArr);

      const category = await PaymentMethodCategory.findOne({
        where: categoryWhere,
      });

      if (!category) {
        this.paymentMethods = [];
        return this.paymentMethods;
      }

      const newWhere = {
        ...where,
        payment_method_category_id: BigInt(category.get().id),
      };

      paymentMethods = await PaymentMethod.findAndCountAll({
        where: newWhere,
        include: joinObjArr,
        limit,
        offset: skip,
      });

      interface INewPaymentMethod {
        [key: string]: any;
      }

      const mapedPaymentMethods: IPaymentMethodReturn[] = paymentMethods.rows.map(
        (paymentMethod) => {
          const newPaymentMethod: INewPaymentMethod = paymentMethodValuesAssigner(
            paymentMethod,
          );

          associationArr.forEach((association) => {
            newPaymentMethod[association] = paymentMethod
              .get()
              [association].get();
          });

          return newPaymentMethod;
        },
      );

      this.paymentMethods = mapedPaymentMethods;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethods;
  }

  // Payment Method Category methods
  async createPaymentMethodCategory(
    paymentMethodCategoryData: ICreatePaymentMethodCategory,
  ): Promise<IPaymentMethodCategoryReturn> {
    try {
      const newPaymentMethodCategory = await PaymentMethodCategory.create(
        paymentMethodCategoryData,
      );
      this.paymentMethodCategory = newPaymentMethodCategory.get();
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethodCategory;
  }

  async updatePaymentMethodCategory(
    where: WhereOptions<IUpdatePaymentMethodCategory>,
    paymentMethodCategoryDataToUpdate: IUpdatePaymentMethodCategory,
  ): Promise<object> {
    try {
      const updatedPaymentMethodCategory: object = await PaymentMethodCategory.update(
        paymentMethodCategoryDataToUpdate,
        { where },
      );
      this.updatedPaymentMethodCategory = updatedPaymentMethodCategory;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedPaymentMethodCategory;
  }

  async deletePaymentMethodCategory(
    where: WhereOptions<IDeletePaymentMethodCategory>,
  ): Promise<number> {
    try {
      const deletedPaymentMethodCategory: number = await PaymentMethodCategory.destroy(
        { where },
      );
      this.deletedPaymentMethodCategory = deletedPaymentMethodCategory;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedPaymentMethodCategory;
  }

  async getPaymentMethodCategory(
    where: WhereOptions<IGetPaymentMethodCategory>,
  ): Promise<IPaymentMethodCategoryReturn> {
    try {
      const paymentMethodCategory = await PaymentMethodCategory.findOne({
        where,
      });

      if (!paymentMethodCategory) {
        this.paymentMethodCategory = null;
        return this.paymentMethodCategory;
      }

      const newPaymentMethodCategory: any = paymentMethodValuesAssigner(
        paymentMethodCategory,
      );

      this.paymentMethodCategory = newPaymentMethodCategory;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethodCategory;
  }

  async getPaymentMethodCategories(
    limit: null | number,
    where?: WhereOptions<IGetPaymentMethodCategory>,
  ): Promise<IPaymentMethodCategoryReturn[]> {
    try {
      let paymentMethodCategories: any;

      if (where) {
        if (limit) {
          paymentMethodCategories = await PaymentMethodCategory.findAll({
            where,
            limit,
          });
        } else {
          paymentMethodCategories = await PaymentMethodCategory.findAll({
            where,
          });
        }
      } else {
        if (limit) {
          paymentMethodCategories = await PaymentMethodCategory.findAll({
            limit,
          });
        } else {
          paymentMethodCategories = await PaymentMethodCategory.findAll();
        }
      }

      interface INewPaymentMethodCategory {
        [key: string]: any;
      }

      const mapedPaymentMethodCategories: IPaymentMethodCategoryReturn[] = paymentMethodCategories.map(
        (paymentMethodCategory) => {
          const newPaymentMethodCategory: INewPaymentMethodCategory = paymentMethodCategoryValuesAssigner(
            paymentMethodCategory,
          );

          return newPaymentMethodCategory;
        },
      );

      this.paymentMethodCategories = mapedPaymentMethodCategories;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethodCategories;
  }

  async getPaymentMethodCategoriesPagination(
    limit: number,
    skip: number,
    where?: WhereOptions<IGetPaymentMethodCategory>,
  ): Promise<IPaymentMethodCategoryReturn[]> {
    try {
      let paymentMethodCategories: any;

      if (where) {
        paymentMethodCategories = await PaymentMethodCategory.findAndCountAll({
          where,
          limit,
          offset: skip,
        });
      } else {
        paymentMethodCategories = await PaymentMethodCategory.findAndCountAll({
          limit,
          offset: skip,
        });
      }

      interface INewPaymentMethodCategory {
        [key: string]: any;
      }

      const mapedPaymentMethodCategories: IPaymentMethodCategoryReturn[] = paymentMethodCategories.rows.map(
        (paymentMethodCategory) => {
          const newPaymentMethodCategory: INewPaymentMethodCategory = paymentMethodCategoryValuesAssigner(
            paymentMethodCategory,
          );

          return newPaymentMethodCategory;
        },
      );

      this.paymentMethodCategories = mapedPaymentMethodCategories;
    } catch (err) {
      throw Error(err);
    }
    return this.paymentMethodCategories;
  }

  // Trade methods
  async createTrade(tradeData: ICreateTrade): Promise<ITradeReturn> {
    try {
      const trade = await Trade.create(tradeData);

      this.trade = trade.get();
    } catch (err) {
      throw Error(err);
    }
    return this.trade;
  }

  async updateTrade(
    where: WhereOptions<IUpdateTrade>,
    tradeDataToUpdate: IUpdateTrade,
  ): Promise<object> {
    try {
      const updatedTrade: object = await Trade.update(tradeDataToUpdate, {
        where,
      });
      this.updatedTrade = updatedTrade;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedTrade;
  }

  async deleteTrade(where: WhereOptions<IDeleteTrade>): Promise<number> {
    try {
      const deletedTrade: number = await Trade.destroy({ where });
      this.deletedTrade = deletedTrade;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedTrade;
  }

  async getTrade(
    associationArr:
      | []
      | ['vendor']
      | ['offer']
      | ['cryptocurrency']
      | ['chat']
      | ['vendor', 'offer']
      | ['vendor', 'offer', 'cryptocurrency']
      | ['vendor', 'offer', 'cryptocurrency', 'chat'],
    where: WhereOptions<IGetTrade>,
  ): Promise<ITradeReturn> {
    try {
      let trade: any;

      const joinObjArr = associationsToArray(associationArr);

      trade = await Trade.findOne({
        where,
        include: joinObjArr,
      });

      if (!trade) {
        this.trade = null;
        return this.trade;
      }

      const newTrade: any = tradeValuesAssigner(trade);

      associationArr.forEach((association) => {
        newTrade[association] = trade.get()[association].get();
      });

      this.trade = newTrade;
    } catch (err) {
      throw Error(err);
    }
    return this.trade;
  }

  async getTrades(
    limit: null | number,
    associationArr:
      | []
      | ['vendor']
      | ['offer']
      | ['cryptocurrency']
      | ['chat']
      | ['vendor', 'offer']
      | ['vendor', 'offer', 'cryptocurrency']
      | ['vendor', 'offer', 'cryptocurrency', 'chat'],
    where?: WhereOptions<IGetTrade>,
  ): Promise<ITradeReturn[]> {
    try {
      let trades: any;

      const joinObjArr = associationsToArray(associationArr);

      if (limit) {
        if (where) {
          trades = await Trade.findAll({
            where,
            include: joinObjArr,
            limit,
          });
        } else {
          trades = await Trade.findAll({
            include: joinObjArr,
            limit,
          });
        }
      } else {
        if (where) {
          trades = await Trade.findAll({
            where,
            include: joinObjArr,
          });
        } else {
          trades = await Trade.findAll({
            include: joinObjArr,
          });
        }
      }

      interface INewTrade {
        [key: string]: any;
      }

      const mapedTrades: ITradeReturn[] = trades.map((trade) => {
        const newTrade: INewTrade = tradeValuesAssigner(trade);

        associationArr.forEach((association) => {
          newTrade[association] = trade.get()[association].get();
        });

        return newTrade;
      });

      this.trades = mapedTrades;
    } catch (err) {
      throw Error(err);
    }
    return this.trades;
  }

  async getTradesPagination(
    limit: number,
    skip: number,
    associationArr:
      | []
      | ['vendor']
      | ['offer']
      | ['cryptocurrency']
      | ['chat']
      | ['vendor', 'offer']
      | ['vendor', 'offer', 'cryptocurrency']
      | ['vendor', 'offer', 'cryptocurrency', 'chat'],
    where?: WhereOptions<IGetTrade>,
  ): Promise<ITradeReturn[]> {
    try {
      let trades: any;

      const joinObjArr = associationsToArray(associationArr);

      if (where) {
        trades = await Trade.findAndCountAll({
          where,
          include: joinObjArr,
          limit,
          offset: skip,
        });
      } else {
        trades = await Trade.findAndCountAll({
          include: joinObjArr,
          limit,
          offset: skip,
        });
      }

      interface INewTrade {
        [key: string]: any;
      }

      const mapedTrades: ITradeReturn[] = trades.rows.map((trade) => {
        const newTrade: INewTrade = tradeValuesAssigner(trade);

        associationArr.forEach((association) => {
          newTrade[association] = trade.get()[association].get();
        });

        return newTrade;
      });

      this.trades = mapedTrades;
    } catch (err) {
      throw Error(err);
    }
    return this.trades;
  }

  async countTrades(where?: WhereOptions<IGetTrade>): Promise<number> {
    try {
      const count = await Trade.count({ where });

      this.tradeCount = count;
    } catch (err) {
      throw Error(err);
    }
    return this.tradeCount;
  }

  // Chat
  async createChat(chatData: ICreateChat): Promise<IChatReturn> {
    try {
      const chat = await Chat.create(chatData);
      this.chat = chat.get();
    } catch (err) {
      throw Error(err);
    }
    return this.chat;
  }

  async updateChat(
    where: WhereOptions<IUpdateChat>,
    chatDataToUpdate: IUpdateChat,
  ): Promise<IUpdateChat> {
    try {
      const updatedChat: object = await Chat.update(chatDataToUpdate, {
        where,
      });
      this.updatedChat = updatedChat;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedChat;
  }

  async deleteChat(where: WhereOptions<IDeleteChat>): Promise<number> {
    try {
      const deletedChat: number = await Chat.destroy({ where });
      this.deletedChat = deletedChat;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedChat;
  }

  async getChat(where: WhereOptions<IGetChat>): Promise<IChatReturn> {
    try {
      const chat = await Chat.findOne({ where });

      if (!chat) {
        this.chat = null;
        return this.chat;
      }

      this.chat = chat.get();
    } catch (err) {
      throw Error(err);
    }
    return this.chat;
  }

  async getChats(where?: WhereOptions<IGetChat>): Promise<IChatReturn[]> {
    try {
      let chats: any;
      if (where) {
        chats = await Chat.findAll({ where });
      } else {
        chats = await Chat.findAll();
      }

      const mapedChats: any[] = chats.map((chat) => ({ ...chat }));
      this.chats = mapedChats;
    } catch (err) {
      throw Error(err);
    }
    return this.chats;
  }

  async getChatsPagination(
    limit: number,
    skip: number,
    where?: WhereOptions<IGetChat>,
  ): Promise<IChatReturn[]> {
    try {
      let chats: any;

      if (where) {
        chats = await Chat.findAndCountAll({ where, limit, offset: skip });
      } else {
        chats = await Chat.findAndCountAll({ limit, offset: skip });
      }

      const mapedChats: any[] = chats.rows.map((chat) => ({ ...chat }));
      this.chats = mapedChats;
    } catch (err) {
      throw Error(err);
    }
    return this.chats;
  }

  // MongoDB
  // Chat Message methods
  async createChatMessage(
    chatMessageData: ICreateChatMessage,
  ): Promise<IChatMessageReturn> {
    try {
      const newChatMessage = new ChatMessage(chatMessageData);

      this.chatMessage = await newChatMessage.save();
    } catch (err) {
      throw Error(err);
    }
    return this.chatMessage;
  }

  async updateChatMessage(
    where: FilterQuery<IUpdateChatMessage>,
    chatMessageDataToUpdate: IUpdateChatMessage,
  ): Promise<IUpdateChatMessage> {
    try {
      const updatedChatMessage: any = await ChatMessage.findOneAndUpdate(
        // @ts-ignore
        where,
        chatMessageDataToUpdate,
        { runValidators: true },
      );

      this.updatedChatMessage = updatedChatMessage;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedChatMessage;
  }

  async deleteChatMessage(
    where: FilterQuery<IDeleteChatMessage>,
  ): Promise<IDeleteChatMessage> {
    try {
      const deletedChatMessage: IDeleteChatMessage = await ChatMessage.findOneAndDelete(
        // @ts-ignore
        where,
      );

      this.deletedChatMessage = deletedChatMessage;
    } catch (err) {
      throw Error(err);
    }
    return this.deletedChatMessage;
  }

  async getChatMessage(
    where: FilterQuery<IGetChatMessage>,
  ): Promise<IChatMessageReturn> {
    try {
      // @ts-ignore
      const chatMessage = await ChatMessage.findOne(where);

      if (!chatMessage) {
        this.chatMessage = null;
        return this.chatMessage;
      }

      this.chatMessage = chatMessage;
    } catch (err) {
      throw Error(err);
    }
    return this.chatMessage;
  }

  async getChatMessages(
    limit: null | number,
    where: FilterQuery<IGetChatMessage>,
  ): Promise<IChatMessageReturn[]> {
    try {
      let chatMessages: any;

      if (limit) {
        // @ts-ignore
        chatMessages = await ChatMessage.find(where).limit(limit);
      } else {
        // @ts-ignore
        chatMessages = await ChatMessage.find(where);
      }

      this.chatMessages = chatMessages;
    } catch (err) {
      throw Error(err);
    }
    return this.chatMessages;
  }
}
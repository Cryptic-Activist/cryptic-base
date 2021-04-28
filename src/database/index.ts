import connection from '../config/database/postgres/index';

import User from '../models/postgres/User/User';
import ProfileImage from '../models/postgres/ProfileImage/ProfileImage';
import Language from '../models/postgres/Language/Language';
import UserLanguages from '../models/postgres/UserLanguages/UserLanguages';
import Offer from '../models/postgres/Offer/Offer';
import Cryptocurrency from '../models/postgres/Cryptocurrency/Cryptocurrency';
import Fiat from '../models/postgres/Fiat/Fiat';
import Feedback from '../models/postgres/Feedback/Feedback';
import Trade from '../models/postgres/Trade/Trade';
import Chat from '../models/postgres/Chat/Chat';
import PaymentMethod from '../models/postgres/PaymentMethod/PaymentMethod';
import PaymentMethodCategory from '../models/postgres/PaymentMethodCategory/PaymentMethodCategory';

User.init(connection);
ProfileImage.init(connection);
Language.init(connection);
UserLanguages.init(connection);
Offer.init(connection);
Cryptocurrency.init(connection);
Fiat.init(connection);
Feedback.init(connection);
Trade.init(connection);
Chat.init(connection);
PaymentMethod.init(connection);
PaymentMethodCategory.init(connection);

User.associate(connection.models);
ProfileImage.associate(connection.models);
Language.associate(connection.models);
Offer.associate(connection.models);
Cryptocurrency.associate(connection.models);
Fiat.associate(connection.models);
Feedback.associate(connection.models);
Trade.associate(connection.models);
Chat.associate(connection.models);
PaymentMethod.associate(connection.models);
PaymentMethodCategory.associate(connection.models);

export default connection;

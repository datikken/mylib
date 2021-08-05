import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions()
	};
};

const getMongoString = (configService: ConfigService) => {
	return configService.get('MONGO_CONNECTION')
}

const getMongoOptions = () => ({
  	eNewUrlParser: true,
  	eCreateIndex: true,
  	eUnifiedTopology: true
});
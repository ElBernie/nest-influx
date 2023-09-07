import { ConfigurableModuleBuilder } from '@nestjs/common';
import { InfluxModuleOptions } from './interfaces/influx-module-options.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
	new ConfigurableModuleBuilder<InfluxModuleOptions>()
		.setClassMethodName('forRoot')
		.build();

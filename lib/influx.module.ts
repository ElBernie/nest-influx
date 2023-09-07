import { Global, Module, OnModuleDestroy } from '@nestjs/common';

import { ConfigurableModuleClass } from './influx.module-definition';
import InfluxClientService from './services/client.service';
import { InfluxDB } from '@influxdata/influxdb-client';

@Global()
@Module({
	providers: [InfluxClientService],
	exports: [InfluxClientService],
})
export default class InfluxModule extends ConfigurableModuleClass {}

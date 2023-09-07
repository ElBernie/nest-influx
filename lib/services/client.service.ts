import { Inject, Injectable } from '@nestjs/common';
import { InfluxModuleOptions } from '../interfaces/influx-module-options.interface';
import { MODULE_OPTIONS_TOKEN } from '../influx.module-definition';
import {
	InfluxDB,
	Point,
	QueryApi,
	QueryOptions,
	WriteApi,
	WriteOptions,
	WritePrecisionType,
} from '@influxdata/influxdb-client';

@Injectable()
export default class InfluxClientService {
	influxDB: InfluxDB;
	writeClient: WriteApi;
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN) private config: InfluxModuleOptions
	) {
		this.influxDB = new InfluxDB({ ...config });
	}

	getWriteApi(
		org: string,
		bucket: string,
		precision?: WritePrecisionType,
		writeOptions?: Partial<WriteOptions>
	): WriteApi {
		return this.influxDB.getWriteApi(org, bucket, precision, writeOptions);
	}

	getQueryApi(org: string | QueryOptions): QueryApi {
		return this.influxDB.getQueryApi(org);
	}
}

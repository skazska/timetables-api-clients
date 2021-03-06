import {ICRUDExecutableConfig, ICUExecuteOptions} from "@skazska/abstract-service-model";
import {IClientKey, IClientProps} from "./model";
import {ClientStorage} from "./aws/storage";

export interface IClientExecutableConfig extends ICRUDExecutableConfig<IClientKey, IClientProps> {
    storage :ClientStorage
}

export interface IClientCUExecutableOptions extends ICUExecuteOptions<IClientKey, IClientProps> {}
